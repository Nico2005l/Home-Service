import React from 'react';
import NavBar from '../components/NavBar'; // ajusta la ruta si es necesario

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};


const ContactPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login'); // Redirige a la página de login
        }
    }, [navigate]);
    return (
        <div className="bg-[#081F41] min-h-screen">
            <NavBar />
            <div className="container mx-auto p-6 bg-white rounded-lg shadow-md mt-10 justify-items-center w-fit m-4">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Contacto
                </h1>
                <div className="grid md:grid-cols-2 gap-8 w-fit mb-8">
                    <div className="space-y-3">
                        <h2 className="text-xl font-semibold text-gray-800">Información de contacto</h2>
                        <p className="text-gray-800">
                            📍 Dirección: Calle Ficticia 1234, Ciudad Ejemplo, País
                        </p>
                        <p className="text-gray-800">📞 Teléfono: +54 11 5555 1234</p>
                        <p className="text-gray-800">📧 Email: contacto@ejemplo.com</p>
                        <p className="text-gray-800">🕒 Horario: Lunes a Viernes, 9:00 - 18:00</p>
                    </div>
                    <form className="space-y-5">
                        <div>
                            <label className="text-sm font-medium text-gray-800">Nombre</label>
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                className="mt-1 w-full border border-blue-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#0052CC] bg-blue-50 text-gray-800"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-800">Email</label>
                            <input
                                type="email"
                                placeholder="tucorreo@ejemplo.com"
                                className="mt-1 w-full border border-blue-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#0052CC] bg-blue-50 text-gray-800"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-800">Mensaje</label>
                            <textarea
                                rows="4"
                                placeholder="Escribe tu mensaje aquí..."
                                className="mt-1 w-full border border-blue-800 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#0052CC] bg-blue-50 text-gray-800"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#0052CC] text-white rounded-md py-2 hover:bg-[#00C6A0] transition font-semibold"
                            onClick={(e) => {
                                e.preventDefault();
                                // Aquí puedes agregar la lógica para enviar el formulario
                                alert('Mensaje enviado');
                            }}
                        >
                            Enviar
                        </button>
                    </form>
                </div>
                <p className="text-center text-gray-800">
                    ¿Tienes alguna consulta? Completa el formulario y nos pondremos en contacto.
                </p>
            </div>
        </div>
    );
};

export default ContactPage;
