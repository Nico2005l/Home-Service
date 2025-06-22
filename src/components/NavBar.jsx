import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Mercado', to: '/mercado' },
    { label: 'Mis Posteos', to: '/posteos' },
    { label: 'Contacto', to: '/contacto' },
    { label: 'Perfil', to: '/perfil' },
];

// Verifica si el usuario está autenticado
const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        const handleStorageChange = () => {
            setIsAuthenticated(!!localStorage.getItem('token'));
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const [active, setActive] = useState(null);

    const [menuOpen, setMenuOpen] = useState(false);

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

                {/* Hamburger menu button */}
                <button
                    className="md:hidden ml-auto text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                        )}
                    </svg>
                </button>

                {/* Navegación */}
                <div
                    className={`
                        flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-6
                        ${menuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto mt-4 md:mt-0
                    `}
                >
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            onMouseEnter={() => setActive(idx)}
                            onMouseLeave={() => setActive(null)}
                            className={`text-sm relative transition-colors duration-300 
                                ${active === idx ? 'text-[#00C6A0]' : 'text-white'} 
                                hover:text-[#00C6A0]`}
                            onClick={() => setMenuOpen(false)}
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
                <div
                    className={`
                        flex-col md:flex-row md:flex items-center space-y-2 md:space-y-0 md:space-x-2
                        ${menuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto mt-4 md:mt-0
                    `}
                >
                    {!isAuthenticated && (
                        <>
                            <Link to="/login" onClick={() => setMenuOpen(false)}>
                                <button
                                    className="px-3 py-1 text-sm rounded-md bg-[#0052CC] text-white 
                                        hover:bg-[#00C6A0] hover:scale-105 transition-all duration-300 shadow-md 
                                        focus:outline-none focus:ring-2 focus:ring-[#66B2FF]"
                                >
                                    Iniciar Sesión
                                </button>
                            </Link>
                            <Link to="/registro" onClick={() => setMenuOpen(false)}>
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
