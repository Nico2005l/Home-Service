import React, { useState } from 'react';

const UploadImage = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file)); // Vista previa local
    setUploading(true);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('http://localhost:3000/api/services/upload-image', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.url) {
        onUpload(data.url); // callback al padre para guardar la URL
      } else {
        console.error('Error en respuesta:', data);
      }
    } catch (error) {
      console.error('Error al subir imagen:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded border" />
      )}
      {uploading && <p className="text-white">Subiendo imagen...</p>}
    </div>
  );
};

export default UploadImage;
