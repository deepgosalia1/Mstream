import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import Style from './style';
var healthDataJSON = require('./healthdata.list.json')
export default class LegalDocuments extends Component {

    constructor(props) {
        super(props)
        this.state = {
            healthData:healthDataJSON,
        }
        this.props.navigation.setParams({
            onSettingsClick:this.settingsButtonClick.bind(this),
        })
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight: <View>
              <TouchableOpacity
                        onPress={params.onSettingsClick}
                        style={{ paddingLeft: 10, paddingRight: 10 }}>
                        {/* <Text style={{color:'white'}}>Settings</Text> */}
                        <Image style={{width:30,height:30}} source={require('./settings_health.png')}/>
                    </TouchableOpacity>
            </View>
        }
    }
    settingsButtonClick(){
        this.props.navigation.navigate('healthSettings')
    } 
    getItemStartText(item){
        switch (item.id) {
            case 0:
                return '8,200';
                break;
                case 1:
                return '130/80';
                break;
                case 2:
                return '8 Hours';
                break;
                case 3:
                return '130/80';
                break;
                case 4:
                return '100° F';
                break;
                case 5:
                return '65 KG';
                break;
            default:
                break;
        }
    } 
    getItemStartBelowText(item){
        switch (item.id) {
            case 0:
                return 'Steps';
                break;
                case 1:
                return 'Systolic';
                break;
                case 2:
                return 'Duration';
                break;
                case 3:
                return 'Glucose';
                break;
                case 4:
                return 'Temparature';
                break;
                case 5:
                return 'Weight';
                break;
            default:
                break;
        }
    } 

    getItemSecondStartText(item){
        switch (item.id) {
            case 0:
                return '10.3 KM';
                break;
                case 1:
                return '100';
                break;
                case 2:
                return '';
                break;
                case 3:
                return '6.30 AM';
                break;
                case 4:
                return '4:27 AM';
                break;
                case 5:
                return '165 cm';
                break;
            default:
                break;
        }
    } 

    getItemSecondBelowText(item){
        switch (item.id) {
            case 0:
                return 'Distance';
                break;
                case 1:
                return 'Pulse';
                break;
                case 2:
                return '';
                break;
                case 3:
                return 'Meal Time';
                break;
                case 4:
                return 'Time';
                break;
                case 5:
                return 'Height';
                break;
            default:
                break;
        }
    } 
    render() {

        let healthDataArray = [
            require('./myactivity.png'),
            require('./bloodpreasure.png'),
            require('./sleep.png'),
            require('./bloodglucose.png'),
            require('./bodytemp.png'),
            require('./bodymas.png')
        ]
        return (
            <View style={Style.containerStyle}>
                 <FlatList
                    renderItem={({ item }) => {
                        return <View style={Style.itemStyle}>
                                <View style={{flexDirection:'column'}}>
                                    <Image style={Style.docIconStyle} source={healthDataArray[item.id]}/>
                                    <Text style={Style.itemTitleStyle}>{item.title}</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'column'}}>
                                            <Text style={Style.itemStartTextStyle}>{this.getItemStartText(item)}</Text>
                                            <Text style={Style.itemStartBelowText}>{this.getItemStartBelowText(item)}</Text>
                                        </View>


                                        <View style={{flexDirection:'column'}}>
                                            <Text style={Style.itemStartTextStyle}>{this.getItemSecondStartText(item)}</Text>
                                            <Text style={Style.itemStartBelowText}>{this.getItemSecondBelowText(item)}</Text>
                                        </View>
                                    </View>
                                </View>
                        </View>
                    }}
                    backgroundColor={'#ebe9f1'}
                    data={this.state.healthData}
                    numColumns={2}
                    keyExtractor={(item, index) => item + index}
                  />
                
            </View>
        )
    }
}