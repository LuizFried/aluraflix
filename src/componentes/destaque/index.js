import React, { useState } from 'react';
import './destaque.css';

const VideoCarrossel = ({ videos }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handlePreviousVideo = () => {
        setCurrentVideoIndex((currentVideoIndex - 1 + videos.length) % videos.length);
    };

    const handleNextVideo = () => {
        setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
    };

    const video = videos[currentVideoIndex];

    return (
        <div>
            <section className='video-carrossel'>
                <div className='carrossel-content'>
                    <div className='video-info'>
                        <h2>{video.title}</h2>
                        <p>{video.description}</p>
                    </div>
                    <div className='video-container'>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            title={`YouTube video ${video.id}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className='navigation'>
                    <button onClick={handlePreviousVideo}>Anterior</button>
                    <button onClick={handleNextVideo}>Próximo</button>
                </div>
            </section>
        </div>
    );
};

export default VideoCarrossel;

