/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import TrackPlayer, { ProgressComponent } from 'react-native-track-player';
import { View, Button } from 'react-native';
import storage from '@react-native-firebase/storage';
import Moment from 'moment';
// import { useTrackPlayerProgress } from 'react-native-track-player';




// https://firebasestorage.googleapis.com/v0/b/mstream-9122e.appspot.com/o/Songs%2F01%20-%20Luck%20Aazma%20-%20www.downloadming.com.mp3?alt=media&token=78ba75ac-4d82-4cd1-ab52-7f54c2a836bd




export default function Music() {
    return (<View/>)
    // //The function below and its call is not needed, for now.
    // function listFilesAndDirectories(reference, pageToken) {
    //     return reference.list({ pageToken }).then(result => {
    //         // Loop over each item
    //         result.items.forEach(ref => {


    //             console.log(storage().ref(ref.fullPath).getDownloadURL());
    //             console.log('__________________________________________________');
    //             // isBreakStatement;
    //         });

    //         if (result.nextPageToken) {
    //             return listFilesAndDirectories(reference, result.nextPageToken);
    //         }

    //         return Promise.resolve();
    //     });
    }

    // listFilesAndDirectories(ref).then(() => {
    //     console.log('Finished listing');
    // });

    // const { position, bufferedPosition, duration } = useTrackPlayerProgress()

    // TrackPlayer.setupPlayer().then(
    //     async () => {
    //         await TrackPlayer.add({
    //             // url: 'https://firebasestorage.googleapis.com/v0/b/mstream-9122e.appspot.com/o/Songs%2F01%20-%20Luck%20Aazma%20-%20www.downloadming.com.mp3?alt=media&token=78ba75ac-4d82-4cd1-ab52-7f54c2a836bd',
    //             url: 'http://www.panacherock.com/downloads/mp3/01_-_Stormy_Weather.mp3',
    //             // url: (await storage().ref('Songs/01 - Luck Aazma - www.downloadming.com.mp3').getDownloadURL()).toString(),
    //             // duration: (await TrackPlayer.getDuration().then((res) => console.log(res.toString()))),
    //         });
    //         // console.log('Reach here');
    //     }
    // );
    // return (

    //     <View style={{ flex: 1, backgroundColor: 'grey' }}>
    //         <Button title={'Play me!'} onPress={() => TrackPlayer.play().then(async () => {
    //             var dur = await TrackPlayer.getDuration();
    //             console.log('dur: ' + dur);
    //             if (await TrackPlayer.getState() === TrackPlayer.STATE_PLAYING) { console.log('its playing') }
    //             if (await TrackPlayer.getState() === TrackPlayer.STATE_BUFFERING) { console.log('its buffering') }
    //         })} />
    //         <Button title={'Pause me!'} onPress={async () => {
    //             console.log('hhh: ' + TrackPlayer.getPosition().then((res) => console.log('moment ka part is :' + Moment.utc(res * 1000).format('m:ss'))));
    //             await TrackPlayer.pause();
    //             TrackPlayer.getState().then((res) => console.log("state " + res));
    //             if (await TrackPlayer.getState() === TrackPlayer.STATE_PAUSED) { console.log('its paused') }
    //             // console.log('dur is : ' + duration)

    //         }} />

    //     </View>
//     );
// }
