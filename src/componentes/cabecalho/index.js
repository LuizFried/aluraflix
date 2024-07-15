import React from 'react';
import './cabecalho.css';


function Cabecalho({ onNovoVideoClick }) {
    
    
    return (
        <header className='cabecalho'>
            <div className='div_image'>
                <img src='/imagens/AluraFlixLogo.png' alt="Logo" />
            </div>

            <div className='div_button'>
                <button>Home</button>
                <button onClick={onNovoVideoClick}>Novo Vídeo</button>
            </div>
        </header>
    );
}

export default Cabecalho;
