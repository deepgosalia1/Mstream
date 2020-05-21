import React from 'react';
import { TextInput, View, Image, TouchableOpacity } from 'react-native';
import Style from './style';

export default class SearchBars extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text1: this.props.name, text2: this.props.location };
    }

    render() {
        return (
            <View>
                <View style={Style.smallContainerStyle}>
                    <Image
                        source={require('../../../components/Assets/common/search_icon.png')}
                        style={Style.searchIconStyle}
                    />
                    <View style={Style.searchContainerStyle}>
                        <TextInput
                            style={Style.searchInputStyle}
                            underlineColorAndroid='transparent'
                            placeholder='Patient Name'
                            placeholderTextColor='#888'
                            onChangeText={(text1) => {
                                this.setState({ text1 });
                            }
                            }
                            value={this.props.name}
                        />
                        <TouchableOpacity>
                            <Image
                                source={require('../../../components/Assets/common/filter_icon.png')}
                                style={Style.searchButtonStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Style.smallContainerStyle}>
                    <Image
                        source={require('../../../components/Assets/common/location_icon.png')}
                        style={Style.searchIconStyle}
                    />
                    <View style={Style.searchContainerStyle}>
                        <TextInput
                            style={Style.searchInputStyle}
                            underlineColorAndroid='transparent'
                            placeholder='Location'
                            placeholderTextColor='#888'
                            onChangeText={(text2) => {
                                this.setState({ text2 });
                            }
                            }
                            value={this.props.location}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
