import React, { useState } from 'react';
import './modal.css';

const Modal = ({ onClose, adicionarVideo }) => {
    const [formData, setFormData] = useState({
        videoUrl: '',
        title: '',
        description: '',
        destaque: false,
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        adicionarVideo(formData);
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Adicionar Novo Vídeo</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="URL do Vídeo do YouTube"
                        name="videoUrl"
                        value={formData.videoUrl}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Título"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                    <textarea
                        placeholder="Descrição"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    ></textarea>
                    <div className="checkbox-container">
                        <label>
                            <input
                                type="checkbox"
                                name="destaque"
                                checked={formData.destaque}
                                onChange={handleInputChange}
                            />
                            Destaque
                        </label>
                    </div>
                    <button type="submit">Adicionar Vídeo</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
