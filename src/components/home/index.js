/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { Icon } from 'react-native-vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Text, Block } from 'galio-framework';
import * as themes from '../../constants'
import { useState } from 'react';
import { Image, Card, ListItem } from 'react-native-elements'
import { FontAwesome5, Feather, Entypo, AntDesign, MaterialIcons, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CImage from '../../customRootComponents/CImage'
import auth, { firebase } from '@react-native-firebase/auth';
import HCI from '../../customRootComponents/homeCardImage';
import LinearGradient from 'react-native-linear-gradient';



export default function Home() {
  
 
  const [isplaying, setPlay] = useState(0)
  const [carouselimage, setImage] = useState(0)
  const user = auth().currentUser;
  if(user){
    console.log(user.uid)
  }

  let playButton;
  if (isplaying) {
    playButton = <FontAwesome name="pause-circle" size={48} color="white" />
  } else {
    playButton = <FontAwesome name="play-circle" size={48} color="white" />
  }
  return (

    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={['#9296f0', '#2227ab', '#9296f0']}>
      {/* AppName and playbutton controls section {start} */}

      <View style={{ }}>
        <View style={{ width: '70%', height: 45, position: 'absolute' }}>
          {/* <LinearGradient colors={['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#2E2B5F', '#8B00FF']}> */}
          <Text
            h3
            bold
            color={'green'}
            style={{
              textAlign: 'right',
              textShadowColor: 'white',
              textShadowOffset: { width: 1, height: -2 },
              textShadowRadius: 1
            }}
          >
            M_Stream
      </Text>
      {/* </LinearGradient> */}
        </View>
        <View style={{ width: '28%', height: 45, position: 'relative', alignSelf: 'flex-end' }}>
          <TouchableOpacity
            style={{ alignSelf: 'center' }}
          // onPress={() => setPlay(!isplaying)}
          >
            {/* {playButton} */}
            <Feather name="bell" size={44} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Appname and playbutton controls end */}

      {/* Banner Carousal start */}

      <View style={{ height: 152, width: '85%', alignSelf: 'center', marginTop: 10 }}>
       
        <Carousel
          style={{}}
          autoplayInterval={2500}
          loopClonesPerSide={2}
          loop={false}
          enableSnap={true}
          lockScrollWhileSnapping={true}
          autoplay={false}
          data={themes.articles}
          renderItem={
            ({ item }) => (
              <Block card flex style={{ alignSelf: 'flex-end', width: '100%' }}>
                {/* {setImage(prev => item.id)} */}
                <CImage
                  uri={item.image}
                  style={{ height: 150, width: 350 }}
                  defaultsource={'../../assets/images/musicicon'}
                />
              </Block>
            )
          }
          itemWidth={350}
          sliderWidth={350}
        />
      </View>

      {/* Banner Carousal end */}

      {/*Albums and their cards section (NEW RELEASES)*/}
      <TouchableOpacity>
        <Text style={{borderBottomColor: 'white', marginTop: 20, color: 'white', marginLeft: 8, marginBottom: 5, fontSize:19}} bold >New Release</Text>
      </TouchableOpacity>
      <View horizontal style={{ width: '100%', height: 160, marginTop: 5,}}>
        <FlatList horizontal={true}
          data={themes.articles}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => (
              <TouchableOpacity activeOpacity={0.5}>
                <HCI uri={item.image} textTitle={item.title} isHome={true} />
              </TouchableOpacity>
            )
          }
        />
      </View>
      {/*Albums and their cards section (NEW RELEASES)*/}

      {/*Albums and their cards section (GAHUDI RELEASES)*/}
      <TouchableOpacity>
        <Text style={{borderBottomColor: 'white', marginTop: 5, color: 'white', marginLeft: 8, marginBottom: 5,}} h5 bold >Gahudi</Text>
      </TouchableOpacity>
      <View horizontal style={{ width: '100%', height: 160, marginTop: 5,}}>
        <FlatList horizontal={true}
          data={themes.articles}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => (
              <TouchableOpacity activeOpacity={0.5}>
                <HCI uri={item.image} textTitle={item.title} isHome={true} />
              </TouchableOpacity>
            )
          }
        />
      </View>
      {/*Albums and their cards section (Gahudi RELEASES)*/}


      {/*Albums and their cards section (Kumani RELEASES)*/}
      <TouchableOpacity>
        <Text style={{borderBottomColor: 'white', marginTop: 5, color: 'white', marginLeft: 8, marginBottom: 5,}} h5 bold >Kumani</Text>
      </TouchableOpacity>
      <View horizontal style={{ width: '100%', height: 160, marginTop: 5,}}>
        <FlatList horizontal={true}
          data={themes.articles}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => (
              <TouchableOpacity activeOpacity={0.5}>
                <HCI uri={item.image} textTitle={item.title} isHome={true} />
              </TouchableOpacity>
            )
          }
        />
      </View>
      {/*Albums and their cards section (Kumani RELEASES)*/}

      {/*Only Gahudi Songs and their Flatlist*/}
      <TouchableOpacity>
        <Text style={{ borderBottomWidth: 2, borderBottomColor: 'white', marginTop: 10, color: 'white', marginLeft: 15, width: 245 }} h5 bold >
          New from Gahudi Artists
        </Text>
      </TouchableOpacity>
      <FlatList
        style={{ marginTop: 15, }}
        data={themes.articles}
        keyExtractor={item => item.id}
        renderItem={
          ({ item }) => (
            <TouchableOpacity style={{ width: '95%', alignSelf: 'center', marginBottom: 3, }}>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#ccccbb', '#91916e']} style={{ borderRadius: 10}}>
              <ListItem
                containerStyle={{ borderWidth: 1, borderColor: 'grey', height: 70, borderRadius: 10, backgroundColor: '#' }}
                title={item.title}
                titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
                subtitleStyle={{ color: 'white' }}
                subtitle={'Artist : ' + item.artist}
                leftElement={
                  <CImage
                    // isHome = {true}
                    style={{width:50, height:50, backgroundColor:'red', alignSelf:'center'}}
                    uri = {item.image}
                    defaultsource={require('../../assets/images/musicicon.png')}
                  />
                }
                bottomDivider
                topDivider
                rightElement={
                  <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="white" />
                  </TouchableOpacity>
                }

              />
              </LinearGradient>
            </TouchableOpacity>
          )
        }/>
      {/*Only Gahudi Songs and their Flatlist*/}


      {/*Only Kumani Songs and their Flatlist*/}
      <TouchableOpacity style={{ marginTop: 20 }}>
        <Text style={{ borderBottomWidth: 2, borderBottomColor: 'white', color: 'white', marginLeft: 15, width: 260 }} h5 bold >
          New  from  Kumani  Artists
        </Text>
      </TouchableOpacity>
      <FlatList
        style={{ marginTop: 15, marginBottom: 50, borderRadius: 25,}}
        data={themes.articles}
        keyExtractor={item => item.id}
        renderItem={
          ({ item }) => (
            <TouchableOpacity style={{ width: '95%', alignSelf: 'center', marginBottom: 3, }}>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#192f6a', '#3b963b']} style={{ borderRadius: 10}}>
              <ListItem
                containerStyle={{ borderWidth: 1, borderColor: 'grey', height: 70, borderRadius: 10, backgroundColor: '#' }}
                title={item.title}
                titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
                subtitleStyle={{ color: 'white' }}
                subtitle={'Artist : ' + item.artist}
                leftElement={
                  <CImage
                    // isHome = {true}
                    style={{width:50, height:50, backgroundColor:'red', alignSelf:'center'}}
                    uri = {item.image}
                    defaultsource={require('../../assets/images/musicicon.png')}
                  />
                }
                bottomDivider
                topDivider
                rightElement={
                  <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="white" />
                  </TouchableOpacity>
                }

              />
              </LinearGradient>
            </TouchableOpacity>
          )
        }/>
      {/*Only Kumani Songs and their Flatlist*/}
      </LinearGradient>

    </ScrollView>

  );
}