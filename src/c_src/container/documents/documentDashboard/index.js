import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    SectionList,
    Alert,
    LayoutAnimation,
    Platform,
    BackHandler,

} from 'react-native';
//import { THEME_COLOR } from '../utils/colorUtils'
import { Icon } from 'native-base';
import documentListJson from './document.list.json'
import * as fontUtils from '../../../components/utils/fontUtils';
import * as colorUtils from '../../../components/utils/colorUtils';
import { EventRegister } from 'react-native-event-listeners'
import { x } from '../../../container/LoginScreen'
//import { y } from '../../../container/LoginScreen'
import ImagePicker from 'react-native-image-picker';

var options = {
    title: 'Select From',
    quality: 0.8,
    imageFileType: 'png',
    maxWidth: 600,
    maxHeight: 600,
    storageOptions: {
        skipBackup: true,
        //folder: 'attachments',
        waitUntilSaved: true
    }
};
export default class DocumentDashboard extends Component {



    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let showSectionList = params.showSectionList;
        return {
            headerLeft: <Icon type='Ionicons' name={Platform.OS == 'android' ? "arrow-back" : "ios-arrow-back"} style={{ fontSize: 34, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }}
                onPress={() => {
                    //navigation.goBack()
                    let loggedInUser = global.x ? 'patient' : 'physician';
                    console.log(x)
                    navigation.navigate('Emergency', { loggedInUser })
                    //console.log(params.loggedInUser)
                    EventRegister.emit('sideMenuClickedEvent', 'documents')
                    navigation.navigate('DrawerOpen');
                }} />,
            headerRight: <View>
                {
                    !showSectionList && <TouchableOpacity
                        onPress={params.onListIconClicked}
                        style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <Image
                            source={require('../../../components/Assets/documents/list_icon.png')}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>
                }
                {
                    showSectionList && <TouchableOpacity
                        onPress={params.onTileIconClicked}
                        style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <Image
                            source={require('../../../components/Assets/documents/tile_view.png')}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>
                }
            </View>
        }
    }
    componentDidMount() {
        //     let loggedInUser = global.x ? 'patient' : 'physician';
        //    // this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        //         this.props.navigation.navigate('Emergency', { loggedInUser})
        //         EventRegister.emit('sideMenuClickedEvent', 'documents')
        // this.props.navigation.navigate('DrawerOpen');
        //  return true;

        //   //  });
    }
    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut()
    }
    componentWillUnmount() {
        //this.backHandler.remove();
    }

    constructor(props) {
        super(props)
        this.state = {
            documentList: documentListJson,
            showSectionList: false,
            picker: false,
            loggedInUser: this.props.navigation.state.params ? this.props.navigation.state.params.loggedInUser : '',

        }
        this.props.navigation.setParams({
            onListIconClicked: this.onListIconClicked.bind(this),
            onTileIconClicked: this.onTileIconClicked.bind(this),
            showSectionList: false
        })
    }

    onListIconClicked() {
        this.props.navigation.setParams({
            showSectionList: true
        })
        this.setState({
            showSectionList: true
        })
    }

    onTileIconClicked() {
        this.props.navigation.setParams({
            showSectionList: false
        })
        this.setState({
            showSectionList: false
        })
    }
    openPicker = () => {
        this.setState({ picker: true })
    }

    render() {
        let documentList = this.state.documentList;
        let showSectionList = this.state.showSectionList;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {
                    !showSectionList && <FlatList
                        style={{ margin: 10 }}
                        data={documentList}
                        renderItem={this.renderItem}
                    />
                }
                {
                    showSectionList && <SectionList
                        renderItem={({ item, index, section }) => {
                            return (
                                <View style={{ flex: 1, flexDirection: 'row', margin: 5 }}>
                                    <Image
                                        style={{ marginLeft: 5, marginRight: 5, resizeMode: 'cover', width: 50, height: 50, alignSelf: 'flex-start' }}
                                        source={this.getImageIcon(item.imageIcon)} />
                                    <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 5, marginLeft: 5, marginRight: 5, flex: 1, alignSelf: 'flex-start' }}>
                                        <Text
                                            style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 18, color: colorUtils.THEME_COLOR }}
                                            numberOfLines={1}
                                            ellipsizeMode='tail'>
                                            {item.attachmentTitle}
                                        </Text>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text
                                                style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 16, color: 'grey' }}>
                                                22/04/2018 05:19 PM
                                            </Text>
                                            <Text style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 16, color: 'grey', position: 'absolute', end: 0 }}>
                                                By Ellen C. Henry
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                        renderSectionHeader={({ section: { title } }) => (
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text
                                    style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 24, color: '#000', paddingTop: 5, paddingBottom: 5, }}>
                                    {title}
                                </Text>
                            </View>
                        )}
                        sections={documentList}
                        keyExtractor={(item, index) => item + index}
                    />
                }
                <TouchableOpacity style={{ position: 'absolute', end: 0, bottom: 0, margin: 16, width: 56, height: 56 }}
                    onPress={() => this.openPicker()}>
                    <Image
                        style={{ position: 'absolute', alignSelf: 'center', margin: 16, marginTop: 0, width: 56, height: 56, justifyContent: 'flex-start' }}
                        source={require('../../../components/Assets/common/add_icon.png')}
                    />
                </TouchableOpacity>
                {this.state.picker && <View style={styles.renderViewStyle}>
                    <View style={{ height: 200, backgroundColor: '#fff' }}>
                        <View style={{ right: 0, alignSelf: 'flex-end', padding: 5 }}>
                            <TouchableOpacity onPress={() => this.setState({ picker: false })}>
                                <Text style={{ fontSize: 20 }}>close</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={[
                                "Camera",
                                "Phone Library",
                                "Carelanes Documents"
                            ]}
                            renderItem={({ item }) =>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={() => {
                                        this.setState({ picker: false })
                                        if (item == 'Camera') {
                                            this.callImagePicker();
                                        }
                                    }}>
                                    <Text style={styles.pickerDataStyle}>{item}</Text>
                                </TouchableOpacity>
                            }
                        />
                    </View>
                </View>
                }
            </View>
        )
    }

    callImagePicker = () => {
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                let navigation = this.props.navigation
                navigation.navigate('customAddLegalDocument', {
                    location: response.uri,
                    filename: response.filename,
                    iosPath: response.uri,
                    comingFromDocument: true
                })
            }
        });
    }

    renderItem = (item) => {
        let doc = item.item
        return (
            <View style={{ flex: 1 }}>

                <Text
                    style={{ fontFamily: fontUtils.FONT_FAMILY, fontSize: 22, fontWeight: 'bold', color: colorUtils.THEME_COLOR, paddingTop: 5, paddingBottom: 5, }}>
                    {doc.title}
                </Text>
                <FlatList
                    numColumns={4}
                    data={doc.data}
                    renderItem={this.renderDocs}
                />
            </View>
        )
    }

    renderDocs = (item) => {
        let data = item.item
        return (
            <View style={{ flex: 1 }}>
                <Image
                    style={{ marginLeft: 5, marginRight: 5, resizeMode: 'cover', width: 85, height: 85, alignSelf: 'flex-start' }}
                    source={this.getImageIcon(data.imageIcon)} />
                <Text
                    style={{ paddingTop: 5, paddingBottom: 5, marginLeft: 5, marginRight: 5, fontFamily: fontUtils.FONT_FAMILY, fontSize: 16, color: '#000' }}
                    numberOfLines={1}
                    ellipsizeMode='tail'>
                    {data.attachmentTitle}
                </Text>
            </View>
        )
    }

    getImageIcon = (imageIcon) => {
        if (imageIcon == 'pdf') {
            return require('./pdf.png')
        } else if (imageIcon == 'doc') {
            return require('./doc.png')
        } else if (imageIcon == 'doctor') {
            return require('./doctor.png')
        } else if (imageIcon == 'xray') {
            return require('./xray_1.png')
        } else if (imageIcon == 'sugar_test') {
            return require('./sugar_test.png')
        }
    }
}
const styles = {
    renderViewStyle: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        height: '100%',
        justifyContent: 'flex-end',
    },
    pickerContainer: {
        backgroundColor: 'red',
    },
    pickerStyle: {
        width: '100%',
        marginTop: -20
    },
    pickerDataStyle: {
        fontSize: 22,
        color: '#000',
        margin: 10
    }
}