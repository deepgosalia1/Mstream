import TrackPlayer from 'react-native-track-player';
import { Platform } from 'react-native';
import React from 'react';
module.exports = async function () {

    TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());

    TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());

    TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

    TrackPlayer.addEventListener('remote-next', () => TrackPlayer.skipToNext())

    TrackPlayer.addEventListener('remote-previous', async () => {
        const time = await TrackPlayer.getPosition()

        if (time <= 3) {
            TrackPlayer.skipToPrevious()
        } else {
            TrackPlayer.seekTo(0)
        }
    })

    TrackPlayer.addEventListener('remote-seek', ({ position }) =>
        TrackPlayer.seekTo(position)
    )

    if (Platform.OS !== 'ios') {
        // this event type is not supported on iOS
        TrackPlayer.addEventListener('remote-duck', ({ ducking }) => {
            TrackPlayer.setVolume(ducking ? 0.5 : 1)
        })
    }
};