
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TextInput
} from 'react-native';
import * as colorUtils from '../components/utils/colorUtils'
import editProfileJSON from '../components/Assets/json/editprofile.list.json'

export default class EditProfile extends React.Component {

    getListHeaderComponent() {
        return (
            <View style={{ backgroundColor: '#fff', padding: 15, alignSelf: 'center' }}>
                <Image
                    style={{ marginTop: 10, width: 120, height: 120 }}
                    source={require('../components/Assets/CriticialAlerts/critical_profile.png')} />
            </View>
        )
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    marginLeft:15,
                    marginRight:15,
                    width: "90%",
                    backgroundColor: "lightgrey",
                }}
            />
        );
    }
    render() {
        return (
            <View style={styles.containterStyle}>
                <FlatList
                    data={editProfileJSON}
                    ListHeaderComponent={this.getListHeaderComponent}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item }) => (

                        <View style={styles.formItemViewStyle}>
                            <Text style={styles.formTextStyle}>{item.title}</Text>
                            <TextInput style={styles.formInputTextStyle}>{item.input}</TextInput>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    containterStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    formItemViewStyle: {
        flexDirection: 'column',
        height: 60,
        width:'90%',
        padding:5,
        backgroundColor:'white',
        marginLeft:15,
        marginRight:15,
        marginTop:6,
    },
    formTextStyle: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 18,
        //fontFamily: 'Montserrat',
    },
    formInputTextStyle: {
        color: colorUtils.THEME_COLOR,
        fontWeight: '500',
        marginTop:5,
        fontSize: 20,
        fontFamily: 'Montserrat',
        fontStyle: 'normal'
    }
})