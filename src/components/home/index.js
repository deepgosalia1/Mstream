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
import { FontAwesome5, Feather, Entypo, AntDesign, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';


export default function Home() {

  const [isplaying, setPlay] = useState(0)
  const [carouselimage, setImage] = useState(0)
  let playButton;
  if (isplaying) {
    playButton = <FontAwesome name="pause-circle" size={48} color="white" />
  } else {
    playButton = <FontAwesome name="play-circle" size={48} color="white" />
  }
  return (

    <ScrollView style={{ flex: 1, backgroundColor: '#120321' }}>



      {/* AppName and playbutton controls section {start} */}

      <View style={{ borderBottomWidth: 3, borderBottomColor: 'grey' }}>
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
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => setPlay(!isplaying)}>
            {playButton}
          </TouchableOpacity>
        </View>
      </View>

      {/* Appname and playbutton controls end */}

      {/* Banner Carousal start */}

      <View style={{ height: 250, width: '100%', alignSelf: 'center', borderColor: '#d9d9ff', }}>
        <Carousel
          style={{ flex: 1 }}
          autoplayInterval={2500}
          loopClonesPerSide={2}
          loop={true}
          enableSnap={true}
          lockScrollWhileSnapping={true}
          autoplay={true}
          data={themes.articles}
          renderItem={
            ({ item }) => (
              <Block card height={250} width={410} style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                {/* {setImage(prev => item.id)} */}
                <Image
                  style={{ height: 245, width: 405 }}
                  source={{ uri: item.image }}
                  PlaceholderContent={<ActivityIndicator />}
                />
              </Block>
            )
          }
          itemWidth={410}
          sliderWidth={410}
        />
      </View>

      {/* Banner Carousal end */}

      {/*Albums and their cards section (NEW RELEASES)*/}

      <Text style={{ marginTop: 10, color: 'white' }} h4 bold > New Releases </Text>

      <View horizontal style={{ width: '100%', height: 220, marginTop: 5, borderColor: 'black', borderWidth: 1, padding: 10 }}>

        <FlatList horizontal={true}
          data={themes.articles}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => (
              <TouchableOpacity activeOpacity={0.5}>
                <Card
                  containerStyle={{ width: 250, height: 190, elevation: 150, marginRight: 10, marginTop: 0, marginLeft: 5, borderColor: 'white', backgroundColor: 'black', borderRadius: 5 }}
                  imageStyle={{ width: 250, alignSelf: 'center', justifyContent: 'center', borderRadius: 200, borderColor: 'black' }}
                  imageProps={{ PlaceholderContent: <ActivityIndicator /> }}
                  image={{ uri: item.image }}
                >
                  <Text bold style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
                    {item.title}
                  </Text>
                </Card>
              </TouchableOpacity>
            )
          }
        />
      </View>
      {/*Albums and their cards section (NEW RELEASES)*/}

      {/*Albums and their cards section (GAHUDI RELEASES)*/}


      <TouchableOpacity>
        <Text style={{ borderBottomWidth: 2, borderBottomColor: 'white', marginTop: 10, color: 'white', marginLeft: 15, width: 100 }} h4 bold >Gahudi</Text>
      </TouchableOpacity>
      <View horizontal style={{ width: '100%', height: 220, marginTop: 5, borderColor: 'black', borderWidth: 1, padding: 10 }}>

        <FlatList horizontal={true}
          data={themes.articles}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => (
              <TouchableOpacity activeOpacity={0.5}>
                <Card
                  containerStyle={{ width: 250, height: 190, elevation: 150, marginRight: 10, marginTop: 0, marginLeft: 5, borderColor: 'white', backgroundColor: 'black', borderRadius: 5 }}
                  imageStyle={{ width: 250, alignSelf: 'center', justifyContent: 'center', borderRadius: 200, borderColor: 'black' }}
                  imageProps={{ PlaceholderContent: <ActivityIndicator /> }}
                  image={{ uri: item.image }}
                >
                  <Text bold style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
                    {item.title}
                  </Text>
                </Card>
              </TouchableOpacity>
            )
          }
        />
      </View>



      {/*Albums and their cards section (Gahudi RELEASES)*/}


      {/*Albums and their cards section (Kumani RELEASES)*/}


      <TouchableOpacity>
        <Text style={{ borderBottomWidth: 2, borderBottomColor: 'white', marginTop: 10, color: 'white', marginLeft: 15, width: 105 }} h4 bold >Kumani</Text>
      </TouchableOpacity>
      <View horizontal style={{ width: '100%', height: 220, marginTop: 5, borderColor: 'black', borderWidth: 1, padding: 10 }}>

        <FlatList horizontal={true}
          data={themes.articles}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => (
              <TouchableOpacity activeOpacity={0.5}>
                <Card
                  containerStyle={{ width: 250, height: 190, elevation: 150, marginRight: 10, marginTop: 0, marginLeft: 5, borderColor: 'white', backgroundColor: 'black', borderRadius: 5 }}
                  imageStyle={{ width: 250, alignSelf: 'center', justifyContent: 'center', borderRadius: 200, borderColor: 'black' }}
                  imageProps={{ PlaceholderContent: <ActivityIndicator /> }}
                  image={{ uri: item.image }}
                >
                  <Text bold style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
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
        style={{ marginTop: 15 }}
        data={themes.articles}
        keyExtractor={item => item.id}
        renderItem={
          ({ item }) => (
            <TouchableOpacity activeOpacity={0.8} style={{ width: '95%', alignSelf: 'center', marginTop: 3 }}>
              <ListItem
                containerStyle={{ borderWidth: 3, borderColor: 'grey', backgroundColor: 'black', height: 70, borderRadius: 10 }}
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
        style={{ marginTop: 15, marginBottom: 50 }}
        data={themes.articles}
        keyExtractor={item => item.id}
        renderItem={
          ({ item }) => (
            <TouchableOpacity style={{ width: '95%', alignSelf: 'center', marginTop: 3 }}>
              <ListItem
                containerStyle={{ borderWidth: 3, borderColor: 'grey', backgroundColor: 'black', height: 70, borderRadius: 25 }}
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