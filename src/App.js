import React, { useState } from 'react';
import Cabecalho from './componentes/cabecalho';
import VideoCarrossel from './componentes/destaque';
import Modal from './componentes/modal';

function App() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [videosData, setVideosData] = useState([
        {
            id: 1,
            title: 'Teste Alura',
            description: 'Video promocional Alura',
            videoId: 'nbcPBKqFGXU' // Exemplo de videoId correto de um vídeo do YouTube
        },
        {
            id: 2,
            title: 'Título do Vídeo 2',
            description: 'Descrição do Vídeo 2',
            videoId: 'VIDEO_ID_2' // Coloque o videoId correto ou ajuste na função adicionarVideo
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

    return (
        <div className="App">
            <Cabecalho onNovoVideoClick={abrirFormulario} />
            <VideoCarrossel videos={videosData} />
            {mostrarFormulario && <Modal onClose={fecharFormulario} adicionarVideo={adicionarVideo} />}
        </div>
    );
}

export default App;
