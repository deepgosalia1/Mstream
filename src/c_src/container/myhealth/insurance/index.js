import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    Switch,
    TouchableOpacity
} from 'react-native';
//import Style from './style';
var flatListData = require('./insurance.currentlist.json')

import { FONT_FAMILY } from '../../../components/utils/fontUtils';

export default class Insurance extends Component {

    constructor(props) {
        super(props)
       this.state={
          listdata: flatListData,
       }
    }
    
    render() {
        return (
            <View style={{flexDirection:'column',backgroundColor:'#EEEEEE'}}>
                {/* <Text>Insurance Current Module</Text> */}
                <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#EEEEEE'}}>
                    <Image style={{width:175,height:100,margin:5}} source={require('./InsuranceAsset1.png')}/>
                    <Image style={{width:175,height:100,margin:5}} source={require('./InsuranceAsset2.png')}/>
                </View>
                <Text  style={{fontSize:20,fontFamily:FONT_FAMILY,fontWeight:'500',color:'#272727',margin:8}}>Blue Shield of California</Text>

                 <FlatList
                    renderItem={({ item }) => {
                        return <View style={{flexDirection:'row',padding:7,alignItems:'center'}}>
                            
                            <Text style={{fontSize:15,fontFamily:FONT_FAMILY,color:'#272727',flex:1,width:100}}>{item.title}</Text>
                            <Text style={{fontSize:15,fontFamily:FONT_FAMILY,color:'black',flex:1}}>{item.Value}</Text>
                        </View>
                    }}
                    backgroundColor={'#EEEEEE'}
                    data={this.state.listdata}
                    keyExtractor={(item, index) => item + index}
                />

                <TouchableOpacity
                    style={{ position: 'absolute', end: 0, bottom: 20 }}
                    onPress={() => {this.props.navigation.navigate('editInsurance')}}>
                    <Image
                        style={{ width:56, height:56, margin:20}}
                        source={require('../../../components/Assets/common/add_icon.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}