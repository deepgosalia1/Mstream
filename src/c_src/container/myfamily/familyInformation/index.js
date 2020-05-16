import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  FlatList,
  View,
  Alert,
  ImageBackground,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  TouchableHighlight,
  ScrollView,
  Platform,
  StatusBar
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, SVGImage, SVGText, Line } from 'react-native-svg'
import Images from './Images'
import styles from './style';
import CustomInfoLarge from '../../../components/customcomponents/custominfolarge';
import GreyButtonLarge from '../../../components/customcomponents/greybuttonlarge';


export default class FamilyInformation extends React.Component {

  constructor(props) {
    super(props)

  }

  familyInformationClicked(index) {
    // Alert.alert('You tapped the button!');
    if (index == 0) {
      this.props.navigation.navigate('critical')
    }
    if (index == 1) {
      this.props.navigation.navigate('documents')
    }

    if (index == 2) {
      this.props.navigation.navigate('patientPermission')
    }
    if (index == 3) {
      this.props.navigation.navigate('patientTimeline')
    }
    if (index == 4) {
      this.props.navigation.navigate('patientCalendar')
    }
    if (index == 5) {
      this.props.navigation.navigate('physicians')
    }

  }

  render() {

    const entry = [
      {
        key: 1,
        amount: 20,
        text: 'Critical',

        svg: { fill: 'transparent' }//Yellow

      },
      {
        key: 2,
        amount: 20,
        text: 'Documents',
        svg: { fill: 'transparent' }, //Green
      },
      {
        key: 3, //
        amount: 20,
        text: 'Permissions',
        svg: { fill: 'transparent' },//Oranger
      },
      {
        key: 4,
        amount: 20,
        text: 'Timeline',
        svg: { fill: 'transparent' }, //Maroon
      },
      // {
      //   key: 5,
      //   amount: 20,
      //   text: 'Family',
      //   svg: { fill: 'transparent' }, //Red
      // },
      {
        key: 5, //
        amount: 20,
        text: 'Calendar',
        svg: { fill: 'transparent' },//Sky Blue
      },
      {
        key: 6, //
        amount: 20,
        text: 'Physician',
        svg: { fill: 'transparent' },//Sky Blue
      },
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
            {/* <Line
            x={this.getTextXAxis(index)}
            y={this.getCircleYAxis(index)}
                            x1={ labelCentroid[ 0 ] }
                            y1={ labelCentroid[ 1 ] }
                            x2={ pieCentroid[ 0 ] }
                            y2={ pieCentroid[ 1 ] }
                            stroke="red"
                            strokeWidth="2"

                            
                        /> */}


            {/* <SVGImage
              x={this.getLineXAxis(index)}
              y={this.getLineYAxis(index)}
              width={65}
              height={140}
              preserveAspectRatio="xMidYMid slice"
              opacity="1"
              backgroundColor='white'
              rotate="65"

              href={Images.lines[index + 1]}



            /> */}

            <Line
              x1={this.getLineX1Axis(index)}
              y1={this.getLineY1Axis(index)}
              x2={this.getLineX2Axis(index)}
              y2={this.getLineY2Axis(index)}
              height="100"
              width="100"
              stroke="#222"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="0,4"
            />
            {/* <Circle
              x={this.getLineX1Axis(index)}
              y={this.getLineY1Axis(index)}
              r={2}
              fill={transparent}
            //onPress={this.familyInformationClicked.bind(this, index)}
            />
            <Circle
              x={this.getLineX2Axis(index)}
              y={this.getLineY2Axis(index)}
              r={2}
              fill={transparent}
            //onPress={this.familyInformationClicked.bind(this, index)}
            /> */}

            <SVGImage
              x={this.getXAxis(index)}
              y={this.getYAxis(index)}
              width={65}
              height={65}
              opacity="1"
              backgroundColor='white'
              href={Images.icons[index + 1]}



            />
            <Circle
              x={this.getCircleXAxis(index)}
              y={this.getCircleYAxis(index)}
              r={28}
              fill={'transparent'}
              onPress={this.familyInformationClicked.bind(this, index)}
            />
            <SVGText
              key={index + 1}
              x={this.getTextXAxis(index)}
              y={this.getTextYAxis(index)}
              //x={5}
              //y={Platform.OS == 'android' ? -10 : -65}
              fill={'black'}
              textAnchor={'middle'}
              alignmentBaseline={'middle'}
              fontSize={Platform.OS == 'android' ? 12 : 12}
              fontWeight='bold'
              stroke={'white'}
              strokeWidth={0.1}
            >
              {data.text}
            </SVGText>


          </G>
        )
      })

    }

    return (

      <View style={styles.MainHeader}>


        {/* header part */}
        <View style={{
          backgroundColor: 'transparent'
        }}>
          <View>
            <CustomInfoLarge
              name='Lorenzo J. Smith'
              image={require('../../../components/Assets/CriticialAlerts/critical_profile.png')}
              designation='Physician'
              address='Irvin, CA'
              laneicon={true}
            />
            <View style={{ flexDirection: 'row', backgroundColor: 'lightgrey' }}>
              <GreyButtonLarge
                text1='Home'
                text2='(714) 666-6666'
                image={require('../../../components/Assets/profile/home_icon.png')}
              />
              <View
                style={{
                  flex: 0.01,
                  height: '100%',
                  alignSelf: 'center',
                  backgroundColor: "white",
                }}
              />
              <GreyButtonLarge
                text1='Work'
                text2='(714) 666-6666'
                image={require('../../../components/Assets/profile/work_icon.png')}
              />
            </View>
          </View>
        </View>
        {/*header close  */}

        {/* Piechart */}
        <View style={{
          backgroundColor: '#fff', flexDirection: 'column',

        }}>
          <PieChart
            style={{ height: '90%', padding: 0, marginTop: -30 }}
            valueAccessor={({ item }) => item.amount}
            data={entry}
            spacing={100}
          //  innerRadius={ 0 }
          //  outerRadius={ 10 }
          //  labelRadius={ 150 }

          >
            <Labels />
          </PieChart>

          <TouchableOpacity style={{ height: '16%', width: '25%', position: 'absolute', top: '25%', left: '37%', right: '28.5%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
            <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
              {
                <Image style={{ width: 100, height: 100, resizeMode: 'stretch' }} source={require('./Images/health_icon.png')} />

              }
            </View>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
  // getColor = (index) => {
  //   switch (index) {
  //     case 0:
  //       return '#db0c24'
  //       break
  //     case 1:
  //       return '#6dc23e'
  //       break
  //     case 2:
  //       return '#36b696'
  //       break
  //     case 3:
  //       return '#dc5912'
  //       break
  //     case 4:
  //       return '#239fe5'
  //       break
  //     case 5:
  //       return '#dc5912'
  //       break
  //     default:
  //       return 'black'
  //       break
  //   }
  // }
  // images x coardinates
  getXAxis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? -110 : -100
        break
      case 1:
        return Platform.OS == 'android' ? -70 : -60
        break
      case 2:
        return Platform.OS == 'android' ? 12 : 10
        break
      case 3:
        return Platform.OS == 'android' ? 42 : 38
        break
      case 4:
        return Platform.OS == 'android' ? -5 : -5
        break
      case 5:
        return Platform.OS == 'android' ? -80 : -75
        break
      default:
        return Platform.OS == 'android' ? -35 : -35
        break
    }
  }
  // images Y coardinates

  getYAxis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? -95 : 80
      case 1:
        return Platform.OS == 'android' ? -160 : 145
        break
      case 2:
        return Platform.OS == 'android' ? -140 : 135
        break
      case 3:
        return Platform.OS == 'android' ? -80 : 70
      case 4:
        return Platform.OS == 'android' ? -5 : 15
        break
      case 5:
        return Platform.OS == 'android' ? -30 : 25
        break
      default:
        return Platform.OS == 'android' ? -75 : 75
        break
    }
  }

  // Text X coardinates

  getTextXAxis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? -80 : -70
        break
      case 1:
        return Platform.OS == 'android' ? -40 : -26
        break
      case 2:
        return Platform.OS == 'android' ? 42 : 44
        break
      case 3:
        return Platform.OS == 'android' ? 73 : 70
        break
      case 4:
        return Platform.OS == 'android' ? 20 : 28
        break
      case 5:
        return Platform.OS == 'android' ? -58 : -45
        break
      default:
        return Platform.OS == 'android' ? -20 : -20
        break
    }
  }


  // Text Y coardinates

  getTextYAxis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? -25 : -12
      case 1:
        return Platform.OS == 'android' ? -90 : -78
        break
      case 2:
        return Platform.OS == 'android' ? -70 : -66
        break
      case 3:
        return Platform.OS == 'android' ? -10 : 0
      case 4:
        return Platform.OS == 'android' ? 65 : 55
        break
      case 5:
        return Platform.OS == 'android' ? 35 : 42
        break
      default:
        return Platform.OS == 'android' ? -20 : -20
        break
    }
  }

  // Circle X coardinates

  getCircleXAxis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? -70 : -70
        break
      case 1:
        return Platform.OS == 'android' ? -50 : -25
        break
      case 2:
        return Platform.OS == 'android' ? 47 : 45
        break
      case 3:
        return Platform.OS == 'android' ? 78 : 73
        break
      case 4:
        return Platform.OS == 'android' ? 25 : 30
        break
      case 5:
        return Platform.OS == 'android' ? -42 : -40
        break
      default:
        return Platform.OS == 'android' ? -20 : -20
        break
    }
  }


  // Circle Y coardinates

  getCircleYAxis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? -60 : -50
      case 1:
        return Platform.OS == 'android' ? -105 : -112
        break
      case 2:
        return Platform.OS == 'android' ? -105 : -108
        break
      case 3:
        return Platform.OS == 'android' ? -85 : -35
      case 4:
        return Platform.OS == 'android' ? 30 : 10
        break
      case 5:
        return Platform.OS == 'android' ? -15 : 5
        break
      default:
        return Platform.OS == 'android' ? -60 : -60
        break
    }
  }

  // Line Cordinates x1,x2,y1,y2
  // (x1,y1): outer points
  // (x2,y2): inner points

  getLineX1Axis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? -80 : -70
      case 1:
        return Platform.OS == 'android' ? -60 : -50
        break
      case 2:
        return Platform.OS == 'android' ? 21 : 15
        break
      case 3:
        return Platform.OS == 'android' ? 74 : 68
      case 4:
        return Platform.OS == 'android' ? 38 : 55
        break
      case 5:
        return Platform.OS == 'android' ? -35 : -18
        break
      default:
        return Platform.OS == 'android' ? -75 : -75
        break
    }
  }

  getLineY1Axis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? -32 : -22
      case 1:
        return Platform.OS == 'android' ? -111 : -95
        break
      case 2:
        return Platform.OS == 'android' ? -110 : -107
        break
      case 3:
        return Platform.OS == 'android' ? -72 : -65
      case 4:
        return Platform.OS == 'android' ? 25 : 5
        break
      case 5:
        return Platform.OS == 'android' ? 12 : 25
        break
      default:
        return Platform.OS == 'android' ? -75 : -75
        break
    }
  }

  getLineX2Axis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? -80 : -70
      case 1:
        return Platform.OS == 'android' ? -115 : -105
        break
      case 2:
        return Platform.OS == 'android' ? -33 : -30
        break
      case 3:
        return Platform.OS == 'android' ? 74 : 68
      case 4:
        return Platform.OS == 'android' ? 112 : 100
        break
      case 5:
        return Platform.OS == 'android' ? 32 : 32
        break
      default:
        return Platform.OS == 'android' ? -75 : -75
        break
    }
  }
  getLineY2Axis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? 35 : 32
      case 1:
        return Platform.OS == 'android' ? -85 : -75
        break
      case 2:
        return Platform.OS == 'android' ? -165 : -140
        break
      case 3:
        return Platform.OS == 'android' ? -140 : -115
      case 4:
        return Platform.OS == 'android' ? -22 : -15
        break
      case 5:
        return Platform.OS == 'android' ? 50 : 47
        break
      default:
        return Platform.OS == 'android' ? -75 : -75
        break
    }
  }
}