import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import styles from './style'

var emergencydata = require('./emergencydata.list.json')

export default class EmergencyPatient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emergencyData: emergencydata,
            editMode: false
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            edit: this.edit.bind(this),
            addData: this.addData.bind(this),
            editData: this.editData.bind(this),
            editMode: false
        })
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight: <TouchableOpacity style={{ marginRight: 15 }} onPress={() => {
                params.edit()
            }}>
                <Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}>{params.editMode ? 'Done' : 'Edit'}</Text>
            </TouchableOpacity>
        }
    }

    addData(firstname, lastname, relationship, contact) {
        var newData = this.state.emergencyData
        newData.push({
            firstName: firstname,
            lastName: lastname,
            relation: relationship,
            contact: contact
        })
        this.setState({ emergencyData: newData })
    }

    editData(firstname, lastname, relationship, contact, index) {
        console.log(index)
        var currentData = this.state.emergencyData
        currentData[index].firstName = firstname
        currentData[index].lastName = lastname
        currentData[index].relation = relationship
        currentData[index].contact = contact
        console.log(currentData)
        this.setState({ emergencyData: currentData })
        this.edit()
    }

    edit() {
        this.setState({ editMode: !this.state.editMode })
        this.props.navigation.setParams({ editMode: !this.props.navigation.state.params.editMode })
    }

    render() {
        return (
            <View>
                <ScrollView style={{ height: '65%' }}>
                    <View style={styles.cardContainerStyle}>
                        {this.state.emergencyData.map((eachdata, index) => {
                            return (!eachdata.favourite && <View style={styles.cardStyle}>
                                <Image style={styles.cardImageStyle} source={require('../../components/Assets/common/family.png')} />
                                <TouchableOpacity style={styles.callButtonStyle} onPress={() => {{RNImmediatePhoneCall.immediatePhoneCall(eachdata.contact.split('-').join(''))}}}>
                                    <Image style={styles.callImageStyle} source={require('../../components/Assets/EmergencyPatient/call.png')} />
                                </TouchableOpacity>
                                {eachdata.lastName ? <Text style={styles.cardNameStyle}>{eachdata.firstName + ' ' + eachdata.lastName}</Text> : <Text style={styles.cardNameStyle}>{eachdata.firstName}</Text>}
                                {eachdata.relation ? <Text style={styles.cardRelationStyle}>{eachdata.relation}</Text> : console.log()}
                                <Text style={styles.cardContactStyle}>{eachdata.contact}</Text>
                                {this.state.editMode && <View style={styles.editViewStyle}>
                                    <View style={[styles.cardImageStyle, { color: 'transparent' }]} />
                                    <Text style={[styles.cardNameStyle, { color: 'transparent' }]}>{eachdata.firstName + ' ' + eachdata.lastName}</Text>
                                    {eachdata.relation ? <Text style={[styles.cardRelationStyle, { color: 'transparent' }]}>{eachdata.relation}</Text> : console.log()}
                                    <Text style={[styles.cardContactStyle, { color: 'transparent' }]}>{eachdata.contact}</Text>
                                </View>}
                                {this.state.editMode && <TouchableOpacity style={[styles.editButtonStyle, { top: 25, left: 30 }]} onPress={() => {
                                    {
                                        var data = this.state.emergencyData
                                        data.map((eachdata) => {
                                            eachdata.favourite = false
                                        })
                                        data[index].favourite = true
                                        this.setState({ emergencyData: data })
                                        this.edit()
                                    }
                                }}>
                                    <Image style={{ width: 50, height: 50 }} source={require('../../components/Assets/EmergencyPatient/star.png')} />
                                </TouchableOpacity>}
                                {this.state.editMode && <TouchableOpacity style={[styles.editButtonStyle, { top: 25, left: 90 }]} onPress={() => {
                                    var newdata = this.state.emergencyData
                                    newdata.splice(index, 1)
                                    this.setState({ emergencyData: newdata })
                                }}>
                                    <Image style={{ width: 50, height: 50 }} source={require('../../components/Assets/EmergencyPatient/delete.png')} />
                                </TouchableOpacity>}
                                {this.state.editMode && <TouchableOpacity style={[styles.editButtonStyle, { top: 85, left: 60 }]} onPress={() => {
                                    this.props.navigation.navigate('addEmergency', { data: eachdata, editData: this.props.navigation.state.params.editData, index: index, newEmergency: false })
                                }}>
                                    <Image style={{ width: 50, height: 50 }} source={require('../../components/Assets/EmergencyPatient/edit.png')} />
                                </TouchableOpacity>}
                            </View>)
                        })}
                    </View>
                </ScrollView>
                {this.state.emergencyData.map((eachdata, index) => {
                    return (eachdata.favourite && <TouchableOpacity style={styles.redButtonStyle} onPress={() => {RNImmediatePhoneCall.immediatePhoneCall(eachdata.contact.split('-').join(''))}}>
                        <Image style={{ height: 46, width: 46, marginBottom: eachdata.contact.length>3 ? 10 : 0 }} source={require('../../components/Assets/EmergencyPatient/callmain.png')} />
                        <Text style={[styles.redButtonTextStyle, { fontSize: eachdata.contact.length>3 ? 24: 50 }]}>{eachdata.contact}</Text>
                        <Text style={styles.redButtonTextStyle}>{eachdata.firstName}</Text>
                    </TouchableOpacity>)
                })}
                <TouchableOpacity style={styles.addIconStyle} onPress={() => this.props.navigation.navigate('addEmergency', {
                    addData: this.props.navigation.state.params.addData,
                    newEmergency: true
                })}>
                    <Image style={{ width: 56, height: 56 }} source={require('../../components/Assets/common/add_icon.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}