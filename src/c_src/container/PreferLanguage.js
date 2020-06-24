import React from 'React';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet
} from 'react-native';

import * as colorUtils from '../components/utils/colorUtils'

import SelectionView from '../bootstrap/Picker/SelectionView'

var optionTypes =
  [
    {
      "value": "Engligh United State",
      "text": "Engligh United State"
    },
    {
      "value": "Spanish",
      "text": "Spanish"
    }, {
      "value": "French",
      "text": "French"
    }

  ]
export default class PreferLanguage extends React.Component {

    constructor(props) {
        super(props);
    }

   

    render() {

        return (
            <View style={styles.container}>

                 <View style={styles.laneView}>
                 <Image style ={{alignSelf:'center',width:60,height:60,marginTop:20}}source={require('../components/Assets/profile/language.png')}/>    

                    <Text style={styles.textStyle}>Language</Text>
                    <View style={{top:10}}>
                         {/* <TextInput placeholder='' style={styles.TextInputStyleClass}>English (United States)</TextInput> 
                       <Image style={{ position: 'absolute', end: 0, margin: 5 }} source={require('../components/Assets/Dashboard/dropdown.png')}></Image> */}
                        <SelectionView
                        lang="en-US"
                        style={styles.textContainer}
                        placeholder='Select Language'
                        minuteInterval={10}
                        showIcon={true}
                        style={{ position: 'absolute', end: 0, margin: 5 }} 
                        showInputIcon={true}
                      
                        iconSource={require('../components/Assets/Dashboard/dropdown.png')}
                        // iconSourceInputField={require('../components/Assets/Login/language.png')}
                        scrollPickerEvent={(evt, height) => {
                        
                            //this.scroll.props.scrollIntoView(evt.target)
                        }}
                        onConfirm={(option) => {
                            //this.setState({ [name]: option.value })

                        }}
                        onSelect={(option) => {

                        }}

                        onClear={() => {

                        }}

                        options={optionTypes}
                          >
            </SelectionView>

                    </View>
                 </View>
             </View> 
        )
    }
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    textStyle: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        marginTop: 5
    },
    laneView: {
        marginTop: 100,
        padding: 20,
        flexDirection: 'column'
    },
    TextInputStyleClass: {

        textAlign: 'left',
        height: 50,
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20,
        color: colorUtils.THEME_COLOR
    },
    textContainer: {
        marginLeft: 45,
        marginRight: 45,
        flexDirection: 'column',
        flex: 1
      }
});