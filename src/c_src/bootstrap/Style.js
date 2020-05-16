import * as colorUtils from '../components/utils/colorUtils';
import * as fontUtils from '../components/utils/fontUtils'
var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
} = ReactNative;

var Style = StyleSheet.create({
  radioForm: {
  },
  container: {
    flex: 1
  },
  radioWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
    width:30,
    height:30,
    alignSelf: 'center',
    borderColor: colorUtils.BUTTON_COLOR,
    borderRadius: 30,
  },

  radioLabel: {
    paddingLeft: 10,
    lineHeight: 20,
  },

  radioNormal: {
    borderRadius: 10,
  },

  radioActive: {
    width: 20,
    height: 20,
    backgroundColor: colorUtils.BUTTON_COLOR,
  },

  labelWrapStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },

  labelVerticalWrap: {
    flexDirection: 'column',
    paddingLeft: 10,
  },

  labelVertical: {
    paddingLeft: 0,
  },

  formHorizontal: {
    flexDirection: 'row',
  },
  dateTouch: {
    flex: 0.5,
    width: '100%',
  },
  dateTouchBody: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15
    
  },
  dateIcon: {
    width: 32,
    height: 32,
    marginLeft: 5,
    marginRight: 5
  },
  dateFieldIcon: {
    width: 28,
    height: 28
  },
  clearIcon: {
    width: 32,
    height: 32,
    marginRight: 25
  },
  dateInput: {
    flex: 1,
    height: 40,
    //borderWidth: 1,
    //backgroundColor : 'red',
    borderColor: '#aaa',
   // alignItems: 'center',
     //justifyContent: 'center'
  },
  datePickerMask: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#00000077'
  },
  datePickerCon: {
    backgroundColor: '#fff',
    height: 0,
    overflow: 'hidden'
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextText: {
    fontSize: 16,
    color: colorUtils.BUTTON_COLOR,
  },
  btnClearText: {
    fontSize: 16,
    color: colorUtils.BUTTON_COLOR,
    padding: 100,
  },
  btnCancelTextAndroid: {
    fontSize: 16,
    color: '#46cf98',
  },
  btnTextCancel: {
    color: colorUtils.BUTTON_COLOR
  },
  btnCancel: {
    left: 0,
    //color: colorUtils.BUTTON_COLOR
  },
  btnConfirm: {
    right: 0
  },
  datePicker: {
    marginTop: 42,
    borderTopColor: '#ccc',
    borderTopWidth: 1
  },
  disabled: {
    backgroundColor: '#eee'
  },
  pickerWidth: {
    width: 300
  },
  ctbTouchableStyle: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 40,
    paddingLeft: 40,
    // backgroundColor: '#4CAF50',
    backgroundColor: colorUtils.BUTTON_COLOR,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ctibTouchableStyle: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    // backgroundColor: '#4CAF50',
    backgroundColor: colorUtils.BUTTON_COLOR,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateText: {
    marginLeft: 4,
    marginTop:4,
    width: '70%',
    color: colorUtils.PICKER_TEXT_COLOR,
    fontSize: fontUtils.FONT_SIZE_TITLE,
    fontFamily: fontUtils.FONT_FAMILY,
    fontStyle:fontUtils.FONT_STYLE
  },
  placeholderText: {
    marginLeft: 4,
    marginTop:4,
    width: '70%',
    color: colorUtils.PICKER_TEXT_COLOR,
    fontSize: fontUtils.FONT_SIZE_TITLE,
    fontFamily: fontUtils.FONT_FAMILY,
    fontStyle: fontUtils.FONT_STYLE
  },
  lineStyle:{
    paddingTop: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
},
dateTouchBody: {
  flexDirection: 'row',
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: 15
  
},
});

module.exports = Style;
