import React, { Component } from 'react';
import Proptypes from 'prop-types';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList, Image,
} from 'react-native';
//import Header from './src/family/header';
import style from './styles';

// import FlatListItem from './flatlistitem'

import jsondata from './contact.list.json'
import jsondata2 from './contact.list2.json'

export default class FamilySideMenu extends Component {
    render() {
      return (
        <View style={styles.container}>
       
        <View style={{flexDirection:'row'}}>
        <Text style={styles.mainhead}><Text style={{fontWeight: 'bold'}}>Family Lanes</Text> </Text>
          
         <Image source={require('./add_icon.png')} style={styles.ImageStyle} /> 
         </View>
        <FlatList
            data={jsondata}
            renderItem={({ item }) =>{
              return (
                <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#148f77', marginTop: 3, marginBottom: 5 }}>
                  <View style={{ margin: 10 }}>
                  
                  
                    <Image
                      source={require('./add_icon.png')}
                      style={{ height: 40, width: 40, borderRadius: 10 }}
                    />
                  
                
                  
                  </View>
                  <View style={{ margin: 5, alignSelf: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fdfefe', paddingBottom: 5 }}>{item.name}</Text>
                    <Text style={{color:'#fdfefe'}}>{item.relation}</Text>
                  </View>
                </View >
               
              );
            } }
            keyExtractor={this._keyExtractor}
        />
        <View style={{flexDirection:'row'}}>
        <Text style={styles.mainhead}>
        <Text style={{fontWeight: 'bold'}}>Family Members</Text></Text>
  
        <Image source={require('./add_icon.png')} style={styles.ImageStyle} />
        </View>
        <FlatList
            data={jsondata2}
            renderItem={({ item }) => {
            return (
              <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#148f77', marginTop: 3, marginBottom: 5 }}>
                <View style={{ margin: 10 }}>
               
                  <Image
                    source={require('./add_icon.png')}
                  style={{ height: 40, width: 40, borderRadius: 10 }}
          />
                
              
                
                </View>
                <View style={{ margin: 5, alignSelf: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fdfefe', paddingBottom: 5 }}>{item.name}</Text>
                  <Text style={{color:'#fdfefe'}}>{item.relation}</Text>
                </View>
              </View >
             
            );
          }}
            keyExtractor={this._keyExtractor}
        />
          </View>
         
        
        );
    }
    _keyExtractor = (item, index) => item.id;
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#148f77',
   
      // justifyContent:'center',
      // alignItems:'center'
      
    },
    container2:{
      flex:1,
      backgroundColor: '#148f77',
    },
    mainhead: {
     flex:12,
      fontSize: 20,
      textAlign: 'left',
      margin: 10,
      paddingTop:30,
      color: '#fdfefe'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    ImageStyle:{
      flex:1,
      alignSelf:'flex-end',
      width:25,
      height:25,
    marginRight:10,
      paddingBottom:5,
     
    },
    circleStyle:{
      
      justifyContent:'center',
      alignItems:'center',
      width:100,
      height:100
  
    },
  
  });



