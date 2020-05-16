import React from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableHighlight,
    Alert,
    Button,
    TouchableOpacity,
    Dimensions,
    Platform
} from 'react-native';
import profileJson from '../components/Assets/json/profile.list.json'
import bStyle from '../bootstrap/Style'
import CustomInfoLarge from '../components/customcomponents/custominfolarge';

const PRODUCT_ITEM_OFFSET = 1;
const PRODUCT_ITEM_MARGIN = PRODUCT_ITEM_OFFSET * 2;

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        //this.props = props;
        this.state = {
            loggedInUser: this.props.navigation.state.params ? this.props.navigation.state.params.loggedInUser : ''
        }
    }
    render() {

        let profileFlatListData = this.state.loggedInUser == 'patient' ? [
            require('../components/Assets/profile/profile-password.png'),
            require('../components/Assets/profile/profile-questions.png'),
            require('../components/Assets/profile/profile-twofactor.png'),
            require('../components/Assets/profile/profile-language.png'),
            require('../components/Assets/profile/profile-privacy.png'),
            require('../components/Assets/profile/profile-terms.png')
        ] : [
                require('../components/Assets/ProfileNew/hospital_icon.png'),
                require('../components/Assets/profile/profile-password.png'),
                require('../components/Assets/profile/profile-questions.png'),
                require('../components/Assets/profile/profile-twofactor.png'),
                require('../components/Assets/profile/profile-language.png'),
                require('../components/Assets/profile/profile-privacy.png'),
                require('../components/Assets/profile/profile-terms.png')
            ];

        return (
            <View style={{ backgroundColor: '#EEF2F6', flex: 1 }}>
                <FlatList
                    data={profileFlatListData}
                    numColumns={3}
                    backgroundColor={'#EEF2F6'}
                    renderItem={({ item, index }) => this.renderListItem(item, index)}
                    keyExtractor={(index) => { return index }}
                    ListHeaderComponent={() => this.getListHeaderComponent()}
                    removeClippedSubviews={false}
                />
            </View>
        );
    }

    itemClickEvent(index) {

        if (this.state.loggedInUser == 'patient') {
            if (index == 0)
                this.props.navigation.navigate('changePassword')

            else if (index == 1)
                this.props.navigation.navigate('sQuestions')
            else if (index == 2)
                this.props.navigation.navigate('twoFactorAuthentication')

            else if (index == 3)
                this.props.navigation.navigate('preferLanguage')
            else if (index == 4)
                this.props.navigation.navigate('privacyInformation')
            else if (index == 5)
                this.props.navigation.navigate('termsConditions')
        }
        else {
            if (index == 0)
                this.props.navigation.navigate('hospitals')
            else if (index == 1)
                this.props.navigation.navigate('changePassword')

            else if (index == 2)
                this.props.navigation.navigate('sQuestions')
            else if (index == 3)
                this.props.navigation.navigate('twoFactorAuthentication')

            else if (index == 4)
                this.props.navigation.navigate('preferLanguage')
            else if (index == 5)
                this.props.navigation.navigate('privacyInformation')
            else if (index == 6)
                this.props.navigation.navigate('termsConditions')
        }

    };

    renderListItem(item, index) {
        console.log('item', item)
        let dimensions = Dimensions.get('window');
        let myWidth = (dimensions.width) / (3)
        return (

            <View style={{
                flex: 1, margin: 5, width: myWidth, overflow: 'hidden',
                ...Platform.select({
                    ios: {
                        shadowColor: 'rgba(0,0,0, .2)',
                        shadowOffset: { height: 0, width: 0 },
                        shadowOpacity: 1,
                        shadowRadius: 1,
                    },
                    android: {
                        elevation: 1,
                    },
                }),
            }}>
                <TouchableOpacity onPress={() => {
                    this.itemClickEvent(index)
                }}><Image
                        style={{ width: 115, height: 115, backgroundColor: '#fff' }}
                        source={item} /></TouchableOpacity>

            </View>
        )
    }

    getListHeaderComponent() {
        return (
            <View>
                <CustomInfoLarge
                    name='Clyde D. Santiago'
                    image={require('../components/Assets/CriticialAlerts/critical_profile.png')}
                    designation='Physician'
                    address='Irvin, CA'
                    email='clyde@gmail.com'
                /> 

                {/* <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>
                        <Image
                            style={{ width: 36, height: 36, margin: 10, alignSelf: 'center' }}
                            source={require('../components/Assets/profile/home_icon.png')} />
                        <View style={{ paddingLeft: 5, flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ color: "grey", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal' }}>Phone</Text>
                            <Text style={{ color: "#000", fontSize: 15, fontFamily: 'Montserrat', fontStyle: 'normal' }}>(714) 666-6666</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flex: 0.01,
                            height: '100%',
                            alignSelf: 'center',
                            backgroundColor: "white",
                        }}
                    />

                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>
                        <Image
                            style={{ width: 36, height: 36, margin: 10, alignSelf: 'center' }}
                            source={require('../components/Assets/profile/work_icon.png')} />
                        <View style={{ paddingLeft: 5, flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ color: "grey", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal' }}>Mobile</Text>
                            <Text style={{ color: "#000", fontSize: 15, fontFamily: 'Montserrat', fontStyle: 'normal' }}>(714) 666-6666</Text>
                        </View>
                    </View>
                </View> */}

                <View style={{ flexDirection: 'row', backgroundColor: '#ECECEC' }}>

                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 3, paddingBottom: 3 }}>
                        <Image
                            style={{ width:30, height:30, margin:10, alignSelf: 'center' }}
                            source={require('../components/Assets/profile/home_icon.png')} />
                        <View style={{ paddingLeft: 5, flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ color: "grey", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal' }}>Home</Text>
                            <Text style={{ color: "#000", fontSize: 15, fontFamily: 'Montserrat', fontStyle: 'normal' }}>(714) 666-6666</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flex: 0.01,
                            height: '100%',
                            alignSelf: 'center',
                            backgroundColor: "white",
                        }}
                    />

                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 3, paddingBottom: 3 }}>
                        <Image
                            style={{ width: 30, height: 30, margin: 10, alignSelf: 'center' }}
                            source={require('../components/Assets/profile/work_icon.png')} />
                        <View style={{ paddingLeft: 5, flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ color: "grey", fontSize: 16, fontFamily: 'Montserrat', fontStyle: 'normal' }}>Work</Text>
                            <Text style={{ color: "#000", fontSize: 15, fontFamily: 'Montserrat', fontStyle: 'normal' }}>(714) 666-6666</Text>
                        </View>
                    </View>

                </View>

                <View
                    style={{
                        width: '100%',
                        height: 2,
                        alignSelf: 'center',
                        backgroundColor: "white",
                    }}
                />

                <View style={{ flexDirection: 'row',backgroundColor: '#ECECEC' }}>

                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 1, paddingBottom: 1, backgroundColor: '#ECECEC' }}>
                        <Image
                            style={{ width: 30, height: 30, margin: 10, alignSelf: 'center' }}
                            source={require('../components/Assets/Physician/Skype-icon.png')} />
                        <Text style={{ color: "black", fontSize: 15, fontFamily: 'Montserrat', fontStyle: 'normal', alignSelf: 'center', marginLeft: 2 }}>Marc B.Willams</Text>

                    </View>

                    <View
                        style={{
                            flex: 0.01,
                            height: '100%',
                            alignSelf: 'center',
                            backgroundColor: "white",
                        }}
                    />

                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 1, paddingBottom:1, backgroundColor: '#ECECEC' }}>
                        <Image
                            style={{ width: 30, height: 30, margin: 10, alignSelf: 'center' }}
                            source={require('../components/Assets/Physician/Slack_Icon.png')} />
                        <Text style={{ color: "black", fontSize: 15, fontFamily: 'Montserrat', fontStyle: 'normal', alignSelf: 'center', marginLeft: 2 }}>Marc B.Willams</Text>
                    </View>

                </View>

                <View
                    style={{
                        height: 5,
                        width: "100%",
                        backgroundColor: "white",
                    }}
                />
            </View>
        )
    }
}