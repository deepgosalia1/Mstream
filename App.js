/**
 *  eslint-disable
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */







import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './components/Home';
import Profile from './components/Profile';
import Library from './components/Library';
import MyTabs from './components/Navigator';



export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}











// import React from 'react';
// import MusicPlayer from './src/components/musicplayer';
// import DPS from './src/components/dpscreen'
// import Editdp from './src/components/editdp'
// import EditDP from './src/components/editdp';


// export default class App extends React.Component {
//   render() {
//     return (
//       // <MusicPlayer />
//       // <DPS />
//       <EditDP />

//     );
//   }
// }

// import React from 'react';
// import MusicPlayer from './src/components/musicplayer';
// import DPS from './src/components/dpscreen'
// import EditDP from './src/components/editdp';






// export default class App extends React.Component {
//   render() {
//     return (
//       // <MusicPlayer />
//       // <DPS />
//       <EditDP />
//     );
//   }
// }














// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import { createAppContainer } from 'react-navigation';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import { Icon } from 'react-native-vector-icons';
// // import {AntDesign} from '@expo/vector-icons';


// function Profile() {
//   return (

//     <SafeAreaView>
//       <View style={styles.container}>
//         <Text style={styles.textdisplay} >
//           Profile
//           </Text>
//       </View>
//     </SafeAreaView>
//   );
// };


// function Home() {
//   return (

//     <SafeAreaView>
//       <View style={styles.container}>
//         <Text style={styles.textdisplay} >
//           Hombkbhbjbjhbhjbhjbkllllllllle
//           </Text>
//       </View>
//     </SafeAreaView>
//   );
// };
// function Library() {
//   return (

//     <SafeAreaView>
//       <View style={styles.container}>
//         <Text style={styles.textdisplay} >
//           Library
//           </Text>
//       </View>
//     </SafeAreaView>
//   );
// };


// const TabNavigator = createMaterialBottomTabNavigator(
//   {
//     Home: {
//       screen: Home,

//       navigationOptions: {
//         tabBarIcon: ({ tintcolor }) => (
//           <View></View>
//         )
//       },
//     },
//     Profile: {
//       screen: Profile,
//     },

//     Library: {
//       screen: Library,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     activeColor: 'white',
//     inactiveColor: 'grey',
//     barStyle: { backgroundColor: 'black' },

//   });


// const styles = StyleSheet.create({

//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   textdisplay: {
//     textAlign: "center",
//     fontSize: 50,

//   },
// }
// );

// export default createAppContainer(TabNavigator)












