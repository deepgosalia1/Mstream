/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  Modal,
  Alert,
  Button,
  Linking,
} from 'react-native';
import { Icon } from 'react-native-vector-icons';
import { Surface, Card, Portal, Provider } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

export default function Profile({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (


    <View style={{ flex: 1 }}>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={{ backgroundColor: '#000000bc', flex: 1, alignItems: 'center', alignContent: 'center' }}>
          <View
            style={{ height: 250, width: 350, margin: 50, padding: 40, borderRadius: 10, backgroundColor: 'white', marginTop: 150, alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'column' }}
          >
            <Text style={{ fontSize: 22, textAlign: 'center' }} >In-order to receive support, please contact us at <Text style={{ fontSize: 22 }} onPress={() => Linking.openURL('mailto:support@example.com')}>Someone@codeaxis.in</Text></Text>
            <Button
              onPress={() => setModalVisible(false)}
              title={'Close'}
              color={'purple'}
            />
          </View>
        </View>
      </Modal>

      <Surface style={{ flex: 1, backgroundColor: 'lightblue', marginTop: 45 }}>

        <Surface style={{ width: '90%', height: '25%', backgroundColor: 'grey', justifyContent: 'flex-start', alignSelf: 'center', marginTop: 10 }}>
          <Text style={{ color: 'white', textAlignVertical: 'center', height: '100%', width: '100%', textAlign: 'center' }}> Space for ADS</Text>
        </Surface>

        <Surface style={{ elevation: 10, width: '90%', height: 50, alignSelf: 'center', marginTop: 25 }}>
          <TouchableOpacity style={{ height: 50 }} onPress={() => navigation.navigate('MyAccount')}>
            <Card.Title
              style={{ height: 50, flex: 1, marginTop: -10 }}
              title={'My Account'}
              titleStyle={{ color: 'black', fontSize: 18, textAlign: 'left' }}
              left={() => <MaterialIcons name="account-circle" size={40} color="blue" />}
            />
          </TouchableOpacity>
        </Surface>

        <Surface style={{ elevation: 10, width: '90%', height: 50, alignSelf: 'center', marginTop: 10 }}>
          <TouchableOpacity style={{ height: 50 }} onPress={() => navigation.navigate('Appsettings')}>
            <Card.Title
              style={{ height: 50, flex: 1, marginTop: -10 }}
              title={'App Settings'}
              titleStyle={{ color: 'black', fontSize: 18, textAlign: 'left' }}
              left={() => <Ionicons name="ios-settings" size={44} color="black" />}
            />
          </TouchableOpacity>
        </Surface>

        <Surface style={{ elevation: 10, width: '90%', height: 50, alignSelf: 'center', marginTop: 10 }}>
          <TouchableOpacity
            style={{ height: 50 }}
            onPress={() => setModalVisible(true)}
          >
            <Card.Title
              style={{ height: 50, flex: 1, marginTop: -10 }}
              title={'Support'}
              titleStyle={{ color: 'black', fontSize: 18, textAlign: 'left' }}
              left={() => <SimpleLineIcons name="support" size={36} color="red" />}
            />
          </TouchableOpacity>
        </Surface>

        <Surface style={{ elevation: 10, width: '90%', height: 50, alignSelf: 'center', marginTop: 10 }}>
          <TouchableOpacity
            style={{ height: 50 }}
            onPress={() => {
              auth()
                .signOut()
                .then(() => console.log('User signed out!')).then(Alert.alert("Navigation from here is pending. Refresh from the node server."));
            }
            }
          >
            <Card.Title
              style={{ height: 50, flex: 1, marginTop: -10 }}
              title={'Logout'}
              titleStyle={{ color: 'black', fontSize: 18, textAlign: 'left' }}
              left={() => <SimpleLineIcons name="logout" size={36} color="red" />}
            />
          </TouchableOpacity>
        </Surface>

      </Surface>
    </View >
  );
}



const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textdisplay: {
    textAlign: 'center',
    fontSize: 50,

  },
}
);
