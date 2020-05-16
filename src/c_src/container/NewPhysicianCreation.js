import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput,  
    Image
} from 'react-native'

import newPhysicianJSON from '../components/Assets/json/newphysician.create.json'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomScrollView from '../components/Custom components/CustomSrollview'
import * as colorUtils from '../components/utils/colorUtils';
import * as fontUtils from '../components/utils/fontUtils';


class NewPhysicianCreation extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '',
        tabBarLabel: '',
    })

    _onRef = (property, view) => {
        this[property] = view
    }
    // 
    _scrollIntoView = (ref, height, action) => {
        if (this._scroll) this._scroll.scrollIntoView(ref, height, action)
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    marginLeft:15,
                    marginRight:15,
                    width: "90%",
                    backgroundColor: "trasparent",
                }}
            />
        );
    }
    
    render() {

        let images = [
                require('../components/Assets/AddPhysician/physician_name_icon.png'),
                require('../components/Assets/AddPhysician/physician_name_icon.png'),
                require('../components/Assets/AddPhysician/specicality_icon.png'),
                require('../components/Assets/AddPhysician/hospital_icon.png'),
                require('../components/Assets/AddPhysician/address_icon.png'),
                require('../components/Assets/AddPhysician/country_icon.png'),
                require('../components/Assets/AddPhysician/address_icon.png'),
                require('../components/Assets/AddPhysician/address_icon.png'),
                require('../components/Assets/AddPhysician/email_icon.png'),
                require('../components/Assets/AddPhysician/phone_icon.png'),
                require('../components/Assets/AddPhysician/phone2_icon.png'),
                require('../components/Assets/AddPhysician/skypee.png'),
                require('../components/Assets/AddPhysician/slackk.png'),
            ];
        return (
            <View style={styles.containterStyle}>
                <CustomScrollView
                    style={{ backgroundColor: '#fff' }}
                    ref={scroll => this._onRef('_scroll', scroll)}>

                     <FlatList
                    data={newPhysicianJSON}
                    ListHeaderComponent={this.getListHeaderComponent}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item }) => (

                        <View style={styles.formItemViewStyle}>
                            {/* <Text style={styles.formTextStyle}>{item.title}</Text> */}
                            <Image style={{width:30,height:30,alignSelf:'center'}} source={images[item.id]} />
                            <TextInput style={styles.formInputTextStyle}>{item.input}</TextInput>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
                </CustomScrollView>
            </View>
        )
    }
    

}

export default NewPhysicianCreation

const styles = StyleSheet.create({
    containterStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    formItemViewStyle: {
        flexDirection: 'row',
        height: 40,
        width:'80%',
        //padding:5,
        backgroundColor:'white',
        margin:15
    },
    formTextStyle: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 18
    },
    formInputTextStyle: {
        color: 'gray',
        fontWeight: '500',
        fontSize: 24,
        borderBottomColor:'darkgray',
        borderBottomWidth:1,
        width:'95%',
        marginLeft:15,
        fontFamily:fontUtils.FONT_FAMILY,
        fontStyle: fontUtils.FONT_STYLE
    }
})
