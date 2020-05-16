import React from 'react'
import { TextInput, View, Image, TouchableOpacity, Text } from 'react-native'
import ChannelData from '../container/channeldata/ChannelData'
import SearchMenu from './SearchMenu'
var familymembers = require('../container/channeldata/channel.json')
import { StyleSheet } from 'react-native'
import { FONT_FAMILY } from '../components/utils/fontUtils'
import { THEME_COLOR } from '../components/utils/colorUtils'

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchdatastate: familymembers }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            search: this.search.bind(this),
        });
    }

    search(text) {
        {
            var searchdata = []
            familymembers.map((member) => {
                if (member.name.toLowerCase().indexOf(text.text.toLowerCase()) != -1) {
                    searchdata.push(member);
                }
            })
            this.setState({ searchdatastate: searchdata })
        }
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            header: <View style={{ backgroundColor: THEME_COLOR, paddingTop: 20, flexDirection: 'row' }}>
                <SearchMenu style={{ width: '80%', marginLeft: 20 }}
                    search={params.search} />
                <Text style={{ marginRight: 10, color: 'white', width: '20%', fontWeight: 'bold', fontSize: 20, FONT_FAMILY, paddingRight: 5, paddingTop: 5, paddingBottom: 5, alignSelf: 'center', }} onPress={() => navigation.goBack()}>Cancel</Text>
          </View>
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ChannelData
                    data={this.state.searchdatastate}
                />
            </View>
        );

    }


}

