import React from 'react';
import {} from 'galio-framework';
import shorthash from 'shorthash';
// import * as FileSystem from 'expo-file-system';
import {Image, View, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SmartImage from '../../customRootComponents/smartImage';
import FastImage from 'react-native-fast-image';
export default class HCI extends React.Component {
  state = {
    isLoading: true,
    source: this.props.uri,
    // source: 'https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80',
    isHome: this.props.isHome ? true : false,
    // isHome: true,
  };

  // componentDidMount = async () => {
  //   const {uri} = this.props;
  //   // const uri = 'https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80'
  //   const name = shorthash.unique(uri);
  //   console.log(name);
  //   const path = `${FileSystem.cacheDirectory}${name}`;
  //   const image = await FileSystem.getInfoAsync(path);
  //   if (image.exists) {
  //     console.log('read image from cache');
  //     this.setState({
  //       source: {
  //         uri: image.uri,
  //       },
  //     });
  //     return;
  //   }
  // };

  render() {
    return (
      <View
        style={{
          width: 105,
          height: 120,
          backgroundColor: '<anything>',
          alignSelf: 'center',
          marginTop: 5,
          borderRadius: 5,
          flexDirection: 'column',
          marginLeft: 10,
        }}>
        <View>
          <SmartImage
            style={
              this.state.isHome
                ? {
                    width: 105,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    borderRadius:8,
                    height: 105,
                  }
                : this.props.style
            }
            source={this.props.uri}
            priorityValue={FastImage.priority.high}
            cacheControl={FastImage.cacheControl.immutable}
          />
          {/* <Icon type='AntDesign' name='play' color='black' style={{alignSelf:'flex-end'}}/> */}
          <View style={{backgroundColor:'grey', alignSelf:'flex-end',marginTop:-30,marginRight:3, borderRadius:26}}><AntDesign name="play" size={26} color="white" style={{ opacity:0.8}}/></View>
        </View>
        {/* <Text bold style={this.state.isHome?{}:this.props.textStyle}>{this.props.textTitle}</Text> */}

        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={
            this.state.isHome
              ? {
                  position:'absolute',
                  textAlign: 'left',
                  color: 'white',
                  fontSize: 12,
                  alignSelf: 'baseline',
                  marginTop:110,
                  // fontWeight:'bold'
                }
              : this.props.textStyle
          }>
          {this.props.textTitle}
        </Text>
      </View>
    );
  }
}
