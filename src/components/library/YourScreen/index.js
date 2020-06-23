// import React, {useState, useEffect} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Platform,
//   Modal,
//   Alert,
// } from 'react-native';
// import {Surface, Button, ProgressBar} from 'react-native-paper';
// import {Divider, ListItem} from 'react-native-elements';
// import * as DocumentPicker from 'expo-document-picker';
// import storage from '@react-native-firebase/storage';
// import auth from '@react-native-firebase/auth';
// import RNFetchBlob from 'rn-fetch-blob';
// import {Entypo} from '@expo/vector-icons';

// export default function YourScreen({navigation}) {

//   const [selectedAudioObject, setAudioObj] = useState({});
//   const [songfilename, setSongName] = useState(
//     'Tap here to select a file .....',
//   );
//   const [, setUser] = useState({});
//   const [storageRef, setRef] = useState({});
//   const [uploadModal, setModal] = useState(false);
//   const [isUploadingnow, setUploading] = useState(false);
//   const [firstPB, setFPB] = useState(true);
//   const [secondPB, setSPB] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [uploadmsg, setmsg] = useState('Uploading, please be patient.');
//   const [uploadcancelled, setUploadingcancelled] = useState(false);

//   const list_opt = [
//     {
//       id: 1,
//       name: 'Your Uploads',
//     },
//     {
//       id: 2,
//       name: 'Whom You Follow',
//     },
//     {
//       id: 3,
//       name: 'Your Follower Count - ',
//     },
//   ];

//   useEffect(() => {
//     var obj = auth().currentUser;
//     setUser(() => obj);
//     var ref = storage().ref('/Songs/');
//     setRef(() => ref);
//   }, []);

//   async function getPathForFirebaseStorage(uri) {
//     if (Platform.OS === 'ios') return uri;
//     const stat = await RNFetchBlob.fs.stat(uri);
//     return stat.path;
//   }

//   return (
//     <View style={{flex: 1}}>
//       {/*Upload button and modal*/}
//       <Modal visible={uploadModal} transparent={true} animated={true}>
//         <View
//           style={{
//             backgroundColor: '#000000bc',
//             flex: 1,
//             alignItems: 'center',
//             alignContent: 'center',
//           }}>
//           <View
//             style={{
//               height: 250,
//               width: 350,
//               margin: 50,
//               padding: 40,
//               borderRadius: 10,
//               backgroundColor: 'white',
//               marginTop: 150,
//               alignSelf: 'center',
//               justifyContent: 'center',
//               flexDirection: 'column',
//             }}>
//             <Text
//               numberOfLines={1}
//               style={{fontSize: 17, textAlign: 'center', marginBottom: 15}}>
//               {uploadmsg}
//             </Text>
//             <ProgressBar visible={firstPB} indeterminate={true} color="brown" />
//             <ProgressBar
//               visible={secondPB}
//               indeterminate={false}
//               progress={progress}
//               color="brown"
//             />
//             <Button
//               onPress={() => {
//                 setmsg(() => 'Upload cancelled.');
//                 if (isUploadingnow) setUploadingcancelled(() => true);
//                 setTimeout(() => setModal(prev => !prev), 800);
//               }}>
//               Cancel upload
//             </Button>
//           </View>
//         </View>
//       </Modal>
//       <Surface
//         style={{
//           elevation: 15,
//           alignSelf: 'center',
//           height: 35,
//           width: '90%',
//           marginTop: 25,
//           borderRadius: 15,
//           position: 'absolute',
//           flexDirection: 'row',
//         }}>
//         <View style={{width: '70%'}}>
//           <TouchableOpacity
//             style={{
//               // backgroundColor: 'grey',
//               height: '100%',
//               width: '100%',
//               justifyContent: 'center',
//             }}
//             onPress={async () => {
//               console.log('here pressed');
//               var obj = await DocumentPicker.getDocumentAsync({
//                 type: 'audio/mpeg',
//                 copyToCacheDirectory: false,
//               });
//               if (obj.type !== 'cancel') {
//                 setAudioObj(() => obj);
//                 setSongName(() => obj.name);
//               }
//             }}>
//             <Text
//               numberOfLines={1}
//               style={{
//                 textAlign: 'center',
//                 textAlignVertical: 'center',
//                 fontSize: 18,
//                 marginLeft: 2,
//               }}>
//               {songfilename}
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <Button
//           icon={require('../../../assets/images/upload_icon.png')}
//           mode="contained"
//           color="green"
//           onPress={async () => {
//             console.log('Song name is ' + selectedAudioObject.name);
//             console.log('Directory details ' + selectedAudioObject.uri);
//             var tobeuploaded = await getPathForFirebaseStorage(
//               selectedAudioObject.uri,
//             );
//             console.log(tobeuploaded + ' is the new uri');
//             const task = storageRef.putFile(tobeuploaded);
//             setModal(prev => !prev);
//             task.on('state_changed', async taskSnapshot => {
//               if (
//                 uploadcancelled ||
//                 taskSnapshot.state === storage.TaskState.CANCELLED
//               ) {
//                 await task.cancel();
//               }
//               setUploading(() => true);
//               setFPB(() => false);
//               setSPB(() => true);
//               setProgress(
//                 () => taskSnapshot.bytesTransferred / taskSnapshot.totalBytes,
//               );
//               console.log(
//                 `${taskSnapshot.bytesTransferred} transferred out of ${
//                   taskSnapshot.totalBytes
//                 }`,
//               );
//             });
//             task.then(() => {
//               setmsg(() => 'Upload complete.');
//               setFPB(() => false);
//               setSPB(() => false);
//               setTimeout(() => {
//                 setModal(() => false);
//                 setProgress(() => 0);
//                 setmsg('Uploading, please be patient.');
//               }, 500);
//             });
//           }}
//           style={{
//             height: 35,
//             width: '30%',
//             alignSelf: 'flex-end',
//             borderRadius: 15,
//             borderTopLeftRadius: 2,
//             borderBottomLeftRadius: 2,
//           }}>
//           Upload
//         </Button>
//       </Surface>

//       <Divider
//         style={{
//           position: 'relative',
//           marginTop: 80,
//           borderWidth: 0.5,
//           borderColor: 'lightblue',
//           width: '95%',
//           alignSelf: 'center',
//         }}
//       />


//       {/*ListView section*/}

//       <Surface style={{width: '98%', alignSelf: 'center', elevation:5}}>
//         {list_opt.map(({id, name}) => (
//           <TouchableOpacity
//             onPress={()=>{
//               if (id === 1){navigation.navigate('UploadsList')}
//               else if (id === 2){navigation.navigate('MeFollow')}
//               else if (id === 3){Alert.alert('Baaki hai yeh screen dost')}
//             }}

//           >
//             <ListItem
//               title={name}
//               titleStyle={{
//                 fontSize: 16,
//                 fontFamily: 'serif',
//               }}
//               key={id}
//               bottomDivider
//               rightIcon={
//                 <Entypo
//                   name="chevron-thin-right"
//                   size={18}
//                   color="lightblack"
//                 />
//               }
//             />
//           </TouchableOpacity>
//         ))}
//       </Surface>
//     </View>
//   );
// }


