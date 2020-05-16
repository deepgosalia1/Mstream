import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    WebView
} from 'react-native';

export default class TermsConditions extends React.Component {
    render() {
      return (
        <WebView
          source={{uri: 'https://www.speridian.com/about_us'}}
          style={{margin:5}}
        />
      );
    }
  }