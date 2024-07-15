import React from 'react';
import VideoCard from '../videocard';
import './videosection.css';

const VideoSection = ({ videos, onDelete }) => {
    return (
        <section className="video-section">
            {videos.map(video => (
                <VideoCard key={video.id} video={video} onDelete={onDelete} />
            ))}
        </section>
    );
};

export default VideoSection;
