import React, { useRef, useState } from "react";
import "./styles.scss";
import MainLayout from "../../layouts/MainLayout";

const videos = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.jpg",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
]

const HomePage = () => {
    const videoRef: any = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
        videoRef.current.play();
    };

    const handlePause = () => {
        setIsPlaying(false);
        videoRef.current.pause();
    };
    return (
        <>
            <MainLayout>
                {/* <div className="icon">Main</div>
                <div className="icon">Main</div>
                <div className="icon">Main</div>
                <div className="icon">Main</div>
                <div className="icon">Main</div>
                <div className="icon">Main</div>
                <div className="icon">Main</div>
                <div className="icon">Main</div>
                <div className="icon">Main</div>
                <div className="icon">Main</div>
                <div className="icon">Main</div> */}
                {
                    videos.map((item, i) => (
                        <div key={i}>
                            <video ref={videoRef} src={item} />
                            {!isPlaying && <button onClick={handlePlay}>Play</button>}
                            {isPlaying && <button onClick={handlePause}>Pause</button>}
                        </div>
                    ))
                }

            </MainLayout>
        </>
    )
};

export default HomePage;