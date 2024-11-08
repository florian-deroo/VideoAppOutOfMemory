import 'react-native-reanimated';

import {ScrollView, View} from "react-native";
import {useVideoPlayer, VideoView} from "expo-video";

export default function RootLayout() {

    const videoSource =
        'https://res.cloudinary.com/shotgun/video/upload/v1699355465/staging/artworks/afterlife-video_sjy9ic.mov';


    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });
    const player2 = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });
    const player3 = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });
    const player4 = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });

    return (
        <ScrollView style={{
            flex: 1
        }}>
            <VideoView
                nativeControls={true}
                style={{width: '100%', height: 200}}
                player={player}

            /><VideoView
            nativeControls={true}
            style={{width: '100%', height: 200}}
            player={player2}
        /><VideoView
            nativeControls={true}
            style={{width: '100%', height: 200}}
            player={player3}
        /><VideoView
            style={{width: '100%', height: 200}}
            player={player4}
        />
        </ScrollView>

    );
}
