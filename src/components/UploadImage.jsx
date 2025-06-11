import React, { useState, useRef } from 'react';

const UploadImage = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('http://localhost:3000/api/services/upload-image', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        setError('❌ Error al subir imagen.');
        return;
      }

      onUpload(data.url);
    } catch (err) {
      console.error('Error al subir imagen:', err);
      setError('❌ Error al conectar con el servidor.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2 relative w-full">
      {/* Vista previa */}
      <div className="relative aspect-square w-full bg-gray-300 border border-blue-900 rounded-md overflow-hidden flex items-center justify-center">
        {preview ? (
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <span className="text-blue-900">Sin imagen</span>
        )}

        {/* Botón visual */}
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          className="absolute top-2 left-2 bg-[#0052CC] hover:bg-[#00C6A0] text-white px-3 py-1 text-sm rounded"
        >
          Cambiar imagen
        </button>
      </div>

      {/* Input oculto */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {uploading && <p className="text-white">Subiendo imagen...</p>}
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default UploadImage;
