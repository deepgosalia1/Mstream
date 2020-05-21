import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    Alert
} from 'react-native';
import alertsListJson from '../components/Assets/json/criticalalerts.list.json'
import * as colorUtils from '../components/utils/colorUtils'
import Button from '../components/Custom components/Button';

export default class CriticalAlerts extends React.Component {

    constructor(props) {
        super(props)
    }
    acknowledgeClicked() {
        // this.props.navigation.pop();
        Alert.alert('Acknowledgement clicked..')
    }
    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "lightgrey",
                }}
            />
        );
    }
    render() {
        return (
            <View style={styles.container}>

                {/* <View style={{ flex: 1 }}>
                    <FlatList
                        data={[{
                            "name": "Patient John Doe",
                            "icon": "../components/Assets/General/man.png",
                            "id":"0"
                          },
                        ]}
                        renderItem={({ item }) => (
                            <View style={styles.laneView}>
                                <Image style={styles.sideImage} source={require('../components/Assets/CriticialAlerts/critical_profile.png')} />
                                <View style={{ paddingLeft: 15, flexDirection: 'column' }}>
                                    <Text style={{ marginTop: 2, color: colorUtils.THEME_COLOR, fontSize: 18, fontWeight: '400' }}>Patient John Doe</Text>
                                    <Text style={{ marginTop: 2, color: "black", fontSize: 15 }}>Call immediatly</Text>
                                    <Text style={{ marginTop: 2, color: "grey", fontSize: 12 }}>Jaswant Grawd M.D.13/05/2018,11:00 AM</Text>
                                </View>
                                <Image style={styles.infoImageStyle} source={require('../components/Assets/CriticialAlerts/info_icon_inactive.png')} />
                                
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View> */}
                <View style={styles.laneView}>

                    <View style={{flexDirection: 'column',padding:2}}>

                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{ marginTop: 2, color: "#127265", fontSize: 20, fontWeight:'400',fontFamily:'Montserrat-Medium',fontStyle:'normal'}}>Patient - John Doe</Text>
                            <Image style={{width:35,height:35,alignSelf:'center',marginRight:10}} source={require('../components/Assets/Acknowledgement/ackinfo_icon.png')}/>
                        </View>
                        <Text style={{ paddingTop: 2, color: "##0E1716", fontSize: 16,fontFamily:'Montserrat',fontStyle:'normal'}}>We identify nine bariers to improving the informative value of medical journalisam</Text>
                        <View style={{ flexDirection: 'row', width: 370, justifyContent: 'space-between'}}>
                            <Text style={{ marginLeft:2,paddingTop: 4, color: "#757575", fontSize: 12,fontFamily:'Montserrat',fontStyle:'normal'}}>Saul T.True.MBBS.MD</Text>
                            <Text style={{ marginTop: 4, color: "#757575", fontSize: 12,fontFamily:'Montserrat',fontStyle:'normal',marginRight:15}}>02/20/2018 09:20 AM</Text>
                        </View>
                    </View>
                </View>
                {this.FlatListItemSeparator()}
                <View style={{ top: 20, width: '100%' }}>
                    <Text style={{ marginLeft:5,color: 'grey', fontSize: 22, marginLeft: 25,fontFamily:'Montserrat',fontStyle:'normal'}}>Comment</Text>
                    <TextInput placeholder='' multiline={true}  style={styles.TextInputStyleClass}></TextInput>
                </View>

                <View style={{ top: 40 }}>
                    {/* <Button
                        label="Acknowledge"
                        styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
                        onPress={this.acknowledgeClicked.bind(this)} /> */}
                        <Image style={{width:325,height:40,marginLeft:22}} source={require('../components/Assets/Acknowledgement/acknowledge_button.png')}/>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../components/Assets/Acknowledgement/search_icon.png')} style={{ width: 30, height:30,marginLeft:20, backgroundColor: 'transparent', top: 85 }}></Image>
                    <TextInput placeholder='Refering Person' multiline={true} style={styles.TextInputStyleRefering}></TextInput>
                </View>

                <View style={{ top: 40 }}>
                    {/* <Button
                        label="Refer"
                        styles={{ button: styles.referStyleButton, label: styles.referButtonWhiteText}}
                        onPress={{

                        }} /> */}
                        <Image style={{width:325,height:40,marginLeft:22}} source={require('../components/Assets/Acknowledgement/refer_button.png')}/>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        height: "100%"
    },
    laneView: {
        padding: 10,
        flexDirection: 'row',
    },

    sideImage: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    infoImageStyle: {
        width: 20,
        height: 20,
        alignSelf: 'center',
        alignContent: 'flex-end',
        flexDirection: 'column',
    },
    TextInputStyleClass: {

        marginTop: 70,
        textAlign: 'left',
        height: 50,
        width: '85%',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        fontSize: 20,
        marginLeft: 25,
        color: colorUtils.THEME_COLOR
    },
    TextInputStyleRefering: {

        marginTop: 70,
        textAlign: 'left',
        height: 50,
        width: '75%',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        fontSize: 20,
        marginLeft:10,
        color: colorUtils.THEME_COLOR
    },
    primaryButton: {
        backgroundColor: colorUtils.THEME_COLOR,
        height: 60,
        width: '85%',
        alignSelf: 'center',
        borderRadius: 5
    },
    referStyleButton:{
        backgroundColor:'#C3C3C3',
        height: 60,
        width: '85%',
        alignSelf: 'center',
        borderRadius: 5
    },
    buttonWhiteText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: "bold",
    },
    referButtonWhiteText: {
        fontSize: 14,
        color: 'black',
        fontWeight: "normal",
    }
});