import './cabecalho.css'
import hexToRgba from 'hex-to-rgba'

function Cabecalho(){
    const corBack = "#000000"
    return(
        <header className='cabecalho' style={{backgroundColor: hexToRgba(corBack, '0.85')}}>
            <div className='div_image'>
                <img src='/imagens/AluraFlixLogo.png'/>
            </div>

            <div className='div_button'>
                <button>Home</button>
                <button>Novo Vídeo</button>
            </div>

            
        </header>

    )
}

export default Cabecalho;