import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

class ReduxNavigation extends Component {

  constructor(props) {
    super(props);
    this.onBackPress = this.onBackPress.bind(this)

  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress() {
    const { dispatch, nav } = this.props
    dispatch(ReactNavigation.NavigationActions.back())
    return nav !== this.props.nav
  }

  render() {
    const { dispatch, nav } = this.props
    const navigation = ReactNavigation.addNavigationHelpers({
      dispatch,
      state: nav,/* 
    addListener */
    })

    return <AppNavigation navigation={navigation} />
  }

}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)