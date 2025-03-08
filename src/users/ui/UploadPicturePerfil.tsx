import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProfilePhotoUpload() {
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert('Por favor, selecciona una imagen primero.');
      return;
    }

    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('No se pudo encontrar el ID del usuario en el localStorage.');
      return;
    }

    const formData = new FormData();
    formData.append('profile_picture', selectedFile);

    try {
      const response = await axios.put(`http://3.81.192.82:3000/v1/users/upload-picture/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('¡Foto de perfil subida exitosamente!');
      navigate('/allUsers');
      
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error('Error al subir la foto de perfil:', error);
      alert('Error al subir la foto de perfil. Inténtalo nuevamente.');
    }
  };
  
  return (
    <main className='hero'>
      <div className="flex flex-col items-center justify-center p-8 max-w-md mx-auto h-[850px]">
        <h1 className="text-2xl font-medium text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Solo un paso más</h1>
        <h2 className="text-lg text-gray-600 text-center mb-8">Sube tu foto de perfil</h2>
        
        <div 
          className="w-48 h-48 rounded-full flex items-center justify-center mb-6 cursor-pointer overflow-hidden relative border-2 border-dashed border-purple-300 hover:border-purple-500 transition-colors"
          onClick={triggerFileInput}
          style={{
            background: previewImage ? 'none' : 'linear-gradient(to right, #f7f7f7, #eaeaea)'
          }}
        >
          {previewImage ? (
            <img 
              src={previewImage} 
              alt="Vista previa" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-4">
              <svg className="w-16 h-16 text-purple-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-gray-500 text-center">Haz clic para seleccionar una imagen</p>
            </div>
          )}
          
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleImageChange} 
            accept="image/*" 
            className="hidden"
          />
        </div>
        
        <button 
          className={`px-6 py-3 rounded-full text-white font-medium transition-all ${
            previewImage 
              ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-md hover:from-blue-600 hover:to-pink-600' 
              : 'bg-gray-300 cursor-default'
          }`}
          onClick={handleSubmit}
          disabled={!previewImage}
        >
          {previewImage ? 'Guardar foto de perfil' : 'Selecciona una foto'}
        </button>
        
        {!previewImage && (
          <p className="text-xs text-gray-500 mt-4 text-center max-w-xs">
            Sube una imagen que muestre claramente tu rostro para una mejor experiencia
          </p>
        )}
      </div>
    </main>
  );
}

export default ProfilePhotoUpload;
