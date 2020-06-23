import React from 'react';
import {ActivityIndicator, View, Image} from 'react-native';
import shorthash from 'shorthash';
// import * as FileSystem from 'expo-file-system';
import FastImage from 'react-native-fast-image';

export default class CacheImage extends React.Component {
  state = {
    isLoading: true,
    source: require('../../assets/images/musicicon.png'),
  };

  componentDidMount = async () => {
    const {uri} = this.props;
    const name = shorthash.unique(uri);
    console.log(name);
    const path = `${FileSystem.cacheDirectory}${name}`;
    const image = await FileSystem.getInfoAsync(path);
    if (image.exists) {
      console.log('read image from cache');
      this.setState({
        source: {
          uri: image.uri,
        },
      });
      return;
    }

    console.log('downloading image to cache');
    const newImage = await FileSystem.downloadAsync(uri, path);
    this.setState({
      source: {
        uri: newImage.uri,
      },
    });
  };

  // onLoad = () => {
  //   console.log('onload complete')
  //   this.setState({isLoading: false});
  // };
  render() {
    return <Image style={this.props.style} source={this.state.source} defaultSource={require('../../assets/images/musicicon.png')}/>;
    // return (
    //   <View>
    //     {this.state.isLoading && <ActivityIndicator size={'large'} />}
    //     {!this.state.isLoading && (
    //       <FastImage
    //         style={this.props.style}
    //         source={{uri: this.state.source, priority: FastImage.priority.high}}
    //         onLoadEnd={this.onLoad.bind(this)}
    //       />
    //     )}
    //   </View>
    // );
  }
}
