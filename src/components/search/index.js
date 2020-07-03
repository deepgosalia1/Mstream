// React Imports
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Button,
} from 'react-native';
import { Icon } from 'react-native-vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { TextInput, Card, Title, Paragraph } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';


const items = [
  { name: 'pink', code: '#FF1493' }, { name: 'EMERALD', code: '#7FFF00' },
  { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#8A2BE2' },
  { name: 'WET ASPHALT', code: '#7DF9FF' }, { name: 'GREEN SEA', code: '#FF3A40' },
  { name: 'GREEN SEA', code: '#FB4A21' }, { name: 'GREEN SEA', code: '#FCF133' },
  { name: 'GREEN SEA', code: '#FF00FF' }, { name: 'GREEN SEA', code: '#FF6731' },
  { name: 'GREEN SEA', code: '#3A90E5' },  { name: 'GREEN SEA', code: '#69FF46' }
];
export default function Search() {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <LinearGradient colors={['#f0fff0','#cbf2dc','#2ecc71','#20b27d','#1dad7f'].reverse()}
            locations={[0.1,0.2,0.3,0.5,1]}
            style={styles.linearGradient}>
            <Text style={styles.searchHeader} > Search </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: "center" }}>
              <TextInput style={styles.searchBar} />
            </View>
            <View style={styles.searchButton}>
              <Button title="Search" />
            </View>
            <View style={styles.topCards}>
              <Text style={styles.topAlbums} > Top Albums </Text>
              <FlatGrid
                itemDimension={130}
                data={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                // spacing={20}
                renderItem={({ item, index }) => (<LinearGradient colors={[item.code, '#ffffff']}
                  locations={[0.98,1]}
                  style={styles.itemContainer}>
                  <View style={styles.itemContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemCode}>{item.code}</Text>
                  </View>
                </LinearGradient>
                )}
              />
            </View>

          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    searchHeader: {
      paddingTop: 80,
      paddingBottom: 50,
      textAlign: 'center',
      color: 'white',
      fontFamily: 'arial',
      fontWeight: "400",
      fontSize: 40
    },
    searchBar: {
      height: 50,
      width: '94%',
      borderTopEndRadius: 10,
      borderTopStartRadius: 10,
      borderBottomStartRadius: 10,
      borderBottomEndRadius: 10,
    },
    searchButton: {
      
      color: "white",
      marginTop: 15,
      marginBottom: 10,
    },
    topCards: {

    },
    topAlbums: {
      paddingTop: 5,
      marginBottom:5,
      marginLeft:10,
      textAlign: 'left',
      color: 'black',
      fontFamily: 'verdana',
      fontWeight: "600",
      fontSize: 22
    },
    linearGradient: {
    },
    gridView: {
      marginTop: 5,
      flex: 1,
    },
    itemContainer: {
      margin:5,
      borderTopEndRadius: 10,
      borderTopStartRadius: 10,
      borderBottomStartRadius: 10,
      borderBottomEndRadius: 10,
      justifyContent: 'flex-start',
      height: 100,
      borderRadius:10,  
    },
    itemName: {
      marginTop: 10,
      marginLeft: 10,
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  }
);