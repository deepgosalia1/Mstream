import React from 'react';
import {
    View,
    Text,
    Alert,
    TextInput,
    Switch,
    FlatList,
    Image,
    StyleSheet,
} from 'react-native';

import * as colorUtils from '../components/utils/colorUtils'


export default class TwoFactorAuthentication extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            SwitchOnValueHolder: false
        }
    }


    ShowHideTextComponentView = () => {

        if (this.state.status == true) {
            this.setState({ status: false })
        }
        else {
            this.setState({ status: true })
        }
    }
    ShowAlert = (value) => {

        this.setState({

            SwitchOnValueHolder: value
        })

        if (value) {

            //$('#hideAuth').show();
            //document.getElementById('hideAuth').style.display === "block"

        }
        else {
            //$('#hideAuth').hide();
            // document.getElementById('hideAuth').style.display === "none"
        }

    }

    render() {
        const resizeMode = 'center';
        return (
            <View style={styles.container}>

                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ margin: 10, fontSize: 20, color: 'grey', fontWeight: 'bold' }}>Protect your account with 2 - step verification</Text>
                    <Text style={{ margin: 10, fontFamily: 'Montserrat', fontSize: 18, color: 'grey' }}>Each Time you sign into CareLane 360 app, you'll need password and verification code</Text>
                </View>
                <View style={{ margin: 10, borderColor: 'lightgrey', borderWidth: 2, height: 100 }}>
                    <Text style={{ color: 'grey', fontSize: 20, fontFamily: 'Montserrat', fontWeight: 'bold', marginLeft: 15, top: 35 }}>
                        Enable Authentication</Text>
                    <Switch style={{ alignSelf: 'center', marginLeft: 250, top: 5 }}
                        onValueChange={(value) => this.ShowAlert(value)}
                        value={this.state.SwitchOnValueHolder}></Switch>
                </View>
                {
                    this.state.SwitchOnValueHolder && <View style={{ marginLeft: 10 }}>

                        <View>
                            <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 20, top: 20 }}>Phone Number</Text>
                            <View style={{ top: 12, backgroundColor: 'tranparent', flexDirection: 'row' }}>
                                <Image style={styles.iconStyle} source={require('../components/Assets/TwoStep/2stepCountry.png')}></Image>
                                <TextInput style={styles.countryTextInput}>+91</TextInput>
                                <TextInput style={styles.PhoneNumberTextInput}>9985480320</TextInput>
                            </View>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 20, top: 20 }}>Email Address</Text>
                            <View style={{ top: 12, backgroundColor: 'tranparent', flexDirection: 'row' }}>
                                <Image style={styles.iconStyle} source={require('../components/Assets/TwoStep/2stepEmail.png')}></Image>
                                <TextInput style={styles.emailFieldStyle}>abc@abc.com</TextInput>
                            </View>
                        </View>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
    },
    enableVerificationStyle: {

    },
    iconStyle: {
        width: 25,
        height: 25,
        top: 20,
    },
    PhoneNumberTextInput: {
        textAlign: 'left',
        width: '70%',
        marginLeft: 10,
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        color: colorUtils.THEME_COLOR,
        borderBottomColor: 'grey',

    },
    countryTextInput: {
        textAlign: 'left',
        marginLeft: 10,
        marginRight: 10,
        width: '10%',
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        color: colorUtils.THEME_COLOR,
        borderBottomColor: 'grey',
    },
    emailFieldStyle: {

        textAlign: 'left',
        width: '85%',
        fontSize: 20,
        marginLeft: 10,
        paddingTop: 15,
        paddingBottom: 10,
        color: colorUtils.THEME_COLOR,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    }


});