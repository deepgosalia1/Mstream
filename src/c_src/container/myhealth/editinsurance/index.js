import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput,
    Switch,
} from 'react-native';
import style from './style';
import CustomScrollView from '../../../components/Custom components/CustomSrollview';
export default class EditInsurance extends Component {

    constructor(props) {
        super(props)
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "lightgrey",
                }}
            />
        );
    }
    renderTextInputDivider = () => {
        return (
            <View
                style={{ width:'98%', marginLeft:13, marginRight: 5,marginTop:5,marginBottom:15, height:1, backgroundColor:'gray', alignSelf:'flex-end' }}>
            </View>
        )
    }
    renderSingleRow = (headerText,showArrow) => {
        return (
            <View style={{ flexDirection:'column',marginLeft:13,marginRight:13,marginTop:3}}>
                <Text style={style.headerTextStyle}>{headerText}</Text>
                <TextInput
                    placeholder={''}
                    multiline={false}
                    //numberOfLines={numberOfLines}
                    fontSize={15}
                    underlineColorAndroid='transparent'
                    style={style.textInputStyles} />
                    {showArrow && <Image
                            style={{ position: 'absolute', end: 0, width: 16, height: 16, marginRight: 10, alignSelf: 'center' }}
                            source={require('../../../components/Assets/calendar/arrow_down_icon.png')}/>}
                 {this.renderTextInputDivider()}
            </View>

        )
    }
    renderSingleRowWithSwitchItem = (headerText) => {
        return (
            <View style={{ flexDirection:'row',marginLeft:12,marginRight:13,marginBottom:5,alignItems:'center'}}>
                <Text style={style.headerTextStyle}>{headerText}</Text>
                <Switch style={{margin:10}}></Switch>
            </View>
        )
    }
    renderSingleRowWithDoubleItems=(title1,title2,isMultiLinesEnable) =>{
        return (
            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:13,marginRight:13}}>
                <View style={{flexDirection:'column',backgroundColor:'',width:167}}>
                    <Text style={style.headerTextStyle}>{title1}</Text>
                    <TextInput
                    placeholder={''}
                    multiline={isMultiLinesEnable}
                    //numberOfLines={noOfMultiLines}
                    fontSize={15}
                    underlineColorAndroid='transparent'
                    style={style.textInputStyles} />
                 {this.renderTextInputDivider()}
                </View>

                <View style={{flexDirection:'column',backgroundColor:'',width:167}}>
                <Text style={style.headerTextStyle}>{title2}</Text>
                <TextInput
                    placeholder={''}
                    multiline={isMultiLinesEnable}
                    //numberOfLines={noOfMultiLines}
                    fontSize={15}
                    underlineColorAndroid='transparent'
                    style={style.textInputStyles} />
                 {this.renderTextInputDivider()}
                </View>
            </View>
        )
    }
    render() {
        return (
            <CustomScrollView>
                <View style={style.containerStyle}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <Image style={style.topUploadButtonStyle} source={require('./cardfrontsideupload.png')} />
                        <Image style={style.topUploadButtonStyle} source={require('./cardbacksideupload.png')} />
                    </View>

                    {this.renderSingleRow('Provider',false)}

                    {this.renderSingleRow('Member',false)}

                    {this.renderSingleRowWithDoubleItems('Member ID','Group ID',false)}

                    {this.renderSingleRow('PlanType',true)}

                    {this.renderSingleRowWithDoubleItems('Primary Care','Specialist',false)}

                    {this.renderSingleRowWithSwitchItem('RX')}

                    {this.renderSingleRowWithDoubleItems('RXBIN','RXPCN')}

                    {this.renderSingleRow('Web',false)}
                    
                    {this.renderSingleRow('Email',false)}

                    {this.renderSingleRow('Customer Service',false)}
                </View>
            </CustomScrollView>
        )
    }
}