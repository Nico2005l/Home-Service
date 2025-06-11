import React, { useState } from 'react';
import Navbar from './NavBar';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    dni: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.repeatPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          apellido: form.apellido,
          email: form.email,
          telefono: form.telefono,
          dni: form.dni,
          password: form.password,
        }),
      });
      if (res.ok) {
        navigate('/login');
      } else {
        const data = await res.json();
        alert(data.message || 'Error en el registro');
      }
    } catch (err) {
      alert('Error de conexión');
    }
  };

  return (
    <div className="bg-[#081F41] min-h-screen ">
      <Navbar />
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 mt-10 align-center mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Registro</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
              placeholder="Gonzalo"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">Apellido</label>
            <input
              type="text"
              name="apellido"
              value={form.apellido}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
              placeholder="Martínez"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
              placeholder="gmartinez@gmail.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
              placeholder="+54 9 1145632478"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">DNI</label>
            <input
              type="text"
              name="dni"
              value={form.dni}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
              placeholder="34989634"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">Contraseña</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C6A0]"
              placeholder="********"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800">Repetir Contraseña</label>
            <input
              type="password"
              name="repeatPassword"
              value={form.repeatPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C6A0]"
              placeholder="********"
              required
            />
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


/*
Color Palette used in this component:

- Dark Blue (background): #081F41
- Blue (button, focus ring): #0052CC
- Teal/Green (button hover, focus ring): #00C6A0
- White (card background): #FFFFFF
- Gray (text): #808080, #4B5563 (Tailwind's text-gray-800)

You can adjust or expand this palette as needed for your design.
*/