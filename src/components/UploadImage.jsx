import React, { useState } from 'react';

const UploadImage = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

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
    <div className="space-y-2">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-32 h-32 object-cover rounded border"
        />
      )}

      {uploading && <p className="text-white">Subiendo imagen...</p>}
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default UploadImage;
