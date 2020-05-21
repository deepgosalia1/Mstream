import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    SectionList,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import EditStatusJSON from '../components/Assets/json/editStatus.list.json';

export default class EditStatus extends React.Component {

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
                        <Text style={{ color: 'white', fontWeight: '300', fontSize: 18 }}>Edit</Text>
                    </TouchableOpacity>
                }
                {
                    showDone && <TouchableOpacity
                        style={{ paddingLeft: 10, paddingRight: 10 }}
                        onPress={params.onDoneClicked}>
                        <Text style={{ color: 'white', fontWeight: '300', fontSize: 18 }}>Done</Text>
                    </TouchableOpacity>
                }
            </View>

        }
    }
    constructor(props) {
        super(props)
        this.state = {
            newSelection: "",
            showDeleteIcon: false,
            editJson: EditStatusJSON,
            indexSelected: 0,
            currentlySetTo: false,
            inputEditable: false,
        }
        this.renderHeader = this.renderHeader.bind(this);
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: 'lightgrey'//"#CED0CE",
                }}
            />
        );
    };

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

    getImage(item, index) {
        switch (item.showIcon) {
            case "EDIT_ICON":
                return require('../components/Assets/Status/edit.png')
                break;
            case "SELECT_ICON":
                if (index == this.state.indexSelected) {
                    return require('../components/Assets/Status/checkmark.png')
                }
                break;

        }
    }

    getDeleteImage(item) {
        switch (item.showDelete) {
            case "DELETE_ICON":
                if (this.state.showDeleteIcon) {
                    return require('../components/Assets/Status/delete.png')
                }
                break;
        }
    }

    onStatusSelectionClick(item) {
        if (item.showIcon = "") {
            var showIcon = 'SELECT_ICON';
            //this.setState = showIcon
        }
    }


    onEditClick() {

        this.setState(
            { currentlySetTo: true },
            () => console.log('Check the state', this.state)
        );

    }

    renderHeader = () => {
        return (
            <View>
                <Text style={{ backgroundColor: '#EDEAEC', padding: 10, fontSize: 20 }}>Currently Set To</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TextInput editable={this.state.inputEditable} autoFocus={this.state.inputEditable} style={{ padding: 15, fontSize: 20, backgroundColor: 'transparent', width: '90%' }} value={this.state.editJson[this.state.indexSelected].name} />
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                inputEditable: true
                            })
                        }}
                    >
                        <Image style={{ width: 15, height: 15, marginRight: 10 }} source={require('../components/Assets/Status/edit.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={{ backgroundColor: '#EDEAEC', padding: 10, fontSize: 20 }}>Select a new One</Text>
            </View>
        )
    }

    onDeletePress(item) {
        //this.setState({dataSource: this.state.dataSource.cloneWithRows(rows)})
    }
    onDeleteStatus(item) {

    }

    _keyExtractor = (item, index) => index;

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.editJson}
                        ItemSeparatorComponent={this.renderSeparator}
                        ListHeaderComponent={this.renderHeader}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={styles.sectionItemStyle}
                                onPress={() => {
                                    this.setState({
                                        indexSelected: index
                                    })
                                }}>
                                <Image key={index} style={{ width: 20, height: 20, alignSelf: 'center' }} source={this.getDeleteImage(item)}></Image>
                                <Text style={styles.itemsStyle} >{item.name}</Text>
                                <Image key={index} style={{
                                    width: 20, height: 20, alignSelf: 'center', marginRight: 10, position: 'absolute', right: 0
                                }} source={this.getImage(item, index)}></Image>
                            </TouchableOpacity>
                        )}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        height: 600
    },
    sectionHeaderStyle: {
        height: 50,
        backgroundColor: '#EAEAEC',
        fontSize: 18,
        padding: 10,
        fontSize: 22,
    },
    itemsStyle: {
        height: 40,
        fontSize: 18,
        padding: 10,
        color: 'grey',
        alignSelf: 'center'
    },
    sectionItemStyle: {
        flexDirection: 'row',
        height: 50,
    },
    separator: {
        flex: 1,
        height: 2,
        backgroundColor: '#8E8E8E',
    },
    iconStyle: {
        width: 25,
        height: 25
    }
});