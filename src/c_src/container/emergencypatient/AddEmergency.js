import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text, Alert } from 'react-native'
import CustomTextInput from '../../components/customcomponents/customtextinput'
import CustomPicker from '../../components/customcomponents/custompicker'
import { THEME_COLOR } from '../../components/utils/colorUtils'

export default class EmergencyPatient extends Component {
    constructor(props) {
        super(props)
        const { params } = this.props.navigation.state
        params.data ? this.props.navigation.setParams({
            firstName: params.data.firstName,
            lastName: params.data.lastName,
            relation: params.data.relation,
            contact: params.data.contact
        }) :
            this.props.navigation.setParams({
                firstName: '',
                lastName: '',
                relation: '',
                contact: '',
                picker: false
            })
        params.data ? this.state = {
            firstName: params.data.firstName,
            lastName: params.data.lastName,
            relation: params.data.relation,
            contact: params.data.contact
        } :
            this.state = {
                firstName: '',
                lastName: '',
                relation: '',
                contact: '',
                picker: false
            }
    }

    togglePicker = () => {
        this.setState({ picker: !this.state.picker })
    }

    setValue = (data) => {
        this.setState({ relation: data })
        this.props.navigation.setParams({ relation: data })
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerTitle: <Text style={{ color: THEME_COLOR, fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>{params.newEmergency ? 'Add Emergency' : 'Edit Emergency'}</Text>,
            headerRight: <TouchableOpacity style={{ marginRight: 15 }} onPress={() => {
                params.firstName && params.contact ? params.newEmergency ? params.addData(params.firstName, params.lastName, params.relation, params.contact) : params.editData(params.firstName, params.lastName, params.relation, params.contact, params.index) : Alert.alert('Please enter the required fields')
                params.firstName && params.contact && navigation.goBack()
            }}>
                <Text style={{ color: '#3a3a3a', fontWeight: 'normal', fontSize: 20 }}>Save</Text>
            </TouchableOpacity>
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff', height: '100%' }}>
                <View style={{ marginTop: 30, alignSelf: 'center' }}>
                    <Image source={require('../../components/Assets/common/profile.png')} style={{ height: 120, width: 120 }} />
                    <TouchableOpacity style={{ position: 'absolute', top: 75, left: 85, backgroundColor: THEME_COLOR, borderRadius: 60 }}>
                        <Image source={require('../../components/Assets/common/mini_cam.png')} style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                </View>
                <CustomTextInput
                    placeholder='First Name'
                    imageSource={require('../../components/Assets/common/user.png')}
                    editable={true}
                    value={this.state.firstName}
                    textCallback={(text) => {
                        this.setState({
                            firstName: text
                        })
                        this.props.navigation.setParams({
                            firstName: text
                        })
                    }}
                />
                <CustomTextInput
                    placeholder='Last Name'
                    imageSource={require('../../components/Assets/common/user.png')}
                    editable={true}
                    value={this.state.lastName}
                    textCallback={(text) => {
                        this.setState({
                            lastName: text
                        })
                        this.props.navigation.setParams({
                            lastName: text
                        })
                    }}
                />
                <TouchableOpacity onPress={() => this.togglePicker()}>
                    <View pointerEvents='none'>
                        <CustomTextInput
                            placeholder='Relationship'
                            imageSource={require('../../components/Assets/common/relationship.png')}
                            editable={false}
                            value={this.state.relation}
                            pickerIcon={true}
                            textCallback={(text) => {
                                this.setState({
                                    relation: text
                                })
                                this.props.navigation.setParams({
                                    relation: text
                                })
                            }}
                        />
                    </View>
                </TouchableOpacity>
                <CustomTextInput
                    placeholder='Phone Number'
                    imageSource={require('../../components/Assets/common/phone.png')}
                    editable={true}
                    value={this.state.contact}
                    textCallback={(text) => {
                        this.setState({
                            contact: text
                        })
                        this.props.navigation.setParams({
                            contact: text
                        })
                    }}
                />
                {this.state.picker && <CustomPicker
                    pickerData={['Father', 'Mother', 'Sister', 'Uncle', 'Aunt']}
                    togglePicker={this.togglePicker}
                    setValue={this.setValue}
                    selectedValue={this.state.relation}
                />}
            </View>
        )
    }
}