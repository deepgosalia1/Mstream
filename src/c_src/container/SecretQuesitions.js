import React from 'React';
import {
    View,
    TextInput,
    Image,
    FlatList,
    Alert,
    Text,
} from 'react-native';

import { Icon } from 'native-base';


import questionsListJson from '../components/Assets/json/questions.list.json'

import * as colorUtils from '../components/utils/colorUtils'


export default class SecretQuestions extends React.Component {

    constructor(props) {
        super(props);
    }

    renderListItem(item) {
        <View style={{ backgroundColor: 'grey' }}></View>
    }

    questionbuttonclick(item) {
        Alert.alert('Question Clicked..' + item.id);
    }
    render() {
        return (
            <View style={{ flex: 1, padding: 10, backgroundColor: 'white' }}>

                <FlatList
                    data={questionsListJson}
                    //ItemSeparatorComponent={() => <View style={{ marginLeft: 10, width: '95%', height: 1, backgroundColor: 'grey' }} />}
                    renderItem={({ item }) => (
                        <View style={{ margin: 10 }}>
                            <View style={{ backgroundColor: 'transparent', flexDirection: 'row' }}>
                                <Text style={{ color: 'grey', fontSize: 20, fontWeight: 'bold', margin: 5,fontFamily:'Montserrat'}} onPress={this.questionbuttonclick.bind(this, item)}>{item.question}</Text>
                                <Icon name="md-arrow-dropdown" style={{ position: 'absolute', end: 0, alignSelf: 'center', width: 25, height: 25 }} />
                            </View>
                            <TextInput style={{ color: colorUtils.THEME_COLOR, fontSize: 20, fontWeight: '500', margin: 5, borderBottomWidth:1, paddingBottom:5,borderBottomColor:'lightgrey'}}>{item.answer}</TextInput>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}