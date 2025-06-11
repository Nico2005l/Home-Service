import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import { ArrowLeft } from 'lucide-react';

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const [post, setPost] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [newImageFile, setNewImageFile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/services/${id}`);
        if (!res.ok) throw new Error('No se encontró el servicio');
        const data = await res.json();
        setPost(data);
        if (data.images?.[0]) setImagePreview(data.images[0]);
      } catch (err) {
        setError('No se pudo cargar el servicio');
      }
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImagePreview(URL.createObjectURL(file));
    setNewImageFile(file);
  };

  const handleUpdate = async () => {
    if (!post.name || !post.price || !post.description || !post.category) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    let updatedImageUrl = post.images?.[0] || null;

    if (newImageFile) {
      const formData = new FormData();
      formData.append('image', newImageFile);

      try {
        const res = await fetch('http://localhost:3000/api/services/upload-image', {
          method: 'POST',
          body: formData
        });
        const data = await res.json();
        if (data.url) updatedImageUrl = data.url;
        else throw new Error();
      } catch {
        alert('Error al subir la nueva imagen.');
        return;
      }
    }

    try {
      await fetch(`http://localhost:3000/api/services/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...post,
          images: updatedImageUrl ? [updatedImageUrl] : []
        })
      });
      navigate('/editar-posts');
    } catch {
      alert('Error al actualizar el servicio.');
    }
  };

  if (error) {
    return (
      <div className="bg-[#081F41] min-h-screen text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-2">⚠️ {error}</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          Volver atrás
        </button>
      </div>
    );
  }

  if (!post) return <p className="text-white p-6">Cargando...</p>;

  return (
    <div className="bg-[#081F41] min-h-screen">
      <Navbar />
      <div className="px-6 mt-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white hover:text-[#00C6A0] transition"
        >
          <ArrowLeft className="mr-2" />
          Volver
        </button>
      </div>

      <h2 className="text-3xl font-semibold p-6 pb-0 text-white">Editar Post</h2>

      <div className="grid md:grid-cols-2 gap-8 items-start p-6">
        {/* Imagen actual con botón para cambiar */}
        <div className="space-y-4">
          <label className="text-white block mb-1">Imágenes del Servicio</label>
          <div className="relative w-full aspect-square bg-gray-200 rounded-md flex items-center justify-center overflow-hidden border border-blue-800">
            {imagePreview ? (
              <img src={imagePreview} alt="preview" className="w-full h-full object-cover" />
            ) : (
              <span className="text-blue-950">Sin imagen</span>
            )}

            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="absolute top-2 left-2 bg-[#0052CC] hover:bg-[#00C6A0] text-white px-3 py-1 text-sm rounded"
            >
              Cambiar imagen
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4 border border-blue-800">
          <div>
            <label className="text-blue-950 font-semibold">Título</label>
            <input
              name="name"
              value={post.name}
              onChange={handleChange}
              className="w-full border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950"
            />
          </div>

          <div>
            <label className="text-blue-950 font-semibold">Precio</label>
            <input
              name="price"
              type="number"
              value={post.price}
              onChange={handleChange}
              className="w-full border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950"
            />
          </div>

          <div>
            <label className="text-blue-950 font-semibold">Descripción</label>
            <textarea
              name="description"
              value={post.description}
              onChange={handleChange}
              className="w-full border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950 resize-none"
              rows={3}
            />
          </div>

          <div>
            <label className="text-blue-950 font-semibold">Tipo de Servicio</label>
            <input
              name="category"
              value={post.category}
              onChange={handleChange}
              className="w-full border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950"
            />
          </div>

          <div className="pt-4">
            <button
              onClick={handleUpdate}
              className="w-full bg-[#0052CC] hover:bg-[#00C6A0] text-white py-3 rounded transition"
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditService;
