/**
 *  eslint-disable
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MusicPlayer from './src/components/musicplayer';
import DPS from './src/components/dpscreen'
import EditDP from './src/components/editdp';


export default class App extends React.Component {
  render() {
    return (
      // <MusicPlayer />
      // <DPS />
      <EditDP />
    );
  }
}