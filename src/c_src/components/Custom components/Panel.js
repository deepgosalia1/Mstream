
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableHighlight,
    Platform,
    Animated,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
class Panel extends Component {
    constructor(props) {
        super(props);
        /* this.icons = {
            'up': require('../components/Assets/images/Arrowhead-01-128.png'),
            'down': require('../components/Assets/images/Arrowhead-Down-01-128.png')
        }; */
        this.icons = {
            'up': <Icon name='keyboard-arrow-up' />,
            'down': <Icon name='keyboard-arrow-down' />
        };
        this.state = {
            title: props.title,
            expanded: false,
            animation: new Animated.Value(),
        };
    }
    /*
        static propTypes = {
            panelStyle: PropTypes.object,
        }
        static defaultProps = {
            style: { backgroundColor: "white" },
        }
        */
    toggle() {
        let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    _setMaxHeight(event) {
        if (!this.state.maxHeight) {
            this.setState({
                maxHeight: event.nativeEvent.layout.height,
            });
        }
    }
    _setMinHeight(event) {
        if (!this.state.minHeight) {
            this.setState({
                minHeight: event.nativeEvent.layout.height,
                animation: new Animated.Value(event.nativeEvent.layout.height),
            });
        }
    }
    render() {
        let Icon;
        if (this.state.expanded) {
            Icon = this.icons['up'];
        } else {
            Icon = this.icons['down'];
        }
        return (
            <Animated.View
                style={[panelStyle.container, { height: this.state.animation }]}>
                <View style={panelStyle.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <TouchableOpacity
                        style={panelStyle.button}
                        onPress={this.toggle.bind(this)}>
                        <View style={panelStyle.titleContainer}>
                            <Text style={panelStyle.title}>{this.state.title}</Text>
                            {/* <Image
                                style={panelStyle.buttonImage}
                                source={icon}>
                            </Image> */}
                            {Icon}
                        </View>
                    </TouchableOpacity>
                </View>
                <View onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>
            </Animated.View>
        );
    }
}

var panelStyle = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    titleContainer: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        padding: 10,
        color: '#2a2f43',
        fontWeight: 'bold'
    },
    button: {
        flex: 1,
    },
    buttonImage: {
        width: 30,
        height: 25
    }
});

export default Panel;