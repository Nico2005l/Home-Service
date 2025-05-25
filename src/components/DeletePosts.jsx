import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const mockPosts = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Ingrese el Título`,
  image: '', // Aquí podrías poner una URL real si las tienes
}));

const DeletePosts = () => {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleDelete = () => {
    // Aquí va la lógica para eliminar
    alert(`Eliminando posts con ID: ${selected.join(', ')}`);
  };

  return (
    <div className="bg-[#081F41] min-h-screen ">
      <NavBar />
      <h2 className="text-2xl font-semibold text-white p-6 mt-2">Eliminar Publicaciones</h2>

      <div className="bg-white p-6 rounded-lg shadow-md m-6 mt-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6 ">
        {mockPosts.map((post) => (
          <div
            key={post.id}
            className={`relative border rounded-lg p-2 transition cursor-pointer ${
              selected.includes(post.id)
                ? 'ring-2 ring-[#00C6A0] bg-[#081F41] '
                : 'bg-[#081F41]'
            }`}
            onClick={() => toggleSelect(post.id)}
          >
            <div className="aspect-square bg-grey-400 flex items-center justify-center rounded">
              <span className="text-white text-sm">Imagen</span>
            </div>
            <div className="mt-2 text-lg text-center text-white">{post.title}</div>
            <button
              type="button"
              className={`absolute top-2 right-2 text-xs px-2 py-1 rounded transition
                ${selected.includes(post.id)
                  ? 'bg-[#00C6A0] text-white hover:bg-teal-500'
                  : 'bg-[#0052CC] text-white hover:bg-blue-400'}
              `}
              onClick={(e) => {
                e.stopPropagation();
                toggleSelect(post.id);
              }}
            >
              {selected.includes(post.id) ? 'Cancelar' : 'Eliminar'}
            </button>
          </div>
        ))}
        
       
      </div>

       <button
          className="w-full bg-[#0052CC] text-white py-3 rounded hover:bg-[#00C6A0] transition "
          disabled={selected.length === 0}
          onClick={handleDelete}
        >
          Confirmar Eliminación
        </button>
        </div>
    </div>
  );
};

export default DeletePosts;
