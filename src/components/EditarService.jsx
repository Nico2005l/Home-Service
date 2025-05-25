import React from 'react';
import Navbar from './NavBar';

const EditService = () => {
  return (
    <div className="bg-[#081F41] min-h-screen  ">
      <Navbar />
      {/* Sección superior: Datos principales */}
      
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

        {/* Información editable */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4 border border-blue-800">
          {/* Título */}
          <div className="flex flex-col gap-2">
            <label className="text-blue-950 font-semibold" htmlFor="titulo">Título</label>
            <input
              id="titulo"
              type="text"
              className="border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950"
              defaultValue="Plomero"
            />
          </div>

          {/* Precio */}
          <div className="flex flex-col gap-2">
            <label className="text-blue-950 font-semibold" htmlFor="precio">Precio</label>
            <input
              id="precio"
              type="number"
              className="border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950"
              defaultValue={20000}
              min={0}
            />
          </div>

          {/* Descripción */}
          <div className="flex flex-col gap-2">
            <label className="text-blue-950 font-semibold" htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              className="border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950 resize-none"
              rows={3}
              defaultValue="Plomero con 10 años de experiencia con buena disponibilidad y atención"
            />
          </div>

          {/* Tipo de servicio */}
          <div className="flex flex-col gap-2">
            <label className="text-blue-950 font-semibold" htmlFor="tipo-servicio">Tipo de Servicio</label>
            <select
              id="tipo-servicio"
              className="border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950"
              defaultValue="consulta"
            >
              <option value="consulta">Consulta</option>
              <option value="urgente">Urgente</option>
              <option value="programado">Programado</option>
              <option value="emergencia">Emergencia</option>
              <option value="mantenimiento">Mantenimiento</option>
              <option value="reparacion">Reparación</option>
              <option value="instalacion">Instalación</option>
            </select>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-blue-950">Galería</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative bg-gray-100 aspect-square rounded flex items-center justify-center border border-blue-800">
                  <span className="text-blue-950">Imagen</span>
                  <button className="absolute top-2 right-2 bg-[#0052CC] hover:bg-[#00C6A0] text-white text-xs px-2 py-1 rounded transition">
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button className="w-full bg-[#0052CC] hover:bg-[#00C6A0] text-white py-2 rounded transition">
            Cargar Imágenes
          </button>
          <hr />
          {/* Botón guardar cambios */}
          <div className="w-full pt-4">
            <button className="w-full bg-[#0052CC] hover:bg-[#00C6A0] text-white py-3 rounded  transition"
            onClick={() => window.location.href = '/posteos'}>
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditService;
