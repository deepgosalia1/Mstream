import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import Style from './style';
import { THEME_COLOR } from '../../../components/utils/colorUtils';

const PatientData = (props) => {
    return (
        <FlatList
            data={props.data}
            renderItem={({ item }) =>
                <TouchableOpacity
                    style={Style.laneView}
                    onPress={() => { 
                        props.changeName(item.name, item.address)
                    }}
                >
                    <View style={{ flexDirection: 'column' }}>
                        <Image style={Style.sideImage} source={require('../../../components/Assets/CriticialAlerts/critical_profile.png')} />
                    </View>
                    <View style={{ flexDirection: 'column',flex:1,width:null}}>
                        <Text style={Style.physicianNameStyle}>{item.name}</Text>
                        <View style={{flexDirection:'row',width:'100%',height:23}}>
                            <Text style={Style.specializationStyle}>{item.specialization}</Text>
                            <View style={{
                                alignItems:'center',
                                alignSelf:'flex-end',
                                backgroundColor:'#c4ede7',
                                width:30,
                                height:25,
                                justifyContent:'flex-end',
                                flex:1,
                                padding:5
                                //right:10
                                //marginRight:-50
                                //marginBottom:13
                                }}><Text style={{justifyContent:'center',alignSelf:'center',flexDirection:'column',color:THEME_COLOR,fontWeight:'bold'}}>{item.distance}</Text></View>
                        </View>
                        <Text style={Style.addressStyle}>{item.address} {item.pincode}</Text>
                    </View>
                </TouchableOpacity>
                // <View style={Style.flatListContainerStyle}>
                //     <Image
                //         source={require('../../../components/Assets/CriticialAlerts/critical_profile.png')}
                //         style={Style.memberImageStyle}
                //     />
                //     <View style={Style.memberDataStyle}>
                //         <Text style={Style.memberNameStyle}> {item.name} </Text>
                //         <Text> {item.relation} </Text>
                //     </View>
                // </View>
            }
        />

    );
}

export default PatientData;
