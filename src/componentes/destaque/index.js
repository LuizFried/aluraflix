import React, { useState } from 'react';
import './destaque.css';

const VideoCarrossel = ({ videos }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const video = videos[currentVideoIndex];

    const handlePrevClick = () => {
        setCurrentVideoIndex((currentVideoIndex - 1 + videos.length) % videos.length);
    };

    const handleNextClick = () => {
        setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
    };

    const carrosselStyle = {
        backgroundImage: `url('https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg')`
    };

    return (
        <div className='video-carrossel' style={carrosselStyle}>
            <div className='carrossel-content'>
                <div className='video-info'>
                    <h2>{video.title}</h2>
                    <p>{video.description}</p>
                </div>
                <div className='video-container'>
                    <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={`YouTube video ${video.id}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className='navigation'>
                <button onClick={handlePrevClick}>&lt;</button>
                <button onClick={handleNextClick}>&gt;</button>
            </div>
        </div>
    );
};

export default VideoCarrossel;
