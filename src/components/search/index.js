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
  { name: 'pink', code: '#ff4dd2' }, { name: 'EMERALD', code: '#2ecc71' },
  { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
  { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
];
export default function Search() {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <LinearGradient colors={['#0039e6','#0033cc','#002db3','#002699','#002080','#001a66','#00134d']}
            locations={[0.1,0.3,0.4,0.6,0.7,0.8,1]}
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
                  location={[0.9, 1]}
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
      paddingTop: 10,
      marginBottom:5,
      marginLeft:10,
      textAlign: 'left',
      color: 'white',
      fontFamily: 'arial',
      fontWeight: "400",
      fontSize: 20
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