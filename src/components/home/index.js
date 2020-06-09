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

import auth, { firebase } from '@react-native-firebase/auth';



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

    <ScrollView style={{ flex: 1, backgroundColor: '#140341' }}>



      {/* AppName and playbutton controls section {start} */}

      <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }}>
        <View style={{ backgroundColor: 'black', width: '70%', height: 45, position: 'absolute' }}>
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
        </View>
        <View style={{ backgroundColor: 'black', width: '28%', height: 45, position: 'relative', alignSelf: 'flex-end' }}>
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
                <Image
                  style={{ height: 150, width: 350 }}
                  source={{ uri: item.image }}
                  PlaceholderContent={<ActivityIndicator />}
                  borderRadius={5}
                  resizeMethod="resize"
                  resizeMode="cover"
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
      <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 15 }}>
        <Text style={{ color: 'white', }} h5 bold > New Releases </Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <Ionicons name="ios-arrow-forward" size={24} color="green" />
          <Ionicons name="ios-arrow-forward" size={24} color="yellow" />
        </TouchableOpacity>
      </View>
      <View horizontal style={{ width: '100%', height: 150, marginTop: 10, marginLeft: 8 }}>
        <FlatList horizontal={true}
          data={themes.articles}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => (
              <TouchableOpacity activeOpacity={0.5}>
                <Card
                  containerStyle={{ width: 100, height: 100, elevation: 15, marginRight: 5, marginTop: 0, marginLeft: 5, backgroundColor: 'black', borderRadius: 90 }}
                  imageStyle={{ width: 100, height: 100, alignSelf: 'center', justifyContent: 'center', marginTop: -2 }}
                  imageProps={{ resizeMode: 'cover', borderRadius: 90, PlaceholderContent: <ActivityIndicator /> }}
                  image={{ uri: item.image }}
                />
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 13, width: '100%', fontWeight: 'bold', marginTop: 8 }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )
          }
        />
      </View>
      {/*Albums and their cards section (NEW RELEASES)*/}

      {/*Albums and their cards section (GAHUDI RELEASES)*/}


      <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center', justifyContent: 'space-between', }}>
        <TouchableOpacity><Text style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginTop: 5, color: 'white', marginLeft: 10, width: 75, marginBottom: 5 }} h5 bold >Gahudi</Text></TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <Ionicons name="ios-arrow-forward" size={24} color="green" />
          <Ionicons name="ios-arrow-forward" size={24} color="yellow" />
        </TouchableOpacity>
      </View>
      <View horizontal style={{ width: '100%', height: 120, marginTop: 5, marginLeft: 10 }}>
        <FlatList horizontal={true}
          data={themes.articles}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => (
              <TouchableOpacity activeOpacity={0.5}>
                <Card
                  containerStyle={{ width: 110, height: 90, elevation: 150, marginRight: 3, marginTop: 0, marginLeft: 5, borderColor: 'white', backgroundColor: 'black', borderRadius: 5 }}
                  imageStyle={{ width: 110, alignSelf: 'center', justifyContent: 'center', borderColor: 'black', height: 88 }}
                  imageProps={{ borderRadius: 5, PlaceholderContent: <ActivityIndicator /> }}
                  image={{ uri: item.image }}
                />
                <Text bold style={{ color: 'white', textAlign: 'center', marginTop: 5, fontSize: 13, width: '100%' }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )
          }
        />
      </View>


      {/*Albums and their cards section (Gahudi RELEASES)*/}


      {/*Albums and their cards section (Kumani RELEASES)*/}


      <TouchableOpacity>
        <Text style={{ borderBottomWidth: 1, borderBottomColor: 'white', marginTop: 5, color: 'white', marginLeft: 8, width: 105, marginBottom: 5 }} h4 bold >Kumani</Text>
      </TouchableOpacity>
      <View horizontal style={{ width: '100%', height: 150, marginTop: 5, borderColor: 'black', borderWidth: 1 }}>
        <FlatList horizontal={true}
          data={themes.articles}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => (
              <TouchableOpacity activeOpacity={0.5}>
                <Card
                  containerStyle={{ width: 150, height: 130, elevation: 150, marginRight: 3, marginTop: 0, marginLeft: 5, borderColor: 'white', backgroundColor: 'black', borderRadius: 5 }}
                  imageStyle={{ width: 150, alignSelf: 'center', justifyContent: 'center', borderRadius: 200, borderColor: 'black', height: 105 }}
                  imageProps={{ PlaceholderContent: <ActivityIndicator /> }}
                  image={{ uri: item.image }}
                >
                  <Text bold style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', marginTop: -7, fontSize: 12, width: '100%', fontWeight: '600' }}>
                    {item.title}
                  </Text>
                </Card>
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
            <TouchableOpacity style={{ width: '95%', alignSelf: 'center', marginBottom: 3 }}>
              <ListItem
                containerStyle={{ borderWidth: 1, borderColor: 'grey', height: 70, borderRadius: 25, backgroundColor: '#' }}
                title={item.title}
                titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
                subtitleStyle={{ color: 'white' }}
                subtitle={'Artist : ' + item.artist}
                leftAvatar={{
                  rounded: false,
                  source: { uri: item.image }

                }}
                bottomDivider
                topDivider
                rightElement={
                  <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="white" />
                  </TouchableOpacity>
                }

              />
            </TouchableOpacity>
          )
        }

      />


      {/*Only Gahudi Songs and their Flatlist*/}


      {/*Only Kumani Songs and their Flatlist*/}
      <TouchableOpacity style={{ marginTop: 20 }}>
        <Text style={{ borderBottomWidth: 2, borderBottomColor: 'white', color: 'white', marginLeft: 15, width: 260 }} h5 bold >
          New  from  Kumani  Artists
        </Text>
      </TouchableOpacity>
      <FlatList
        style={{ marginTop: 15, marginBottom: 50, }}
        data={themes.articles}
        keyExtractor={item => item.id}
        renderItem={
          ({ item }) => (
            <TouchableOpacity style={{ width: '95%', alignSelf: 'center', marginBottom: 3 }}>
              <ListItem
                containerStyle={{ borderWidth: 1, borderColor: 'grey', height: 70, borderRadius: 25, backgroundColor: '#' }}
                title={item.title}
                titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
                subtitleStyle={{ color: 'white' }}
                subtitle={'Artist : ' + item.artist}
                leftAvatar={{
                  rounded: false,
                  source: { uri: item.image }

                }}
                bottomDivider
                topDivider
                rightElement={
                  <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="white" />
                  </TouchableOpacity>
                }

              />
            </TouchableOpacity>
          )
        }

      />

      {/*Only Kumani Songs and their Flatlist*/}


    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container: {
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: 'center',
    fontSize: 50
  },
  textdisplay: {
    textAlign: "center",
    fontSize: 50,

  },
}
);
// 1800111345
// 18002093345
// 18002091345