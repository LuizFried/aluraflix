import React, { useState } from 'react';
import './destaque.css';


const videosData = [
    {
        id: 1,
        title: 'Título do Vídeo 1',
        description: 'Descrição do Vídeo 1',
        videoId: 'VIDEO_ID_1'
    },
    {
        id: 2,
        title: 'Título do Vídeo 2',
        description: 'Descrição do Vídeo 2',
        videoId: 'VIDEO_ID_2'
    },
    {
        id: 3,
        title: 'Título do Vídeo 3',
        description: 'Descrição do Vídeo 3',
        videoId: 'VIDEO_ID_3'
    },
    {
        id: 4,
        title: 'Título do Vídeo 4',
        description: 'Descrição do Vídeo 4',
        videoId: 'VIDEO_ID_4'
    },
    
];

function VideoCarrossel() {
    const [AtualVideo, setAtualVideo] = useState(0);

    const nextVideo = () => {
        setAtualVideo((AtualVideo + 1) % videosData.length);
    };

    const prevVideo = () => {
        setAtualVideo((AtualVideo - 1 + videosData.length) % videosData.length);
    };

    const video = videosData[AtualVideo];

    return (
        <section className='video-carrossel'>
            <div className='video-container'>
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={`${video.id}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <div className='video-info'>
                <h2>{video.title}</h2>
                <p>{video.description}</p>
            </div>
            <div className='navigation'>
                <button onClick={prevVideo}>Anterior</button>
                <button onClick={nextVideo}>Próximo</button>
            </div>
        </section>
    );
}

export default VideoCarrossel;
