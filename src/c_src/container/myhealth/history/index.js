import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    Switch
} from 'react-native';
import style from './style';
var flatListData = require('./insurance.historylist.json')
import { FONT_FAMILY } from '../../../components/utils/fontUtils';

export default class History extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listdata: flatListData,
        }
    }

    render() {
        return (
            <View style={style.containerStyle}>
                <FlatList
                    renderItem={({ item }) => {
                        return <View style={style.itemStyle}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={style.titleStyle}>{item.title}</Text>
                                <Text style={style.titleStyle}>PPO</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={style.leftSideTitleStyle}>Member ID</Text>
                                <Text style={style.memberIDValueStyle}>{item.memberId}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={style.leftSideTitleStyle}>Group ID</Text>
                                <Text style={style.rightSideValueStyle}>{item.groupId}</Text>
                                <Image
                                    style={{ width: 30, height: 30, alignSelf: 'center', marginRight: 7 }}
                                    source={require('../../../components/Assets/hospitals/hospitalUnCheck.png')} />
                            </View>

                            <View
                                style={{
                                    height: 1,
                                    width: "98%",
                                    backgroundColor: "lightgrey",
                                    margin: 5
                                }}
                            />

                            <View style={{ flexDirection: 'row'}}>
                                <Text style={style.leftSideTitleStyle}>Validity</Text>
                                <Text style={style.validityValueStyle}>{item.validity}</Text>
                            </View>
                        </View>
                    }}
                    backgroundColor={'#EEEEEE'}
                    data={this.state.listdata}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        )
    }
}