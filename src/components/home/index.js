/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, Block } from 'galio-framework';
import * as themes from '../../constants';
import { useState } from 'react';
import { ListItem } from 'react-native-elements';
import {
  Feather,
  Entypo,
} from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import auth from '@react-native-firebase/auth';
import HCI from '../../customRootComponents/homeCardImage';
import LinearGradient from 'react-native-linear-gradient';
import SmartImage from '../../customRootComponents/smartImage';
import FastImage from 'react-native-fast-image';
import { color } from 'react-native-reanimated';
// import {Carousel} from '@ant-design/react-native';

export default function Home() {
  const [isplaying] = useState(0);
  const [] = useState(0);
  const user = auth().currentUser;
  if (user) {
    console.log(user.uid);
  }

  let playButton;
  if (isplaying) {
    playButton = <FontAwesome name="pause-circle" size={48} color="white" />;
  } else {
    playButton = <FontAwesome name="play-circle" size={48} color="white" />;
  }
  return (
    
    <ScrollView style={{ flex: 1 , backgroundColor:'#'}}>
      <LinearGradient colors={['#66b2ff','#7abdff','#ffffff']}
        locations={[0.1,0.2,1]}>
                  
      {/* AppName and playbutton controls section {start} */}
      <View style={{}}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Musynk</Text>
        </View>
        <View style={styles.bellIcon}>
          <TouchableOpacity
            style={{ alignSelf: 'center' }}
          // onPress={() => setPlay(!isplaying)}
          >
            {/* {playButton} */}
            <Feather name="bell" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Appname and playbutton controls end */}

      {/* Banner Carousal start */}
      {/* using ant design */}
      {/* <Carousel style={styles.carouselContainer} 
        autoplay={true}

      
      /> */}

      <View
        style={styles.carouselContainer}>
        <Carousel
          style={{ borderRadius:10 }}
          autoplayInterval={2500}
          loopClonesPerSide={2}
          loop={false}
          enableSnap={true}
          lockScrollWhileSnapping={true}
          autoplay={false}
          data={themes.articles}
          renderItem={({ item }) => (
            <Block card flex style={{ alignSelf: 'center', width: '100%',height:"100%" }}>
              {/* {setImage(prev => item.id)} */}
               <SmartImage
                source={item.image}
                style={{ height: '100%', width: '100%' ,    borderRadius:10              }}
                priorityValue={FastImage.priority.high}
                cacheControl={FastImage.cacheControl.immutable}
              /> 
            </Block>
          )}
          itemWidth={Dimensions.get('screen').width-20}
          sliderWidth={Dimensions.get('screen').width-20}
        />
      </View>
      {/* Banner Carousal end */}

      {/*Albums and their cards section (NEW RELEASES)*/}
      <Text style={styles.textTitle}>New Release</Text>
      <View horizontal style={{ width: '100%', height: 160, marginTop: 5 }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={themes.articles}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5}>
              <HCI uri={item.image} textTitle={item.title} isHome={true} />
            </TouchableOpacity>
          )}
        />
      </View>
      {/*Albums and their cards section (NEW RELEASES)*/}

      {/*Albums and their cards section (GAHUDI RELEASES)*/}
      <Text style={styles.textTitle}>Gahudi</Text>
      <View horizontal style={{ width: '100%', height: 160, marginTop: 5 }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={themes.articles}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5}>
              <HCI uri={item.image} textTitle={item.title} isHome={true} />
            </TouchableOpacity>
          )}
        />
      </View>
      {/*Albums and their cards section (Gahudi RELEASES)*/}

      {/*Albums and their cards section (Kumani RELEASES)*/}

      <Text style={styles.textTitle}>Kumani</Text>
      <View horizontal style={styles.horView}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={themes.articles}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5}>
              <HCI uri={item.image} textTitle={item.title} isHome={true} />
            </TouchableOpacity>
          )}
        />
      </View>
      {/*Albums and their cards section (Kumani RELEASES)*/}

      {/*Only Gahudi Songs and their Flatlist*/}
      <FlatList
        style={{ marginTop: 0 }}
        ListHeaderComponent={<Text style={styles.textTitle}>New from Gahudi Artists</Text>}
        ListFooterComponent={<View />}
        showsHorizontalScrollIndicator={false}
        data={themes.articles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ width: '100%', alignSelf: 'center' }}>

            <ListItem
              containerStyle={{
                marginTop:10,
                height: 80,
                backgroundColor: 'transparent',

              }}
              title={item.title}
              titleStyle={{
                color: 'black',
                fontWeight:'600',
                fontSize: 20,
              }}
              subtitleStyle={{ color: 'black' }}
              subtitle={'Artist : ' + item.artist}
              leftElement={
                <SmartImage
                  // isHome = {true}
                  style={{
                    width: 70,
                    height: 70,
                    backgroundColor: 'red',
                    alignSelf:'center',
                    borderRadius:5
                  }}
                  source={item.image}
                  priorityValue={FastImage.priority.normal}
                  cacheControl={FastImage.cacheControl.immutable}
                // defaultsource={require('../../assets/images/musicicon.png')}
                />
              }
             
              rightElement={
                <TouchableOpacity>
                  <Entypo
                    name="dots-three-vertical"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              }
            />
          </TouchableOpacity>
        )}
      />
      {/*Only Gahudi Songs and their Flatlist*/}

      {/*Only Kumani Songs and their Flatlist*/}
      <FlatList

        ListHeaderComponent={<Text style={styles.textTitle}>New from Kumani Artists</Text>}
        ListFooterComponent={<View />}
        style={{ marginTop:40, }}
        showsHorizontalScrollIndicator={false}
        data={themes.articles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
          style={{ width: '100%', alignSelf: 'center' }}>
           
              <ListItem
              containerStyle={{
                marginTop:10,
                height: 80,
                backgroundColor: 'transparent',
              }}
                
                title={item.title}
                titleStyle={{
                  color: 'black',
                  fontWeight:'600',
                  fontSize: 20,
                }}
                subtitleStyle={{ color: 'black' }}
                subtitle={'Artist : ' + item.artist}
                leftElement={
                  <SmartImage
                    // isHome = {true}
                    style={{
                      width: 70,
                      height: 70,
                      backgroundColor: 'red',
                      alignSelf:'center',
                      borderRadius:5
                    }}
                    source={item.image}
                    priorityValue={FastImage.priority.normal}
                    cacheControl={FastImage.cacheControl.immutable}
                  // defaultsource={require('../../assets/images/musicicon.png')}
                  />
                }
                rightElement={
                  <TouchableOpacity>
                    <Entypo
                    name="dots-three-vertical"
                    size={24}
                    color="black"
                  />
                  </TouchableOpacity>
                }
              />
          </TouchableOpacity>
        )}
      />
      {/*Only Kumani Songs and their Flatlist*/}
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerView: {
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    marginBottom:10
  },
  headerText: {
    color: '#25df25',
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    textShadowOffset: { width: 0.5, height: -1 },
    textShadowRadius: 20,
  },
  bellIcon: {
    alignSelf: 'flex-end',
    paddingRight: 10,
    paddingTop: 2.5,
    paddingBottom: 2.5,
    color: '#33cc00'
  },
  carouselContainer: {

    height: 152,
    width: '75%',
    alignSelf: 'center',
    alignItems:'center',
    marginTop: 15,
    marginBottom:20,
    borderRadius:10
  },
  newRelease: {

  },

  textTitle: {
    color: 'black',
    fontFamily: 'verdana',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'justify',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom:5
  },
  horView: {
    width: '100%',
    height: 160,
    marginTop: 5
  }
})