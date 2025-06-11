import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Mercado', to: '/mercado' },
    { label: 'Mis Posteos', to: '/posteos' },
    { label: 'Contacto', to: '/contacto' },
    { label: 'Perfil', to: '/perfil' },
];


const Navbar = () => {
    const [active, setActive] = useState(null);

    const isAuthenticated = !!localStorage.getItem("token");

    return (
        <nav className="bg-[#081F41] p-4 shadow-md sticky top-0 z-50">
            <div className="mx-auto flex justify-between items-center flex-wrap">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            src="/media/Captura de pantalla 2025-05-24 200559.png"
                            alt="Logo"
                            className="h-10 w-10 mr-2 rounded-2xl"
                        />
                    </Link>
                    <span className="text-white text-lg font-bold">Home Service</span>
                </div>

                {/* Navegación */}
                <div className="flex items-center space-x-6">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            onMouseEnter={() => setActive(idx)}
                            onMouseLeave={() => setActive(null)}
                            className={`text-sm relative transition-colors duration-300 
                                ${active === idx ? 'text-[#00C6A0]' : 'text-white'} 
                                hover:text-[#00C6A0]`}
                        >
                            <span
                                className={`transition-all duration-300 ${
                                    active === idx ? 'underline underline-offset-4 decoration-2' : ''
                                }`}
                            >
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Botones de acción */}
                <div className="flex items-center space-x-2">
                    {!isAuthenticated && (
                        <>
                            <Link to="/login">
                                <button
                                    className="px-3 py-1 text-sm rounded-md bg-[#0052CC] text-white 
                                        hover:bg-[#00C6A0] hover:scale-105 transition-all duration-300 shadow-md 
                                        focus:outline-none focus:ring-2 focus:ring-[#66B2FF]"
                                >
                                    Iniciar Sesión
                                </button>
                            </Link>
                            <Link to="/registro">
                                <button
                                    className="px-3 py-1 text-sm rounded-md bg-[#0052CC] text-white 
                                        hover:bg-[#00C6A0] hover:scale-105 transition-all duration-300 shadow-md 
                                        focus:outline-none focus:ring-2 focus:ring-[#66B2FF]"
                                >
                                    Registro
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
