import React from 'react';
import NavBar from '../components/NavBar'; // Ajusta la ruta si es necesario
import { useNavigate } from 'react-router-dom';


const OpcionesMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#081F41] min-h-screen">
      <NavBar />
      <div className="flex flex-col items-center justify-center mt-24 px-4">
        <h1 className="text-3xl font-bold text-white mb-8">Menú de Opciones</h1>
        <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-xs space-y-4 border border-blue-800">
          <button
            className="w-full bg-[#0052CC] text-white py-2 rounded-md hover:bg-[#00C6A0] transition font-semibold border border-blue-800"
            onClick={() => navigate('/crear-post')}
          >
            Crear Post
          </button>
          <button
            className="w-full bg-[#0052CC] text-white py-2 rounded-md hover:bg-[#00C6A0] transition font-semibold border border-blue-800"
            onClick={() => navigate('/editar-post')}
          >
            Editar Post
          </button>
          <button
            className="w-full bg-[#0052CC] text-white py-2 rounded-md hover:bg-[#00C6A0] transition font-semibold border border-blue-800"
            onClick={() => navigate('/borrar-post')}
          >
            Borrar Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpcionesMenu;
