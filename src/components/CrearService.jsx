import React from 'react';
import NavBar from '../components/NavBar';

const CreateService = () => {
  return (
    <div className="bg-[#081F41] min-h-screen">
      <NavBar />

      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <h1 className="text-3xl font-bold text-blue-950 mb-6">Crear Posteo</h1>
        <form className="grid md:grid-cols-2 gap-8 items-start">

          {/* Imagen principal */}
          <div className="space-y-4">
            <div className="relative w-full aspect-square bg-blue-950 rounded-md flex items-center justify-center border border-blue-800">
              <span className="text-blue-400">Previsualización</span>
              <button
                type="button"
                className="absolute top-2 left-2 bg-[#0052CC] text-white text-xs px-2 py-1 rounded transition-colors duration-200 hover:bg-[#00C6A0]"
              >
                Elegir Imagen
              </button>
            </div>
          </div>

          {/* Formulario */}
          <div className="space-y-4">
            <div>
              <label className="text-sm text-blue-950 block mb-1">Título del Servicio</label>
              <input
                type="text"
                placeholder="Ingrese el Título"
                className="w-full border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950 placeholder:text-grey-400"
              />
            </div>

            <div>
              <label className="text-sm text-blue-950 block mb-1">Precio</label>
              <input
                type="number"
                placeholder="Ingrese el Precio"
                className="w-full border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950 placeholder:text-grey-400"
              />
            </div>

            <div>
              <label className="text-sm text-blue-950 block mb-1">Descripción</label>
              <textarea
                placeholder="Ingrese la Descripción"
                className="w-full border border-blue-800 rounded px-3 py-2 resize-none h-24 bg-gray-100 text-blue-950 placeholder:text-grey-400"
              />
            </div>

            <div>
              <label className="text-sm text-blue-950 block mb-1">Imágenes adicionales</label>
              <button
                type="button"
                className="w-full bg-[#0052CC] text-white py-2 rounded transition-colors duration-200 hover:bg-[#00C6A0]"
              >
                Cargar Imágenes
              </button>
            </div>

            <div>
              <label className="text-sm text-blue-950 block mb-1">Tipo de Servicio</label>
              <select className="w-full border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950">
                <option value="">Seleccione un tipo</option>
                <option value="plomeria">Plomería</option>
                <option value="electricista">Electricista</option>
                <option value="limpieza">Limpieza</option>
                <option value="jardineria">Jardinería</option>
                <option value="otros">Otros</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#0052CC] text-white py-3 rounded transition-colors duration-200 hover:bg-[#00C6A0]"
              >
                Crear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


export default CreateService;


