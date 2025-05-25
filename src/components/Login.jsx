import React from 'react';

import Navbar from './NavBar';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {

  const navigate = useNavigate();
  return (
    <div className="bg-[#081F41] min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center mt-10">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Inicio de Sesion</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Usuario o email</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="gmartinez@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Contraseña</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0052CC] text-white py-2 rounded-md hover:bg-[#00C6A0] transition"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                
              }}
            >
              Iniciar sesión
            </button>
          </form>

          <div className="text-sm text-center mt-4">
            <p className="text-gray-800">
              Si no te has registrado aun haz{' '}
              <a href="/registro" className="text-[#0052CC] hover:underline">
                click aquí
              </a>.
            </p>
            <p className="mt-2">
              <a href="/recuperar" className="text-[#0052CC] hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default LoginForm;
