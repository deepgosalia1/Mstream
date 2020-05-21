import React, { Component } from 'react';
import {
    View,
    Text,
    SectionList,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import Style from './styles';
import * as fontUtils from '../../../components/utils/fontUtils';
import * as colorUtils from '../../../components/utils/colorUtils';

var notesListJSON = require('./notes.list.json')


export default class DocumentNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notesJSON: notesListJSON,
            showSectionList: true,
        }
        this.props.navigation.setParams({
            onListIconClicked: this.onListIconClicked.bind(this),
            onTileIconClicked: this.onTileIconClicked.bind(this),
            showSectionList: true
        })
    }

    componentDidMount() {
        this.props.navigation.setParams({
            returnData: this.returnData.bind(this)
        })
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let showSectionList = params.showSectionList;
        return {
            headerRight: <View>
                {
                    !showSectionList && <TouchableOpacity

                        onPress={params.onTileIconClicked}
                        style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <View style={{ width: 35, height: 35,alignItems:'center', backgroundColor: 'black' }}>
                            <Image
                                source={require('../../../components/Assets/documents/tile_view.png')}
                                style={{ marginTop:3,width: 28, height: 28 }}
                            />
                        </View>
                    </TouchableOpacity>
                }
                {
                    showSectionList && <TouchableOpacity
                        onPress={params.onListIconClicked}
                        style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <View style={{ width: 35, height: 35,alignItems:'center', backgroundColor: 'black' }}>
                            <Image
                                source={require('../../../components/Assets/documents/list_icon.png')}
                                style={{ marginTop:3, width: 28, height: 28 }}
                            />
                        </View>
                    </TouchableOpacity>
                }
            </View>
        }
    }
    onListIconClicked() {
        this.props.navigation.setParams({
            showSectionList: false
        })
        this.setState({
            showSectionList: false
        })
    }

    onTileIconClicked() {
        this.props.navigation.setParams({
            showSectionList: true
        })
        this.setState({
            showSectionList: true
        })
    }

    returnData(notesTitle, notesMess, noteIndex, sectionIndex) {
        if (noteIndex!=undefined && sectionIndex!=undefined) {
            notesListJSON[sectionIndex].data[noteIndex].notesMessage = notesMess
            notesListJSON[sectionIndex].data[noteIndex].notesTitle = notesTitle
        }
        else {
            notesListJSON[1].data.push({
                "notesTitle": notesTitle,
                "notesMessage": notesMess,
                "notedBy": "By Ellen C. Henry",
                "notedDate": "May 20,2018 10.00 PM"
            })
        }
        this.setState({ notesJSON: notesListJSON });
    }

    renderSectionItem = (item, index, title) => {
        var sectionIndex = notesListJSON.findIndex(obj => obj.title == title);
        let notesData = item
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('notesInput', { sectionIndex: sectionIndex, noteIndex: index, notesMessage: notesData.notesMessage, notesTitle: notesData.notesTitle, returnData: this.props.navigation.state.params.returnData })
                this.setState({ noteIndex: index })
            }}>
                <View style={Style.sectionItemStyle}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={Style.notesTitleStyle}>{notesData.notesTitle}</Text>
                        <Text numberOfLines={3} style={Style.notesInfoStyle}>{notesData.notesMessage}</Text>
                        <View
                            style={{
                                height: 1,
                                width: "95%",
                                backgroundColor: "#A09FA0",
                                margin: 5,
                            }}
                        />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={Style.noteDateStyle}>{notesData.notedDate}</Text>
                            <Text style={Style.notedByStyle}>{notesData.notedBy}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )

    }

    renderItem = (item) => {
        sectionIndex = 0
        let notesData = item.item
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('notesInput', { sectionIndex: sectionIndex, noteIndex: item.index, notesMessage: notesData.notesMessage, notesTitle: notesData.notesTitle, returnData: this.props.navigation.state.params.returnData })
                this.setState({ noteIndex: item.index })
            }}>
                <View style={Style.tilesItemStyle}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={Style.notesTitleStyle}>{notesData.notesTitle}</Text>
                        <Text numberOfLines={4} style={Style.notesInfoStyle}>{notesData.notesMessage}</Text>
                        <View
                            style={{
                                height: 1,
                                width: "95%",
                                backgroundColor: "#A09FA0",
                                margin: 5,
                            }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={Style.tilesNoteDateStyle}>{notesData.notedDate}</Text>
                            <Text style={Style.tilesNotedByStyle}>{notesData.notedBy}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    renderFlatListHeader() {
        return (
            <View style={Style.sectionTextStyle}>
                <Text style={{ fontSize: 20 }}>Apr,2018</Text>
            </View>
        )
    }
    renderFlatListFotter() {
        return (
            <View style={Style.sectionTextStyle}>
                <Text style={{ fontSize: 20 }}>May,2018</Text>
            </View>
        )
    }
    render() {

        //let documentList    = this.state.notesJSON;
        let showSectionList = this.state.showSectionList;

        return (
            <View style={Style.containerStyle}>

                {
                    !showSectionList && <FlatList
                        style={{ backgroundColor: '#fff' }}
                        data={[
                            {
                                "notesTitle": "My Important Findings",
                                "notesMessage": "Communicate in a new way with the S Pen. Create your own animated GIFs.",
                                "notedBy": "By Ellen C. Henry",
                                "notedDate": "Mar 18,2018 10.00 PM"
                            },
                            {
                                "notesTitle": "My Medicial Notes",
                                "notesMessage": "Communicate in a new way with the S Pen. Create your own animated GIFs.",
                                "notedBy": "By Kenth Rowly",
                                "notedDate": "Mar 22,2018 10.00 PM"
                            }
                        ]}
                        numColumns={2}
                        renderItem={
                            this.renderItem
                        }
                        ListHeaderComponent={this.renderFlatListHeader}
                    //ListFooterComponent={this.renderFlatListFotter}
                    />
                }
                {
                    showSectionList && <SectionList
                        renderItem={({ section: { title }, item, index }) => {
                            return this.renderSectionItem(item, index, title)
                        }}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={Style.sectionTextStyle}>
                                {title}
                            </Text>
                        )}
                        backgroundColor={'white'}
                        sections={this.state.notesJSON}
                        keyExtractor={(item, index) => item + index}
                    />

                }

                <TouchableOpacity
                    style={{ position: 'absolute', end: 0, bottom: 0, }}
                    onPress={() => { this.props.navigation.navigate('notesInput', { returnData: this.props.navigation.state.params.returnData }) }}>
                    <Image
                        style={{ width: 56, height: 56, margin: 20 }}
                        source={require('../../../components/Assets/common/add_icon.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}