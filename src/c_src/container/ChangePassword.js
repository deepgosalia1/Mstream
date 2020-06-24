import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    Image,
    TouchableHighlight
} from 'react-native';

import * as colorUtils from '../components/utils/colorUtils'


export default class ChangePassword extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            isPassSecure1:true,
            isPassSecure2:true,
            isPassSecure3:true,

        }
    }

    checkSecureVisblity1=()=>{
       
        this.setState({
            isPassSecure: !this.state.isPassSecure,
        })
    }
    checkSecureVisblity2=()=>{
       
        this.setState({
            isPassSecure1: !this.state.isPassSecure1,
        })
    }
    checkSecureVisblity3=()=>{
       
        this.setState({
        
            isPassSecure2: !this.state.isPassSecure2
        })
    }
     
    render() {
        return (

            <View style={styles.container}>
                <View style={styles.laneView}>
                    <Text style={styles.textStyle}>Current Password</Text>
                    <View>
                        <TextInput placeholder='' secureTextEntry={this.state.isPassSecure} style={styles.TextInputStyleClass}>Password</TextInput>
                        <TouchableHighlight style={styles.ImageStyle}  onPress={()=>{
                                this.checkSecureVisblity1()
                        }}>
                 
                    <Image source={require('../components/Assets/General/eye.png')} style={styles.ImageStyle} />
                
                   </TouchableHighlight>
                        
                    </View>

                    <Text style={styles.textStyle}>New Password</Text>
                    <View>
                        <TextInput placeholder='' secureTextEntry={this.state.isPassSecure1}style={styles.TextInputStyleClass}>Value</TextInput>
                        <TouchableHighlight style={styles.ImageStyle}  onPress={()=>{
                                this.checkSecureVisblity2()
                        }}>
                 
                    <Image source={require('../components/Assets/General/eye.png')} style={styles.ImageStyle} />
                
                   </TouchableHighlight>
                    </View>

                    <Text style={styles.textStyle}>Confirm Password</Text>
                    <View >
                        <TextInput placeholder='' secureTextEntry={this.state.isPassSecure2} style={styles.TextInputStyleClass}>Value</TextInput>
                        <TouchableHighlight style={styles.ImageStyle}  onPress={()=>{
                                this.checkSecureVisblity3()
                        }}>
                 
                    <Image source={require('../components/Assets/General/eye.png')} style={styles.ImageStyle} />
                
                   </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        height: 600
    },
    textStyle: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 10,
        marginTop: 20,
        fontFamily: 'Montserrat'
    },
    laneView: {
        padding: 10,
        flexDirection: 'column'
    },
    TextInputStyleClass: {

        // Setting up Hint Align center.
        textAlign: 'left',
        // Setting up TextInput height as 50 pixel.
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        fontSize: 20,
        marginLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        color: colorUtils.THEME_COLOR
    },
    ImageStyle: {
        position: 'absolute',
        end: 0,
        marginRight: 20,
        width: 30,
        height: 18,
        marginBottom:5
    },
    
});