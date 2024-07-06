import React from 'react';
import './cabecalho.css';
import hexToRgba from 'hex-to-rgba';

function Cabecalho({ onNovoVideoClick }) {
    const corBack = "#000000";
    
    return (
        <header className='cabecalho' style={{ backgroundColor: hexToRgba(corBack, '0.85') }}>
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
