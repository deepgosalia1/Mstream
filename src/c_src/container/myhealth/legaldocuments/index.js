import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import Style from './style';
var legalDocsJSON = require('./legaldocs.list.json')
export default class LegalDocuments extends Component {

    constructor(props) {
        super(props)
        this.state = {
            legaldocs:legalDocsJSON,
        }
        this.props.navigation.setParams({
            onExportClick:this.exportButtonClicked.bind(this),
        })
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let showSectionList = params.showSectionList;
        return {
            headerRight: <View>
              <TouchableOpacity
                        onPress={params.onExportClick}
                        style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <Text>Export</Text>
                    </TouchableOpacity>
            </View>
        }
    }
    exportButtonClicked(){

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

        let legalDocsArray = [
            require('./legaldoc1.png'),
            require('./legaldoc2.png'),
            require('./legaldoc1.png'),
            require('./legaldoc2.png'),
            require('./legaldoc1.png')
        ]
        return (
            <View style={Style.containerStyle}>
                 <FlatList
                    renderItem={({ item }) => {
                        return <View style={Style.itemStyle}>
                                <Image style={Style.docIconStyle} source={legalDocsArray[item.id]}/>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={Style.docTitileStyle}>{item.title}</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text style={Style.docDateTimeStyle}>{item.date}</Text>
                                        <Text style={Style.docByStyle}>{item.documentBy}</Text>
                                    </View>
                                </View>
                        </View>
                    }}
                    backgroundColor={'white'}
                    data={this.state.legaldocs}
                    sections={this.state.notesJSON}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    keyExtractor={(item, index) => item + index}
                  />
                
                <TouchableOpacity
                    style={{ position: 'absolute', end: 0, bottom: 0, }}
                    onPress={() => { this.props.navigation.navigate('addLegalDocument')}}>
                    <Image
                        style={{ width: 56, height: 56, margin: 20 }}
                        source={require('../../../components/Assets/common/add_icon.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}