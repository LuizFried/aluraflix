// VideoSection.js
import React from 'react';
import './videos.css'; // Certifique-se de ter o arquivo de estilos correto importado

const VideoSection = ({ videos }) => {
    return (
        <section className="video-section">
            <h2>Vídeos Adicionados</h2>
            <div className="video-grid">
                {videos.map((video) => (
                    <div key={video.id} className="video-item">
                        <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            title={`YouTube video ${video.id}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="video-info">
                            <h3>{video.title}</h3>
                            <p>{video.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoSection;
