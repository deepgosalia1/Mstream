import React from 'react';
import { TextInput, View, Image, TouchableOpacity } from 'react-native';
import Style from './style';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.data = props.data;
    }

    render() {
        return (
            <View style={Style.smallContainerStyle}>
                <Image
                    source={require('../../../components/Assets/common/search_icon.png')}
                    style={Style.searchIconStyle}
                />
                <View style={Style.searchContainerStyle}>
                    <TextInput
                        style={Style.searchInputStyle}
                        underlineColorAndroid='transparent'
                        placeholder='Search'
                        placeholderTextColor='#888'
                        onChangeText={(text) => {
                            this.setState({ text });
                            this.props.search({ text });
                        }
                        }
                        value={this.state.text}
                    />
                    <TouchableOpacity onPress={() => {
                        this.props.toggleMap()
                        this.setState({
                            showMap: !this.state.showMap
                        });
                    }}>
                        <Image
                            source={
                                this.props.showMap ? require('../../../components/Assets/common/list_icon.png') : require('../../../components/Assets/common/map_icon.png') 
                            }
                            style={Style.searchButtonStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../../components/Assets/common/filter_icon.png')}
                            style={Style.searchButtonStyle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
