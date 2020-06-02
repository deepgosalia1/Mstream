/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import TrackPlayer from 'react-native-track-player';
import { View, Button } from 'react-native';
export default function Music() {
    TrackPlayer.setupPlayer().then(
        async () => {
            await TrackPlayer.add({
                url: 'https://sampleswap.org/mp3/artist/5101/Peppy--The-Firing-Squad_YMXB-160.mp3',
                // url: 'gs://mstream-9122e.appspot.com/Songs/01 - Dulha Mil Gaya.mp3',

            });
            console.log('Reach here');
        }
    );
    return (
        <View style={{ flex: 1, backgroundColor: 'grey' }}>
            <Button title={'Play me!'} onPress={() => TrackPlayer.play()} />
            <Button title={'Pause me!'} onPress={() => TrackPlayer.pause()} />

        </View>
    );
}
