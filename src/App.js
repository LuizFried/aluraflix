import React, { useState } from 'react';
import Cabecalho from './componentes/cabecalho';
import VideoCarrossel from './componentes/destaque';
import Modal from './componentes/modal';
import VideoSection from './componentes/videosection';
import Footer from './componentes/footer';
import './styles/video.css';

function App() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [videosData, setVideosData] = useState([
        {
            id: 1,
            title: 'Teste Alura',
            description: 'Video promocional Alura',
            videoId: 'nbcPBKqFGXU'
        },
        {
            id: 2,
            title: 'Título do Vídeo 2',
            description: 'Descrição do Vídeo 2',
            videoId: 'VIDEO_ID_2'
        },
    ]);

    const abrirFormulario = () => {
        setMostrarFormulario(true);
    };

    const fecharFormulario = () => {
        setMostrarFormulario(false);
    };

    const adicionarVideo = (formData) => {
        const newId = videosData.length + 1;
        const videoId = formData.videoUrl.split('v=')[1];
        const newVideo = {
            id: newId,
            title: formData.title,
            description: formData.description,
            videoId: videoId
        };
        setVideosData([...videosData, newVideo]);
        fecharFormulario();
    };

    const excluirVideo = (id) => {
        const filteredVideos = videosData.filter(video => video.id !== id);
        setVideosData(filteredVideos);
    };

    return (
        <div className="App">
            <Cabecalho onNovoVideoClick={abrirFormulario} />
            <VideoCarrossel videos={videosData} />
            <VideoSection videos={videosData} onDelete={excluirVideo} />
            {mostrarFormulario && <Modal onClose={fecharFormulario} adicionarVideo={adicionarVideo} />}
            <Footer />
        </div>
    );
}

export default App;
