import React, { Component } from 'react';
import {
    CameraRoll,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput,
    Alert,
    Platform,
    ScrollView,
    Keyboard,
    ToastAndroid,
    BackHandler,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import Style from './style';
import SQLite from 'react-native-sqlite-2';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as fontUtils from '../../../components/utils/fontUtils';
import * as colorUtils from '../../../components/utils/colorUtils';
import { EventRegister } from 'react-native-event-listeners'
import { Icon, Toast } from 'native-base';
import CustomPicker from '../../../components/customcomponents/custompicker';
import CustomTextInput from '../../../components/customcomponents/customtextinput';
var ImagePicker = require('react-native-image-picker')
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
var pickerOptions = [{
    "text": "Untitled",
    "value": "Untitled"
},
{
    "text": "All",
    "value": "All"
},
{
    "text": "Physician",
    "value": "Physician"
},
{
    "text": "Patient",
    "value": "Patient"
}]
let loopval, temp;
var source, name;
var tempPhotoArray = []
let db
const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : -200

export default class CustomAddLegalDocuments extends Component {

    constructor(props) {
        super(props)
        date = new Date(),
            this.Imagename = '' + date.getFullYear() + date.getMonth() + date.getDate() + "-" + date.getHours() + date.getMinutes() + date.getSeconds() + ".jpg",

            this.state = {
                selectedImage: '',
                location: [],
                filename: 'Untitled_' + this.Imagename.split('.')[0],
                nameInput: '',
                photoArray: [],
                incomingUntitled: '',
                incomingPatient: '',
                incomingPhysician: '',
                incomingAll: '',
                selectedObject: '',
                loggedInUser: this.props.navigation.state.params ? this.props.navigation.state.params.loggedInUser : '',
                folderName: 'Untitled',
                comingFromDocument: false

            }
        props.navigation.setParams(({ picker: false, header: 'Untitled' }))

    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerLeft: <Icon type='Ionicons' name={Platform.OS == 'ios' ? "ios-arrow-back" : "arrow-back"} style={{ marginLeft: 8, fontSize: 30, color: '#3a3a3a', paddingLeft: 10, paddingRight: 10 }} onPress={() => {
                ImagePicker.launchCamera(options, (response) => {
                    if (response.didCancel) {
                        console.log('User cancelled image picker');
                    } else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                    } else {
                        navigation.navigate('customAddLegalDocument', {
                            location: response.uri,
                            filename: response.filename,
                            iosPath: response.uri,
                            iosUrl: response.uri
                        })
                    }
                });
            }} />,
            headerRight: <TouchableOpacity onPress={params.handleSave}>
                <Text style={{ color: '#3a3a3a', fontSize: 18, marginRight: 10 }}>Save</Text>
            </TouchableOpacity>,

            headerTitle: <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 5 }} onPress={() => {
                Keyboard.dismiss
                navigation.setParams({ picker: true })
            }}>
                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', width: '35%' }}>
                    <Text style={{ color: colorUtils.THEME_COLOR, alignSelf: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 18, marginTop: 5, flex: 1 }}>{params.header || 'Untitled'}</Text>
                    <Image source={require('../../../components/Assets/Picker/down.png')} style={{ width: 20, height: 20, marginTop: 10, alignSelf: 'center', justifyContent: 'center' }} />
                </View>
            </TouchableOpacity>
        }
    }
    componentDidMount() {
        console.log('didmount started')
        this.setState({ comingFromDocument: this.props.navigation.state.params.comingFromDocument })
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (this.state.comingFromDocument == true) {
                this.props.navigation.navigate('documents')
                return true;
            } else {
                this.props.navigation.navigate('Emergency', { login: this.props.navigation.state.params.logInUser })
                return true;
            }
        })
        temp = this.props.navigation.state.params.location
        this.DatabaseActivity(temp)
        this.getAllUntitledImages();
        this.props.navigation.setParams({
            togglePicker: this.togglePicker.bind(this),
            setValue: this.setValue.bind(this),
            handleSave: this.handleSave.bind(this),
        })
    }
    DatabaseActivity(temp) {
        console.log("database activity started")
        db = SQLite.openDatabase('Photos.db', '1.0', '', 1);
        db.transaction(function (txn) {
            txn.executeSql('CREATE TABLE IF NOT EXISTS IMAGES(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30), val VARCHAR(30))', []);
            txn.executeSql('INSERT INTO IMAGES (name, val) VALUES (:name, :val)', ['Untitled', temp]);
            txn.executeSql('SELECT * FROM `IMAGES`', [], function (tx, res) {
                for (let i = 0; i < res.rows.length; ++i) {
                    console.log('item:', res.rows.item(i));
                }
            });
        });
    }
    handleSave() {
        let folderName = this.state.folderName;
        let filename = this.state.filename;
        if (filename.length == 0) {
            alert('Please enter file name')
        } else {
            let selectedObject = this.state.selectedObject;
            db.transaction(function (txn) {
                txn.executeSql('UPDATE IMAGES SET name=?,  WHERE id=?', [folderName, selectedObject.id])
            })
            if (this.state.comingFromDocument == true) {
                this.props.navigation.navigate('documents')
                return true;
            } else {
                this.props.navigation.navigate('Emergency', { login: this.props.navigation.state.params.logInUser })
            }
        }
    }
    getAllUntitledImages() {
        var data = []
        db.transaction(function (txn) {
            txn.executeSql('SELECT * FROM `IMAGES` WHERE name="Untitled" ORDER BY `user_id` DESC', [], (tx, res) => {
                let results = res;
                console.log('results for row', results)
                console.log('rows resultssss', results.rows)
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    console.log('Rowssss', row.val)
                    data.push(row.val)
                }
            })
        })
        this.setState({
            photoArray: data
        }, () => {
            setTimeout(() => {
                this.SetImageView(data[0], 0)
            }, 1000);
        })

    }
    componentWillUnmount() {
        this.backHandler.remove();
    }
    togglePicker = () => {
        this.props.navigation.setParams({
            picker: false
        })
    }
    SetImageView = (p, index) => {
        console.log('started to set image view')
        this.setState({
            selectedImage: p,
            selectedObject: index
        })
    }
    errorCB(err) {
        console.log("SQL Error: " + err);
    }
    successCB() {
        console.log("executed Fine");
    }
    openCB() {
        console.log("DB Opened");
    }
    setTextValue = (text) => {
        this.setState({
            filename: text
        })
    }
    setValue = (text) => {
        this.props.navigation.setParams({
            header: text
        })
        this.setState({
            folderName: text
        })
        this.setState({
            filename: text + '_' + this.Imagename.split('.')[0],
        })
        //  if (text != 'Untitled') {
        //     console.log('Temp Variable dsfdsafsda', temp)
        //     db.executeSql('SELECT * FROM IMAGES WHERE name=?', [text], (rs) => {
        //         let results = rs;
        //         console.log('results for row', results)
        //         console.log('rows resultssss', results.rows)
        //         var len = results.rows.length;
        //         var data = []
        //         for (let i = 0; i < len; i++) {
        //             let row = results.rows.item(i);
        //             console.log('Rowssss', row)
        //             data.push(row)
        //             // this.updateProgress(`Empl Name: ${row.name}, Dept Name: ${row.deptName}`)
        //         }
        //         console.log('dataaaaaa', data)
        //         this.setState({
        //             photoArray: data
        //         })
        //     })
        // } 
    }
    render() {
        console.log('main render started')
        console.log(this.state.photoArray)
        let dimensions = Dimensions.get('window');
        let imageHeight = dimensions.height * 0.60;
        return (

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <KeyboardAwareScrollView
                    scrollEnabled={false}
                    style={Style.containerStyle}>

                    <Image style={{ margin: 10, height: imageHeight, backgroundColor: 'transparent', width: '95%', borderColor: 'gray', borderWidth: 1 }}
                        source={{ uri: this.state.selectedImage }}
                    />
                    <View style={{ flexDirection: 'column', marginBottom: 10 }}>
                        <CustomTextInput
                            placeholder={'Enter file Name'}
                            value={this.state.filename}
                            textCallback={(text) => {
                                this.setState({
                                    filename: text
                                })
                            }}
                            imageSource={require('../../../components/Assets/common/tag.png')}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 5, marginRight: 5 }}>
                        <TouchableOpacity onPress={() => {
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
                                        iosUrl: response.uri
                                    })
                                }
                            });
                        }} >
                            <View style={{ borderWidth: 1, borderColor: '#000' }}>
                                <Image style={{ height: 80, width: 80, margin: 10 }} source={require('../../../components/Assets/common/add_icon.png')} />
                            </View>
                        </TouchableOpacity>

                        <ScrollView horizontal={true}>
                            {this.state.photoArray.map((p, i) => {
                                return (
                                    <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => {
                                        console.log('p is going to get attached')
                                        console.log(p)
                                        this.SetImageView(p, i)
                                    }}>
                                        <Image
                                            key={i}
                                            style={{
                                                width: 100,
                                                height: 100,
                                            }}
                                            source={{ uri: p }}
                                        />
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>
                    {
                        this.props.navigation.state.params ? this.props.navigation.state.params.picker &&
                            <CustomPicker
                                pickerData={pickerOptions}
                                togglePicker={this.togglePicker}
                                setValue={this.setValue}
                                selectedValue={this.props.navigation.state.params.header}

                            /> : console.log('Waiting for params')
                    }
                </KeyboardAwareScrollView>
            </TouchableWithoutFeedback>

        )
    }
}