
import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, SectionList, StyleSheet, TouchableOpacity, Image,Alert } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import * as colorUtils from '../components/utils/colorUtils'

//To listen events from different controller for refresh UI
//import { EventRegister } from 'react-native-event-listeners';


class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    this.setState({ loading: true });

    this.setState({
      data: [
        [
          {
            title: 'Family Lanes', data: [
              { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' },
              { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' }
            ]
          },
          {
            title: 'Members', data: [
              { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' },
              { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' }
            ]
          }
        ],
        [
          {
            title: 'Family Lanes', data: [
              { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' },
              { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' }
            ]
          },
          {
            title: 'Members', data: [
              { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' },
              { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' }
            ]
          }
        ]

      ],

      loading: false,
      refreshing: false
    });


  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <View style={styles.header}>


      <View style={styles.button}>
        <TouchableOpacity onPress={() => { alert("you clicked me") }}>
          <Image style={styles.image} source={require('../components/Assets/SideMenu/home.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonCentre} >
        <Text>Recent</Text>
      </View>


      <View style={styles.button}>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('addPhysician') }}>
          <Image style={styles.image} source={require('../components/Assets/SideMenu/search.png')} />
        </TouchableOpacity>
      </View>

    </View>
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  selectionList = () => {
    return ([
      {
        title: 'Family Lanes', data: [
          { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' },
          { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' }
        ]
      },
      {
        title: 'Members', data: [
          { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' },
          { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' }
        ]
      }
    ])
  }

  uploadCancelled(filedata) {

  }
  render() {

    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    let showData = this.props.navigation;
    console.log('showData', showData)
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, backgroundColor: colorUtils.THEME_COLOR, flex: 1 }}>

        <SectionList containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, borderColor: 'white' }}

          renderItem={({ item, index }) => (
            <ListItem
              containerStyle={{ borderBottomColor: 'red', borderBottomWidth: 0 }}
              roundAvatar
              hideChevron
              title={`${item.firstname} ${item.lastname}`}
              subtitle={item.phoneNumber}
              subtitleContainerStyle={{ paddingLeft: 10, paddingTop: 5, paddingBottom: 5 }}
              avatar={require('../components/Assets/General/man.png')}
            />
          )}
          renderSectionHeader={({ section: { title } }) =>
            <View style={styles.headerContent}>
              <Text style={{ fontWeight: 'bold' }}>{title}</Text>
              <View style={styles.button}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('addPhysician') }}>
                  <Image style={styles.image} source={require('../components/Assets/SideMenu/addbutton.png')} />
                </TouchableOpacity>
              </View>
            </View>
          }
          sections={this.selectionList()}

          keyExtractor={(item, index) => item + index}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />

      </List>
    );
  }
}

export default FlatListDemo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorUtils.THEME_COLOR,
  },
  card: {
    backgroundColor: 'white',
    height: 200,
    width: 320,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { x: 10, y: 10 },
    padding: 10,
    marginTop: 10,
  },
  iconTitle: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 10,
  },
  icon: {
    height: 24,
    width: 24,
    backgroundColor: 'black',
    marginRight: 5,
  },
  title: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  buttonCentre: {
    height: 24,
    padding: 5
  },
  image: {
    height: 32,
    width: 32
  },
  button: {
    height: 24,
    width: '10%',
    marginLeft: 10,
    marginRight: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});