import React from 'react';
import Navbar from './NavBar';
const ChangePasswordForm = () => {
  return (
    <div className="bg-[#081F41] min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full max-w-sm mx-auto mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-950">Cambiar Contraseña</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-blue-950">Nueva Contraseña</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-blue-800 rounded-md bg-gray-100 placeholder:text-grey-400 text-blue-950 focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
              placeholder="************"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-blue-950">Repita la contraseña</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-blue-800 rounded-md bg-gray-100 placeholder:text-grey-400 text-blue-950 focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
              placeholder="************"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0052CC] text-white py-2 rounded-md hover:bg-[#00C6A0] transition"
          >
            Cambiar
          </button>
        </form>
      </div>
    </div>
  );
}


export default ChangePasswordForm;
