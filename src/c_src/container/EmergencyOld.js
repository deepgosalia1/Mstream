import React from 'react'
import { AppRegistry, StyleSheet, FlatList, View, Alert, ImageBackground } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Image, Line, Text } from 'react-native-svg'
import Images from '../components/Assets/images'

export default class Myproject extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      FlatListItems: [
        { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' },
        { firstname: 'Tim', lastname: 'Long', phoneNumber: '345678901' }
      ]
    }
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  GetItem(item) {

    Alert.alert(item);

  }


  renderHeader = () => {
    return <View style={{
      flex: 1, height: 50, flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image style={styles.button} source={require('../components/Assets/Dashboard/bell.png')} />
      <Text> 10 NEW CRITICAL ALERTS</Text>
    </View>
  };

  render() {



    const data = [
      {
        key: 1,
        amount: 20,
        amount1: 30,
        svg: { fill: '#600080' },
      },
      {
        key: 2,
        amount: 20,
        amount1: 40,
        svg: { fill: '#9900cc' }
      },
      {
        key: 3,
        amount: 20,
        amount1: 50,
        svg: { fill: '#c61aff' }
      },
      {
        key: 4,
        amount: 20,
        amount1: 60,
        svg: { fill: '#d966ff' }
      },
      {
        key: 5,
        amount: 20,
        amount1: 70,
        svg: { fill: '#ecb3ff' }
      },
      {
        key: 6,
        amount: 20,
        amount1: 70,
        svg: { fill: '#ecb3ff' }
      }
    ]



    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (

          <G
            key={index}
            x={labelCentroid[0]}
            y={labelCentroid[1]}
          >
            <Image
              x={-25}
              y={25}
              width={45}
              height={45}
              preserveAspectRatio="xMidYMid slice"
              opacity="1"
              href={Images.memes[index + 1]}

            />
            <Circle
              r={50}
              fill={'transparent'}
              onPressIn={() => Alert.alert(`onPressIn clicked ${index}`)}
              //onPressOut={() => Alert.alert(`onPressOut clicked ${index}`)}
            />

            <Circle
              r={15}
              x={30}
              y={-10}
              fill={'red'}
            />
            <Text
              key={index}
              x={30}
              y={-10}
              // x={pieCentroid[0]}
              // y={pieCentroid[1]}
              fill={'white'}
              textAnchor={'middle'}
              alignmentBaseline={'middle'}
              fontSize={20}
              stroke={'white'}
              strokeWidth={0.1}
            //onPress={ () => Alert.alert ('tooltip clicked Text') }
            >
              {data.amount}
            </Text>
          </G>


        )
      })
    }


    const resizeMode = 'center';
    return (

      <View style={styles.MainContainer}>

        <View style={{ flex: 0.4 }} >
          <FlatList

            data={this.state.FlatListItems}

            ItemSeparatorComponent={this.FlatListItemSeparator}

            keyExtractor={(item, index) => item + index}

            ListFooterComponent={this.renderHeader}

            renderItem={({ item }) =>

              <ListItem
                containerStyle={{ borderBottomWidth: 0 }}
                roundAvatar
                hideChevron
                title={`${item.firstname} ${item.lastname}`}
                //subtitle={item.phoneNumber}
                subtitle={
                  <View style={styles.subtitleView}>
                    {/* <Image source={require('../images/rating.png')} style={styles.ratingImage}/>
                    <Text style={styles.ratingText}>5 months ago</Text> */}
                  </View>
                }
                subtitleContainerStyle={{ paddingLeft: 10, paddingTop: 5, paddingBottom: 5 }}
                avatar={require('../components/Assets/General/man.png')}
              />
              //<Text style={styles.item} onPress={this.GetItem.bind(this, item.key)} > {item.key} </Text>
            }
          />
        </View>

        <View style={{ flex: 0.6, backgroundColor: 'powderblue' }} >
          <PieChart
            style={{ height: 330 }}
            valueAccessor={({ item }) => item.amount}
            data={data}
            spacing={0}
            outerRadius={'100%'}
          >

            <Labels />

            {/* <Text  onPress={this.GetItem.bind(this)} > Some View here</Text> */}
          </PieChart>

        </View>



      </View>


    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    // Setting up View inside content in Vertically center.
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'

  },
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent'
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  header: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  buttonWrap: {
    flexDirection: 'row',
    flex: 1,
    position: "relative",
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: 10 // Use for physician dashboard
  },
  buttonCentre: {
    height: 70,
    width: 80,
    backgroundColor: 'red',
    marginLeft: 10,
  },
  button: {
    height: 32,
    width: 32
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },

});