import React from 'react';
import Navbar from './NavBar';

const RegisterForm = () => {
  return (
    <div className="bg-[#081F41] min-h-screen ">
      <Navbar />
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 mt-10 align-center mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Registro</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">Nombre</label>
            <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]" placeholder="Gonzalo" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">Apellido</label>
            <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]" placeholder="Martínez" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]" placeholder="gmartinez@gmail.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">Teléfono</label>
            <input type="tel" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]" placeholder="+54 9 1145632478" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">DNI</label>
            <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]" placeholder="34989634" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">Contraseña</label>
            <input type="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C6A0]" placeholder="********" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">Repetir Contraseña</label>
            <input type="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C6A0]" placeholder="********" />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0052CC] text-white py-2 rounded-md hover:bg-[#00C6A0] transition font-semibold"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
