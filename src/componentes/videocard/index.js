import React from 'react';
import './card.css';

const VideoCard = ({ video, onDelete }) => {
    const videoUrl = `https://www.youtube.com/embed/${video.videoId}`;

    const handleClose = () => {
        onDelete(video.id);
    };

    return (
        <div className="video-card">
            <span className="close" onClick={handleClose}>&times;</span>
            <iframe
                width="100%"
                height="200"
                src={videoUrl}
                title={video.title}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <div className="card-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
            </div>
        </div>
    );
};

export default VideoCard;
