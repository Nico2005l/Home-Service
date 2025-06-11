import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';

const EditPosts = () => {
  const [posts, setPosts] = useState([]);
  const [confirmId, setConfirmId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/services');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error al cargar los posteos', error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/services/${id}`, {
        method: 'DELETE'
      });
      setPosts(prev => prev.filter(post => post.id !== id));
      setConfirmId(null);
    } catch (error) {
      console.error('Error al borrar posteo', error);
    }
  };

  return (
    <div className="bg-[#081F41] min-h-screen">
      <NavBar />
      <h2 className="text-3xl font-semibold text-white p-6 mt-2">Editar / Eliminar Posteos</h2>

      <div className="bg-white p-6 rounded-lg shadow-md m-6 mt-3 mb-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="relative border rounded-lg bg-[#081F41] p-2">
              <div className="aspect-square bg-gray-300 flex items-center justify-center rounded">
                <span className="text-blue-950 font-semibold text-sm">Imagen</span>
              </div>
              <div className="mt-2 text-white text-center">{post.name}</div>

              {/* Botón Editar */}
              <button
                className="absolute top-2 left-2 bg-[#0052CC] hover:bg-[#00C6A0] text-white p-1 rounded-full"
                onClick={() => navigate(`/editar-post/${post.id}`)}

              >
                <Pencil size={16} />
              </button>

              {/* Botón Eliminar */}
              <button
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-800 text-white p-1 rounded-full"
                onClick={() => setConfirmId(post.id)}
              >
                <Trash2 size={16} />
              </button>

              {/* Confirmación de borrado */}
              {confirmId === post.id && (
                <div className="absolute bottom-2 left-2 right-2 bg-white text-black text-xs p-2 rounded shadow">
                  <p>¿Borrar este posteo?</p>
                  <div className="flex justify-between mt-1">
                    <button onClick={() => handleDelete(post.id)} className="text-red-600 font-bold">Sí</button>
                    <button onClick={() => setConfirmId(null)} className="text-gray-600">Cancelar</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditPosts;
