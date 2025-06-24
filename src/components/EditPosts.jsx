import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2, ArrowLeft } from 'lucide-react';

const EditPosts = () => {
  const [posts, setPosts] = useState([]);
  const [confirmId, setConfirmId] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const isAuthenticated = !!sessionStorage.getItem('token');
  if (!isAuthenticated) {
    window.location.replace('/login');
    return null; // Evita renderizar el componente si no está autenticado
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://home-service-backend-9yhw.onrender.com/api/services');
        const data = await res.json();
        console.log('Post data:', data); // Verifica que los datos se estén obteniendo correctamente
        const filtered = data.filter(post => post.user_id === userId);
        console.log('Filtered posts:', filtered); // Verifica que los posteos filtrados sean correctos
        setPosts(filtered);
      } catch (error) {
        console.error('Error al cargar los posteos', error);
      }
    };
    const fetchUserId = async () => {
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          alert('Debes iniciar sesión para editar o eliminar posteos.');
          return;
        }
        const response = await fetch('https://home-service-backend-9yhw.onrender.com/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Error al obtener el perfil del usuario');
        }
        const data = await response.json();
        console.log('User ID:', data.user.id); // Verifica que el ID del usuario
        setUserId(data.user.id); // Asegúrate de que el ID del usuario esté en esta ruta
      } catch (error) {
        console.error('Error fetching user ID:', error);
        alert('Hubo un problema al obtener tu información de usuario. Por favor, inténtalo de nuevo más tarde.');
      }
    };
    fetchUserId();

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://home-service-backend-9yhw.onrender.com/api/services/${id}`, {
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
      <div className="px-6 mt-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white hover:text-[#00C6A0] transition"
        >
          <ArrowLeft className="mr-2" />
          Volver
        </button>
      </div>

      <h2 className="text-3xl font-semibold text-white p-6 mt-2">Editar / Eliminar Posteos</h2>

      <div className="bg-white p-6 rounded-lg shadow-md m-6 mt-3 mb-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="relative border rounded-lg bg-[#081F41] p-2">
              <div className="aspect-square bg-gray-300 flex items-center justify-center rounded overflow-hidden">
                {post.images && post.images.length > 0 ? (
                  <img
                    src={post.images[0] || "/media/placeholder1.webp"}
                    alt="Imagen del servicio"
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <span className="text-blue-950 font-semibold text-sm">Sin imagen</span>
                )}
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
