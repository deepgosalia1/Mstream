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
  StatusBar,
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, SVGImage, SVGText, Line } from 'react-native-svg'
import Images from './Images'
import styles from './style';
import { Container, Header, Content, Icon } from 'native-base';
import { EventRegister } from 'react-native-event-listeners'
import CustomInfoLarge from '../../../components/customcomponents/custominfolarge';
import GreyButtonLarge from '../../../components/customcomponents/greybuttonlarge';


export default class PatientInformation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: this.props.navigation.state.params ? this.props.navigation.state.params.loggedInUser : ''
    }
  }
  BackButtonClicked = () => {
    //Alert.alert('center clicked')
    this.props.navigation.goBack()
    //let customEventText = this.state.loggedInUser == 'patient' ? 'abc' : 'paitent';
    EventRegister.emit('sideMenuClickedEvent', 'paitent');
    this.props.navigation.navigate('DrawerOpen')
  }
  componentDidMount() {
    this.props.navigation.setParams(
      { BackButtonClicked: this.BackButtonClicked.bind(this) }
    )
  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerLeft: <Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ fontSize: 30, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }}
        onPress={() => {
          params.BackButtonClicked()
        }} />
    }
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
      this.props.navigation.navigate('family')
    }
    if (index == 5) {
      this.props.navigation.navigate('patientCalendar')
    }
    if (index == 6) {
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
      {
        key: 5,
        amount: 20,
        text: 'Family',
        svg: { fill: 'transparent' }, //Red
      },
      {
        key: 6, //
        amount: 20,
        text: 'Calendar',
        svg: { fill: 'transparent' },//Sky Blue
      },
      {
        key: 7, //
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
            <Circle
              x={this.getLineX1Axis(index)}
              y={this.getLineY1Axis(index)}
              r={2}
              fill={this.getColor(index)}
            //onPress={this.familyInformationClicked.bind(this, index)}
            />
            <Circle
              x={this.getLineX2Axis(index)}
              y={this.getLineY2Axis(index)}
              r={2}
              fill={this.getColor(index)}
            //onPress={this.familyInformationClicked.bind(this, index)}
            />

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
              onPressIn={this.familyInformationClicked.bind(this, index)}
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
          backgroundColor: '#fff', flexDirection: 'column'

        }}>
          <PieChart
            style={{ height: '90%', padding: 0, marginTop: 0 }}
            valueAccessor={({ item }) => item.amount}
            data={entry}
            spacing={100}
          //  innerRadius={ 0 }
          //  outerRadius={ 10 }
          //  labelRadius={ 150 }

          >
            <Labels />
          </PieChart>

          <TouchableOpacity style={{ height: '35.5%', width: '35.5%', position: 'absolute', top: '16.3%', left: '28.5%', right: '31.5%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }} onPress={() => { this.props.navigation.navigate('health') }}>
            <View style={{ flexDirection: 'column', alignSelf: 'center', left: '10%' }}>
              {
                <Image style={{ width: 100, height: 100, resizeMode: 'stretch' }} source={require('./Images/health_icon.png')} />

              }
            </View>

          </TouchableOpacity>

          <View style={styles.bottomContainer}>
            <View style={styles.bottomView}>
              <Image style={styles.imageStye} source={require('../../../components/Assets/common/audio.png')} />
              <Text style={styles.bottomTextStye}>Audio</Text>
            </View>
            <View style={styles.bottomView}>
              <Image style={styles.imageStye} source={require('../../../components/Assets/common/video.png')} />
              <Text style={styles.bottomTextStye}>Video</Text>
            </View>
            <View style={styles.bottomView}>
              <Image style={styles.imageStye} source={require('../../../components/Assets/common/lane_physician_icon_02.png')} />
              <Text style={styles.bottomTextStye}>Lane</Text>
            </View>
            <View style={styles.bottomView}>
              <Image style={styles.imageStye} source={require('../../../components/Assets/PatientDBoard/notes.png')} />
              <Text style={styles.bottomTextStye}>Notes</Text>
            </View>
            <TouchableOpacity
              style={styles.bottomView}
              onPress={() => this.props.navigation.navigate('newTask')}>
              <Image style={styles.imageStye} source={require('../../../components/Assets/common/task.png')} />
              <Text style={styles.bottomTextStye}>Tasks</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    );
  }
  getColor = (index) => {
    switch (index) {
      case 0:
        return '#db0c24'
        break
      case 1:
        return '#6dc23e'
        break
      case 2:
        return '#36b696'
        break
      case 3:
        return '#dc5912'
        break
      case 4:
        return '#f89527'
        break
      case 5:
        return '#239fe5'
        break
      case 6:
        return '#dc5912'
        break
      default:
        return 'black'
        break
    }
  }
  // images x coardinates
  getXAxis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? -103 : -95
        break
      case 1:
        return Platform.OS == 'android' ? -80 : -80
        break
      case 2:
        return Platform.OS == 'android' ? -35 : -35
        break
      case 3:
        return Platform.OS == 'android' ? 20 : 20
        break
      case 4:
        return Platform.OS == 'android' ? 25 : 25
        break
      case 5:
        return Platform.OS == 'android' ? -20 : -20
        break
      case 6:
        return Platform.OS == 'android' ? -75 : -75
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
        return Platform.OS == 'android' ? -80 : 80
      case 1:
        return Platform.OS == 'android' ? -135 : 135
        break
      case 2:
        return Platform.OS == 'android' ? -160 : 160
        break
      case 3:
        return Platform.OS == 'android' ? -120 : 120
      case 4:
        return Platform.OS == 'android' ? -65 : 65
        break
      case 5:
        return Platform.OS == 'android' ? -35 : 35
        break
      case 6:
        return Platform.OS == 'android' ? -45 : 45
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
        return Platform.OS == 'android' ? -72 : -65
        break
      case 1:
        return Platform.OS == 'android' ? -40 : -40
        break
      case 2:
        return Platform.OS == 'android' ? -10 : -10
        break
      case 3:
        return Platform.OS == 'android' ? 55 : 55
        break
      case 4:
        return Platform.OS == 'android' ? 55 : 55
        break
      case 5:
        return Platform.OS == 'android' ? 15 : 15
        break
      case 6:
        return Platform.OS == 'android' ? -55 : -55
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
        return Platform.OS == 'android' ? -10 : -10
      case 1:
        return Platform.OS == 'android' ? -70 : -70
        break
      case 2:
        return Platform.OS == 'android' ? -85 : -85
        break
      case 3:
        return Platform.OS == 'android' ? -50 : -50
      case 4:
        return Platform.OS == 'android' ? 3 : 3
        break
      case 5:
        return Platform.OS == 'android' ? 35 : 35
        break
      case 6:
        return Platform.OS == 'android' ? 23 : 23
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
        return Platform.OS == 'android' ? -65 : -65
        break
      case 1:
        return Platform.OS == 'android' ? -50 : -50
        break
      case 2:
        return Platform.OS == 'android' ? 0 : 0
        break
      case 3:
        return Platform.OS == 'android' ? 55 : 55
        break
      case 4:
        return Platform.OS == 'android' ? 55 : 55
        break
      case 5:
        return Platform.OS == 'android' ? 15 : 15
        break
      case 6:
        return Platform.OS == 'android' ? -40 : -40
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
        return Platform.OS == 'android' ? -50 : -50
      case 1:
        return Platform.OS == 'android' ? -105 : -105
        break
      case 2:
        return Platform.OS == 'android' ? -125 : -125
        break
      case 3:
        return Platform.OS == 'android' ? -85 : -85
      case 4:
        return Platform.OS == 'android' ? -35 : -35
        break
      case 5:
        return Platform.OS == 'android' ? 0 : 0
        break
      case 6:
        return Platform.OS == 'android' ? -15 : -15
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
        return Platform.OS == 'android' ? -72 : -67
      case 1:
        return Platform.OS == 'android' ? -70 : -70
        break
      case 2:
        return Platform.OS == 'android' ? -28 : -28
        break
      case 3:
        return Platform.OS == 'android' ? 43 : 43
      case 4:
        return Platform.OS == 'android' ? 68 : 65
        break
      case 5:
        return Platform.OS == 'android' ? 38 : 38
        break
      case 6:
        return Platform.OS == 'android' ? -23 : -23
        break
      default:
        return Platform.OS == 'android' ? -75 : -75
        break
    }
  }

  getLineY1Axis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? -20 : -22
      case 1:
        return Platform.OS == 'android' ? -87 : -87
        break
      case 2:
        return Platform.OS == 'android' ? -130 : -130
        break
      case 3:
        return Platform.OS == 'android' ? -112 : -112
      case 4:
        return Platform.OS == 'android' ? -56 : -55
        break
      case 5:
        return Platform.OS == 'android' ? -13 : -13
        break
      case 6:
        return Platform.OS == 'android' ? 3 : 3
        break
      default:
        return Platform.OS == 'android' ? -75 : -75
        break
    }
  }

  getLineX2Axis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? -72 : -65
      case 1:
        return Platform.OS == 'android' ? -118 : -105
        break
      case 2:
        return Platform.OS == 'android' ? -76 : -66
        break
      case 3:
        return Platform.OS == 'android' ? 21 : 23
      case 4:
        return Platform.OS == 'android' ? 97 : 86
        break
      case 5:
        return Platform.OS == 'android' ? 100 : 92
        break
      case 6:
        return Platform.OS == 'android' ? 30 : 27
        break
      default:
        return Platform.OS == 'android' ? -75 : -75
        break
    }
  }
  getLineY2Axis = (index) => {
    switch (index) {
      case 0:
        return Platform.OS == 'android' ? 35 : 28
      case 1:
        return Platform.OS == 'android' ? -59 : -52
        break
      case 2:
        return Platform.OS == 'android' ? -145 : -130
        break
      case 3:
        return Platform.OS == 'android' ? -173 : -155
      case 4:
        return Platform.OS == 'android' ? -117 : -100
        break
      case 5:
        return Platform.OS == 'android' ? -23 : -22
        break
      case 6:
        return Platform.OS == 'android' ? 45 : 41
        break
      default:
        return Platform.OS == 'android' ? -75 : -75
        break
    }
  }
}