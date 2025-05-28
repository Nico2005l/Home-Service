import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#081F41] min-h-screen">
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center" style={{ background: '#081F41' }}>
                
                <div
                    className="p-8 rounded-lg shadow-lg flex flex-col items-center"
                    style={{
                        background: '#FFFFFF',
                        border: '2px solid #0052CC',
                    }}
                >
                    <h1 className="text-6xl font-extrabold mb-4" style={{ color: '#FFFFFF', WebkitTextStroke: '2px #0052CC' }}>
                        404
                    </h1>
                    <h2 className="text-2xl font-semibold mb-2" style={{ color: '#081F41' }}>
                        Página no encontrada
                    </h2>
                    <p className="mb-6" style={{ color: '#081F41' }}>
                        La página que estás buscando no existe o ha sido movida.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 rounded-lg font-medium shadow-md transition"
                        style={{
                            background: '#0052CC',
                            color: '#FFFFFF',
                            border: 'none',
                        }}
                        onMouseOver={e => (e.currentTarget.style.background = '#00C6A0')}
                        onMouseOut={e => (e.currentTarget.style.background = '#0052CC')}
                    >
                        Volver al Inicio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
