import React, { useState } from 'react';
import './destaque.css';

const VideoCarrossel = ({ videos }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    if (videos.length === 0) {
        return <div className='video-carrossel'>Nenhum vídeo disponível</div>;
    }

    const video = videos[currentVideoIndex];
    const videoUrl = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;

    return (
        <div>
            <section className='video-carrossel' style={{ backgroundImage: `url(${videoUrl})` }}>
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
                    <button className="nav-button" onClick={() => setCurrentVideoIndex((currentVideoIndex - 1 + videos.length) % videos.length)}>⬅️</button>
                    <button className="nav-button" onClick={() => setCurrentVideoIndex((currentVideoIndex + 1) % videos.length)}>➡️</button>
                </div>
            </section>
        </div>
    );
};

export default VideoCarrossel;
