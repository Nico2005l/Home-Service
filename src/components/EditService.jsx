import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './NavBar';

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      console.log('[FRONT] Fetching post with ID:', id);
      try {
        const res = await fetch(`http://localhost:3000/api/services/${id}`);
        if (!res.ok) {
          throw new Error('No se encontró el servicio');
        }
        const data = await res.json();
        console.log('[FRONT] Datos recibidos:', data);
        setPost(data);
      } catch (err) {
        console.error('[FRONT] Error al obtener post:', err);
        setError('No se pudo cargar el servicio');
      }
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    if (!post.name || !post.price || !post.description || !post.category) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    try {
      await fetch(`http://localhost:3000/api/services/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });
      navigate('/editar-posts');
    } catch (err) {
      alert('Error al actualizar');
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

  if (!post) {
    return <p className="text-white p-6">Cargando...</p>;
  }

  return (
    <div className="bg-[#081F41] min-h-screen">
      <Navbar />
      <h2 className="text-3xl font-semibold p-6 pb-0 text-white">Editar Post</h2>
      <div className="grid md:grid-cols-2 gap-8 items-start p-6">
        {/* Imagen principal */}
        <div className="space-y-4">
          <div className="relative w-full aspect-square bg-gray-100 rounded-md flex items-center justify-center border border-blue-800">
            <span className="text-blue-950">Imagen principal</span>
            <button className="absolute top-2 left-2 bg-[#0052CC] hover:bg-[#00C6A0] text-white text-md px-2 py-1 rounded transition">
              Cambiar
            </button>
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

          {/* Galería simulada */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-blue-950">Galería</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative bg-gray-100 aspect-square rounded flex items-center justify-center border border-blue-800">
                  <span className="text-blue-950">Imagen</span>
                  <button className="absolute top-2 right-2 bg-[#0052CC] hover:bg-[#00C6A0] text-white text-xs px-2 py-1 rounded transition">
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full bg-[#0052CC] hover:bg-[#00C6A0] text-white py-2 rounded transition mt-2">
              Cargar Imágenes
            </button>
          </div>

          {/* Guardar */}
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
