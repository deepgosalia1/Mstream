import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput
} from 'react-native';
import Style from './style';
import * as fontUtils from '../../../components/utils/fontUtils';
import * as colorUtils from '../../../components/utils/colorUtils';

export default class AddLegalDocuments extends Component {

    constructor(props) {
        super(props)
        this.state={
            selectedImage:require('./leagldoc1.png'),
            selectedBorderColor:'lightgray',
            selectedDocName:'LegalDoc1'
        }
    }

    SetImageView=(imageUrl,item)=>{
        this.setState({
            selectedImage:imageUrl,
            selectedDocName:item.docName
        })
    }

    render() {
        let docsArray = [require('./leagldoc1.png'),
                         require('./leagldoc1.png'),
                         require('./legaldoc2.png'),
                         require('./legaldoc3.png'),
                        ]
        return (
            <View style={Style.containerStyle}>
                {/* <View style={{flexDirection:'row',marginLeft:20,marginTop:40}}>
                    <Image style={Style.leftImageStyle} source={require('../addlegaldocument/adddoc.png')}/>
                    <TextInput style={Style.textInputStyles}
                    placeholder={'Title of the Document'}
                    >
                    </TextInput>
                </View>

                <TouchableOpacity
                    style={{ position: 'absolute', end: 0, top:80}}
                    onPress={() => { this.props.navigation.navigate('')}}>
                    <Image
                        style={{ width:150, height:35, margin: 20 }}
                        source={require('../addlegaldocument/upload_btn.png')}
                    />
                </TouchableOpacity>
 */}
                <Image style={{ margin:10,height: '65%', backgroundColor: 'transparent',width:'95%',borderColor:'gray',borderWidth:1}} source={this.state.selectedImage} />               
                <View style= {{flexDirection:'column',margin:10,padding:5}}>
                    {/* <Text style={{fontFamily:fontUtils.FONT_FAMILY,fontSize:18,fontWeight:'500',color:'gray'}}>Document Name</Text> */}
                    {/* <Text style={{fontFamily:fontUtils.FONT_FAMILY,fontSize:15,fontWeight:'500',color:colorUtils.THEME_COLOR}}>{this.state.selectedDocName}</Text> */}
                    <TextInput style={Style.textInputStyles}
                    placeholder={'Title of the Document'}
                    >{this.state.selectedDocName}
                    </TextInput>
                </View>

                <FlatList
                    style={{ backgroundColor: 'gray', height: 100, position: 'absolute', bottom: 0, alignSelf: 'center' }}
                    renderItem={({ item }) => {

                        if (item.id == 0) {
                            return <TouchableOpacity
                                style={{ backgroundColor: 'white', borderColor: 'lightgray', borderWidth: 1, width: 90, height: 90 }}
                            >
                                <Image
                                    style={{ width: 56, height: 56, margin: 20, alignSelf: 'center' }}
                                    source={require('../../../components/Assets/common/add_icon.png')}
                                />
                            </TouchableOpacity>
                        }
                        else {
                            return <View style={{ backgroundColor: 'white', borderColor:'lightgray', borderWidth: 1, width: 90, height: 90 }}>
                                    <TouchableOpacity
                                style={{ backgroundColor: 'white', borderColor: 'lightgray', borderWidth: 1, width: 90, height: 90 }}
                                onPress={()=>{
                                    this.SetImageView(docsArray[item.id],item)
                                }}
                            >
                                <Image
                                    style={{ width: 56, height: 56, margin: 20, alignSelf: 'center' }}
                                    source={docsArray[item.id]}
                                />
                            </TouchableOpacity>
                            </View>
                        }

                    }}
                    backgroundColor={'white'}
                    data={[{ "id": 0,"docName":"LegalDoc1"}, { "id": 1,"docName":"LegalDoc1"}, { "id": 2,"docName":"LegalDoc2" }, { "id": 3,"docName":"LegalDoc3"}]}
                    horizontal={true}
                // ItemSeparatorComponent={this.FlatListItemSeparator}
                // keyExtractor={(item, index) => item + index}
                />
            </View>

        )
    }
}