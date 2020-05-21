import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight,
    Platform
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, SVGImage, SVGText, Line } from 'react-native-svg'
import * as fontUtils from '../components/utils/fontUtils'
import GreyButtonSmall from '../components/customcomponents/greybuttonsmall';
import CustomInfoLarge from '../components/customcomponents/custominfolarge';
import GreyButtonLarge from '../components/customcomponents/greybuttonlarge';

export default class PhysicianInformation extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {

        const entry = [
            {
                key: 1,
                amount: 0,
                text: 'Documents',
                svg: { fill: '#68C238' }//Yellow

            },
            {
                key: 2,
                amount: 50,
                text: 'Permissions',
                svg: { fill: '#44C095' }, //Green
            },
            {
                key: 3, //
                amount: 50,
                text: 'Calendar',
                svg: { fill: '#2497D9' },//Oranger
            },
            {
                key: 4,
                amount: 0,
                text: 'Critical',
                svg: { fill: '#DB1C35' }, //Maroon
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
                        <SVGImage
                            x={Platform.OS == 'ios' ? -35 : -40}
                            y={Platform.OS == 'ios' ? 135 : -10}
                            width={65}
                            height={65}
                            preserveAspectRatio="xMidYMid slice"
                            opacity="1"
                            backgroundColor='transparent'
                        //href={Images.icons[index+1]}
                        />
                        <Circle
                            r={30}
                            //x={Platform.OS == 'ios' ? -35 : -40}
                            //y={Platform.OS == 'ios' ? 135 : -10}
                            fill={'red'}
                        />
                        <SVGText
                            key={index}
                            //x={5}
                            y={Platform.OS == 'ios' ? 50 : -35}
                            fill={'black'}
                            textAnchor={'middle'}
                            alignmentBaseline={'middle'}
                            fontSize={Platform.OS == 'ios' ? 12 : 12}
                            fontWeight='bold'
                            stroke={'white'}
                            strokeWidth={0.1}
                        >
                            {data.text}
                        </SVGText>
                        <Circle
                            r={5}
                            x={10}
                            y={-10}
                            width={5}
                            fill={'transparent'}
                        />
                    </G>
                )
            })
        }
        return (
            <View style={styles.containerStyle}>
                <CustomInfoLarge
                    name='Lorenzo J. Smith'
                    image={require('../components/Assets/CriticialAlerts/critical_profile.png')}
                    designation='Physician'
                    address='Irvin, CA'
                />
                <View style={{ flexDirection: 'row', backgroundColor: '#ECECEC' }}>
                    <GreyButtonLarge
                        text1='Home'
                        text2='(714) 666-6666'
                        image={require('../components/Assets/profile/home_icon.png')}
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
                        image={require('../components/Assets/profile/work_icon.png')}
                    />
                </View>
                <View
                    style={{
                        width: '100%',
                        height: 2,
                        alignSelf: 'center',
                        backgroundColor: "white",
                    }}
                />
                <View style={{ flexDirection: 'row', backgroundColor: '#ECECEC' }}>
                    <GreyButtonSmall
                        text='Lorenzo J. Smith'
                        image={require('../components/Assets/Physician/Skype-icon.png')
                        }
                    />
                    <View
                        style={{
                            flex: 0.01,
                            height: '100%',
                            alignSelf: 'center',
                            backgroundColor: "white",
                        }}
                    />
                    <GreyButtonSmall
                        text='Lorenzo J. Smith'
                        image={require('../components/Assets/Physician/Slack_Icon.png')
                        }
                    />
                </View>

                {/* <View style={{ height:'43%',backgroundColor: 'gray',justifyContent:'center'}}>
                <PieChart
                    style={{ height: '95%' }}
                    valueAccessor={({ item }) => item.amount}
                    data={entry}
                    spacing={70}
                    //padAngle={.07}
                    outerRadius={'100%'}
                >
                    <Labels />
                </PieChart>
                </View> */}

                <View style={{ height: '45%', backgroundColor: 'transparent' }}>

                    <View style={{ flexDirection: 'column' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <TouchableOpacity
                                        onPress={() => { this.props.navigation.navigate('critical') }}>
                                        <Image style={styles.circleCriticalStyle} source={require('../components/Assets/PhysicianInformation/phyInfoCritical.png')} />
                                        <Text style={styles.circleCriticalTextStyle}>Critical</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>

                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <TouchableOpacity
                                        onPress={() => { this.props.navigation.navigate('documents') }}>
                                        <Image style={styles.circleDocumentsStyle} source={require('../components/Assets/PhysicianInformation/phyInfodocuments.png')} />
                                        <Text style={styles.circleDocumentsTextStyle}>Documents</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'column' }}>
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('patientCalendar') }}>
                                    <Image style={styles.circleCalendarStyle} source={require('../components/Assets/PhysicianInformation/phyInfoCalendar.png')} />
                                    <Text style={styles.circleCalendarTextStyle}>Calendar</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{ flexDirection: 'column' }}>
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('patientPermission') }}>
                                    <Image style={styles.circlePermissionStyle} source={require('../components/Assets/PhysicianInformation/phyInfoPermissions.png')} />
                                    <Text style={styles.circlePermissionTextStyle}>Permissions</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                    {/* <Image style={{ width: 120, height: 120, position: 'absolute', top: '28.5%', left: '34.5%', right: '31.5%', bottom: '31.5%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }} source={require('../components/Assets/PhysicianInformation/phyInfoTimeline.png')} /> */}
                    <TouchableOpacity
                        style={{ width: 120, height: 120, position: 'absolute', top: '20.5%', left: '25.5%', right: '31.5%', bottom: '31.5%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}
                        onPress={() => { this.props.navigation.navigate('patientTimeline') }}>

                        <Image style={{ width: 120, height: 120, position: 'absolute', top: '20.5%', left: '25.5%', right: '31.5%', bottom: '31.5%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }} source={require('../components/Assets/PhysicianInformation/phyInfoTimeline.png')} />

                    </TouchableOpacity>
                </View>

                <View style={{ height: '10%', width: '100%', position: 'absolute', bottom: 0 }}>
                    <View style={styles.bottomContainer}>
                        <View style={styles.bottomView}>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('DrawerOpen') }}>
                                <Image style={styles.imageStye} source={require('../components/Assets/PhysicianInformation/lane_physician_icon_02.png')} />
                                <Text style={styles.bottomTextStye}>Lane</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.bottomView}>

                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('notesInput') }}>
                                <Image style={styles.imageStye} source={require('../components/Assets/PatientDBoard/notes.png')} />
                                <Text style={styles.bottomTextStye}>Notes</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.bottomView}>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('calendarNewTask') }}>
                                <Image style={styles.imageStye} source={require('../components/Assets/PhysicianInformation/task_physician_icon_02.png')} />
                                <Text style={styles.bottomTextStye}>Tasks</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

styles = StyleSheet.create({

    containerStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    bottomContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        flex: 1,
        padding: 5
    },
    bottomTextStye: {
        fontSize: 12,
        color: 'black',
        padding: 5,
        fontFamily: 'Montserrat',
        fontStyle: 'normal'
    },
    bottomView: {
        flex: 1,
        alignItems: 'center'
    },
    imageStye: {
        width: 30,
        height: 30,
        padding: 5,
        alignSelf: 'center'
    },
    circleCriticalStyle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: 'transparent',
        marginLeft: 60,
        // marginRight: 20,
        marginTop: 15,
        justifyContent: 'center'
    },
    circleDocumentsStyle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: 'transparent',
        //marginLeft:20,
        marginRight: 60,
        marginTop: 15,
        justifyContent: 'center'
    },
    circlePermissionStyle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: 'transparent',
        //marginLeft: 20,
        marginRight: 60,
        marginTop: 100,
        justifyContent: 'center'
    },
    circleCalendarStyle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: 'transparent',
        marginLeft: 60,
        marginTop: 100,
        justifyContent: 'center'
    },
    circleCriticalTextStyle: {
        marginLeft: 65,
        fontFamily: fontUtils.FONT_FAMILY,
        fontSize: 14
    },
    circleDocumentsTextStyle: {
        marginRight: 35,
        fontFamily: fontUtils.FONT_FAMILY,
        fontSize: 14
    },
    circleCalendarTextStyle: {
        marginLeft: 65,
        fontFamily: fontUtils.FONT_FAMILY,
        fontSize: 14
    },
    circlePermissionTextStyle: {
        marginRight: 35,
        fontFamily: fontUtils.FONT_FAMILY,
        fontSize: 14
    }
})
