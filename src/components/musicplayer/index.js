/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  Dimensions,
  Modal,
  Button,
  ActivityIndicator,
} from 'react-native';
import Slider from 'react-native-slider';
import Moment from 'moment';
import DeviceInfo from 'react-native-device-info';
import {FontAwesome5, Feather, Entypo} from '@expo/vector-icons';
import {Surface, Card, Badge} from 'react-native-paper';
import TrackPlayer, {
  useProgress,
  usePlaybackState,
  State,
  Capability,
} from 'react-native-track-player';
import storage from '@react-native-firebase/storage';
import SmartImage from '../../customRootComponents/smartImage';
import LinearGradient from 'react-native-linear-gradient';

export default function MusicPlayer({navigation, route}) {
  const [optionsVisible, setoptionsVisible] = useState(false);
  const [totaltime] = useState(0);
  const progress = useProgress();
  const playbackState = usePlaybackState();
  var value = -1;
  const {data1, uid,data2} = route.params
  useEffect(() => {
    setup();
    console.log(data1,"dataa 1 ",uid)
  }, []);

  const setup = async () => {
    await storage().ref('Songs/01 - Luck Aazma - www.downloadming.com.mp3').getMetadata().then(res=>console.log(res.fullPath + 'yooo'))
    await TrackPlayer.setupPlayer()
      .then(async () => {
        await TrackPlayer.add({
          // url: 'https://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3',
          // url: (await storage()
          //   .ref('Songs/01 - Luck Aazma - www.downloadming.com.mp3')
          //   .getDownloadURL().then(res=> console.log(res, 'uuuuu'))).toString(),
          url:data2,
          artwork:
            'https://cdn6.f-cdn.com/contestentries/1341746/29180739/5b14c65f43c08_thumb900.jpg',
        });
      })
      .then(console.log('aaaaaaaaaaaaaaaaaaaaaaa '));
    await TrackPlayer.updateOptions({
      stopWithApp: false,
      jumpInterval: 10,
      capabilities: [
        Capability.Stop,
        Capability.Pause,
        Capability.Play,
        Capability.SeekTo,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
      compactCapabilities: [Capability.Stop, Capability.Pause, Capability.Play],
      icon: require('../../assets/images/n_icon.png'),
    });
  };

  const setCurr = seconds => {
    return Moment.utc(seconds * 1000).format('m:ss');
  };

  if (
    (playbackState === State.Ready ||
      playbackState === State.Paused ||
      playbackState === State.None ||
      playbackState === State.Stopped) &&
    playbackState !== State.Buffering
  ) {
    value = 0;
  } else if (playbackState === State.Playing) {
    value = 1;
  } else if (
    playbackState === State.Buffering ||
    playbackState === State.Connecting
  ) {
    value = 2;
  }
  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
        paddingTop:
          DeviceInfo.hasNotch() && Platform.OS === 'android'
            ? StatusBar.currentHeight
            : 0,
      }}>
      <Modal visible={optionsVisible} transparent={true} animated={true}>
        <View
          style={{
            backgroundColor: '#000000bc',
            flex: 1,
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <View
            style={{
              height: 250,
              width: 350,
              margin: 50,
              padding: 40,
              borderRadius: 10,
              backgroundColor: 'white',
              marginTop: 150,
              alignSelf: 'center',
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}>
            <Text style={{fontSize: 22, textAlign: 'center'}}>
              In-order to receive support, please contact us at{' '}
            </Text>
            <Button
              onPress={() => {
                setoptionsVisible(false);
              }}
              title={'Close'}
              color={'purple'}
            />
          </View>
        </View>
      </Modal>
      <View style={{margin: 0.1, flex: 1, height: '100%'}}>
        <LinearGradient
          style={{flex: 1, width: '100%', height: '100%'}}
          colors={['#3EADCF', '#1ca9C1', '#B1E9CD']}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 15}}
            onPress={() => {
              setoptionsVisible(prev => !prev);
            }}>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </TouchableOpacity>
          {/* playlist name and album name */}
          <View style={{alignItems: 'center', marginTop: -25}}>
            <Text
              style={{
                width: '100%',
                color: '#FFFFFF',
                fontSize: 10,
                textAlign: 'center',
              }}>
              PLAYLIST
            </Text>
            <Text
              style={{
                width: '75%',
                color: '#FFFFFF',
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Album_name_here
            </Text>
          </View>

          {/* song image/ thumbnail zone */}
          <Surface
            //   raised
            style={{
              marginTop: 30,
              height: 200,
              width: 200,
              alignSelf: 'center',
              elevation: 10,
              borderRadius: 30,
            }}>
            <SmartImage
              source={
                'https://a10.gaanacdn.com/images/albums/61/161/crop_480x480_161.jpg'
              }
              style={{
                height: 200,
                width: 200,
                borderRadius: 30,
                alignSelf: 'center',
              }}
            />
          </Surface>

          {/* song name and artist name */}
          <View
            style={{
              marginTop: 25,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
                width: '80%',
              }}>
              {data1.songname}
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontWeight: '500',
                marginTop: 3,
                textAlign: 'center',
                width: '80%',
              }}>
             { data1.artist}
            </Text>
          </View>

          {/* slider component only */}
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 8,
            }}>
            <Slider
              minimumValue={0}
              value={progress.position}
              animationType="timing"
              maximumValue={
                totaltime !== 0
                  ? totaltime
                  : progress.duration > 2
                  ? progress.duration
                  : 300
              }
              trackStyle={{
                width: Dimensions.get('screen').width - 50,
                height: 4,
              }}
              thumbStyle={{height: 20, width: 20, backgroundColor: '#fff'}}
              thumbTouchSize={{width: 100, height: 40}}
              minimumTrackTintColor="#000000"
              onSlidingComplete={seconds => {
                console.log(seconds);
                TrackPlayer.seekTo(seconds);
              }}
            />
            <View
              style={{
                width: Dimensions.get('screen').width - 35,
                backgroundColor: '#',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{flex: 1}}>{setCurr(progress.position)}</Text>
              <Text style={{alignSelf: 'flex-end'}}>
                {setCurr(progress.duration)}
              </Text>
            </View>
          </View>

          {/* repeat, back, play, forward and shuffle button */}
          <View
            style={{
              width: '95%',
              height: 70,
              backgroundColor: '#',
              alignSelf: 'center',
              margin: 15,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 30,
                width: 10,
                alignSelf: 'center',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Feather
                name="repeat"
                size={30}
                color="#000000"
                style={{alignItems: 'center'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 30,
                width: 10,
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}
              onPress={async () => {
                if (progress.position > 5) {
                  await TrackPlayer.seekTo(0);
                } else {
                  await TrackPlayer.skipToPrevious();
                }
                TrackPlayer.skipToPrevious();
              }}>
              <FontAwesome5
                name="backward"
                size={32}
                color="#242320"
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
            {value === 2 && (
              <ActivityIndicator
                style={{
                  flex: 1,
                  // height: 50,
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                size={'large'}
              />
            )}
            {value === 0 && (
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 50,
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                onPress={async () => {
                  TrackPlayer.play();
                }}>
                <FontAwesome5
                  name="play"
                  size={38}
                  color="#000000"
                  style={{marginTop: 5}}
                />
              </TouchableOpacity>
            )}
            {value === 1 && (
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 50,
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                onPress={() => TrackPlayer.pause()}>
                <FontAwesome5
                  name="pause"
                  size={38}
                  color="#000000"
                  style={{marginTop: 5}}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={{
                flex: 1,
                height: 30,
                width: 10,
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}
              onPress={() => TrackPlayer.skipToNext()}>
              <FontAwesome5
                name="forward"
                size={32}
                color="#242320"
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 30,
                width: 10,
                alignSelf: 'center',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Entypo
                name="shuffle"
                size={30}
                color="#000000"
                style={{alignItems: 'center'}}
              />
            </TouchableOpacity>
          </View>

          {/* up next section */}
          <Surface
            raised
            style={{
              width: '95%',
              backgroundColor: 'black',
              alignSelf: 'center',
              height: 70,
              borderRadius: 10,
              elevation: 10,
              marginTop: 5,
            }}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{flex: 1, borderRadius: 10}}
            //   colors={['#666','#fff222', '#444']}
              colors={['#5d8187','#52c187', '#54676d'].reverse()}
              >
              <Card.Title
                style={{flex: 1, borderRadius: 10}}
                title={'Song Name here'}
                titleStyle={{margin: 25, padding: 0}}
                left={() => (
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      alignSelf: 'flex-start',
                      alignItems: 'flex-start',
                    }}
                    source={require('../../assets/images/temp.jpeg')}
                  />
                )}
                leftStyle={{alignItems: 'flex-start', margin: -10, padding: 0}}
                right={() => (
                  <Badge
                    children={'Next'}
                    size={30}
                    style={{
                      width: 70,
                      backgroundColor: 'black',
                      borderRadius: 5,
                      marginRight: 10,
                    }}
                  />
                )}
              />
            </LinearGradient>
          </Surface>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}
