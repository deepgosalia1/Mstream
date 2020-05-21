import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import Style from './style';
var flatListData = require('./alergies.list.json')
export default class Alergies extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listdata: flatListData,
            showDeleteIcon: false,
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({
            onEditClicked: this.onEditClicked.bind(this),
            onDoneClicked: this.onDoneClicked.bind(this),
            showEdit: true,
            showDone: false
        });
    }
    onDoneClicked() {
        this.props.navigation.setParams({
            showEdit: true,
            showDone: false
        });
        this.setState({
            showDeleteIcon: false
        })
    }

    onEditClicked() {
        this.setState({
            showDeleteIcon: true
        })
        this.props.navigation.setParams({
            showEdit: false,
            showDone: true,
        });
    }
    getDeleteImage(item) {
        switch (item.showDelete) {
            case "DELETE_ICON":
                if (this.state.showDeleteIcon) {
                    return require('../../../components/Assets/Status/delete.png')
                }
                break;
        }
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let showEdit = params.showEdit;
        let showDone = params.showDone;
        return {
            headerRight: <View>
                {
                    showEdit && <TouchableOpacity
                        style={{ paddingLeft: 10, paddingRight: 10 }}
                        onPress={params.onEditClicked}>
                        <Text style={{color:'#3E3E3E', fontWeight:'500', fontSize:18 }}>Edit</Text>
                    </TouchableOpacity>
                }
                {
                    showDone && <TouchableOpacity
                        style={{ paddingLeft: 10, paddingRight: 10 }}
                        onPress={params.onDoneClicked}>
                        <Text style={{color:'#3E3E3E', fontWeight:'500', fontSize:18 }}>Done</Text>
                    </TouchableOpacity>
                }
            </View>

        }
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


    render() {
        //#f5f5f5
        return (
            <View style={Style.containerStyle}>
                <FlatList
                    renderItem={({ item,index}) => {
                        return <View style={Style.itemStyle}>

                            {/* <View style={{ flexDirection: 'column',backgroundColor:item.id%2==0?'#f5f5f5':'#fff'}}>
                                <Text style={Style.docTitileStyle}>{item.title}</Text>
                                <View style={{flexDirection:'row',alignItems:'center'}}>

                                    {this.state.showDeleteIcon==true? <Image  key={index} style={{ width: 20, height: 20}} source={this.getDeleteImage(item)}></Image> :''}
                                    {
                                        item.showActive && <Text style={{backgroundColor:'#34ad66',margin:6,color:'white',width:50,height:20,textAlign:'center',fontSize:12}}>Active</Text>
                                    }
                                    {
                                        !item.showActive && <Text style={{backgroundColor:'#909090',margin:6,width:60,height:20,textAlign:'center',fontSize:12,color:'white'}}>In Active</Text>
                                    }
                                    <Text style={Style.docDateTimeStyle}>{item.date}</Text>
                                </View>
                            </View> */}

                             <View style={{flexDirection:'row'}}>
                            
                            {this.state.showDeleteIcon== true ? <Image  key={index} style={{ width:20, height:20, alignSelf:'center'}} source={this.getDeleteImage(item)}></Image> :null}
                            <View style={{ flexDirection: 'column', backgroundColor:'#fff',width:'100%'}}>
                                <Text style={Style.docTitileStyle}>{item.title}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    {
                                        item.showActive && <Text style={{ backgroundColor: '#149CB5', margin: 6, color: 'white', width: 50, height: 20, textAlign: 'center', fontSize: 12 }}>Active</Text>
                                    }
                                    {
                                        !item.showActive && <Text style={{ backgroundColor: '#909090', margin: 6, width: 60, height: 20, textAlign: 'center', fontSize: 12, color: 'white' }}>In Active</Text>
                                    }
                                    <Text style={Style.docDateTimeStyle}>{item.date}</Text>
                                </View>
                            </View>
                    </View>
                        </View>
                    }}
                    backgroundColor={'white'}
                    data={this.state.listdata}
                    extraData={this.state}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    keyExtractor={(item, index) => item + index}
                />

                <TouchableOpacity
                    style={{ position: 'absolute', end: 0, bottom: 0, }}
                    onPress={() => {this.props.navigation.navigate('addAlergies')}}>
                    <Image
                        style={{ width: 56, height: 56, margin: 20 }}
                        source={require('../../../components/Assets/common/add_icon.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}