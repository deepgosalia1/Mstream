import React from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';

import hospitalsJson from '../components/Assets/json/hospitals.list.json'
import { Item } from 'native-base';

export default class Hospitals extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data={hospitalsJson}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item }) => this.renderListItem(item)}
                />
            </View>
        );
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: "100%",
                    backgroundColor: "lightgrey",
                }}
            />
        );
    }
    renderListItem(item) {
        console.log('item', item)
        // let iconSource = require(item.icon_name);
        return (

            <View style={styles.hospitalContinerView}>

                <View style={styles.hospitalViewStyle}>
                    <Image
                        style={styles.hospitalIconStyle}
                        source={require('../components/Assets/General/man.png')} />
                    <View style={{
                        flexDirection: 'column', flex: 1,
                        justifyContent: 'center',
                        marginLeft: 5
                    }}>
                        <Text style={{ padding: 5, color: "#088D83", fontSize: 20 }}>{item.hospitalname}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.iconStyle}
                                source={require('../components/Assets/profile/location.png')} />
                            <Text style={{ padding: 5, color: "#000", fontSize: 16 }}>{item.location}</Text>
                        </View>
                    </View>

                    <Image
                        style={{ width: 30, height: 30, alignSelf: 'center', marginRight: 7 }}
                        source={require('../components/Assets/hospitals/hospitalUnCheck.png')} />
                </View>

                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "lightgrey",
                    }}
                />

                <View style={styles.itemBottonViewStyle}>
                    <Image
                        style={{ width: 35, height: 35, alignSelf: 'center', marginLeft: 10 }}
                        source={require('../components/Assets/profile/home_icon.png')} />
                    <View style={{ flexDirection: 'column', marginLeft: 5, alignSelf: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Phone</Text>
                        <Text style={styles.phoneStyle}>{item.phone}</Text>
                    </View>

                    <Image
                        style={{ width: 35, height: 35, alignSelf: 'center' }}
                        source={require('../components/Assets/profile/work_icon.png')} />
                    <View style={{ flexDirection: 'column', marginLeft: 5, alignSelf: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Email</Text>
                        <Text style={styles.phoneStyle}>{item.email}</Text>
                    </View>
                </View>
            </View>
        )
    }

    getListHeaderComponent() {
        return (
            <View>
                <View style={{ backgroundColor: '#fff', padding: 15, flexDirection: 'row' }}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../components/Assets/General/man.png')} />
                    <View style={{ paddingLeft: 15, flexDirection: 'column' }}>
                        <Text style={{ padding: 5, color: "#088D83", fontSize: 24 }}>Johns Hospkins Hospitals</Text>
                        <Text style={{ padding: 5, color: "#000" }}>Baltimore ,USA</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'grey' }}>
                        <Image
                            style={{ width: 36, height: 36, margin: 10, alignSelf: 'center' }}
                            source={require('../components/Assets/profile/home_icon.png')} />
                        <View style={{ paddingLeft: 5, flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ color: "#000", fontSize: 12 }}>Phone</Text>
                            <Text style={{ color: "#000" }}>(714) 666 66666</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'grey' }}>
                        <Image
                            style={{ width: 36, height: 36, margin: 10, alignSelf: 'center' }}
                            source={require('../components/Assets/profile/work_icon.png')} />
                        <View style={{ paddingLeft: 5, flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ color: "#000", fontSize: 12 }}>Email</Text>
                            <Text style={{ color: "#000" }}>johnssns@gmail.com</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: '#fff', padding: 15, margin: 10, alignItems: 'center' }}>
                    <Image
                        style={{ width: 36, height: 36, margin: 10 }}
                        source={require('../components/Assets/profile/hospital_icon.png')} />
                    <Text>Hospital</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'lightgrey'
    },
    hospitalContinerView: {
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        flexDirection: 'column'
    },
    hospitalViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    phoneStyle: {
        color: '#757575',
        fontSize: 14,
    },
    emailStyle: {
        color: '#757575',
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20
    },
    itemBottonViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        margin: 10
    },
    hospitalIconStyle: {
        width: 80,
        height: 80,
        margin: 15
    }
})