import React from 'react';
import Navbar from './NavBar';

const HomePage = () => {
  return (
    <div className="bg-[#081F41] min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <header className="text-center py-24 px-6">
        <h1 className="text-5xl font-extrabold mb-4 text-white">
          Home Service
        </h1>
        <p className="text-xl text-gray-300 max-w-xl mx-auto mb-8">
          Conecta con profesionales verificados para cualquier necesidad en tu hogar u oficina.
        </p>
        <button className="bg-[#0052CC] hover:bg-[#00C6A0] text-white px-8 py-3 rounded-full font-semibold shadow transition duration-200">
          Ver Profesionales
        </button>
      </header>

      {/* Servicios Destacados */}
      <section className="py-20 px-6 bg-white rounded-t-3xl shadow-inner">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Servicios Populares</h2>
          <p className="text-gray-600">Profesionales altamente calificados listos para ayudarte</p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { title: 'Plomería', icon: '🛠️', color: 'bg-[#0052CC]' },
            { title: 'Electricidad', icon: '💡', color: 'bg-[#00C6A0]' },
            { title: 'Limpieza', icon: '🧼', color: 'bg-[#66B2FF]' }
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-tr from-white to-gray-50 border border-gray-200 rounded-2xl shadow hover:shadow-md p-8 transition-all duration-200"
            >
              <div className={`text-5xl mb-4 inline-block p-4 rounded-full ${service.color} text-white`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">Encuentra expertos con experiencia comprobada.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-200">Valoraciones reales de personas que confiaron en nuestros servicios</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { name: 'María G.', comment: 'Excelente servicio, muy recomendable.' },
            { name: 'Carlos P.', comment: 'Rápido y profesional. Sin dudas volvería a contratar.' },
            { name: 'Lucía R.', comment: 'Me resolvieron un problema que llevaba semanas sin solución.' }
          ].map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 border-t-4 border-[#00C6A0]"
            >
              <p className="text-gray-700 italic mb-3">“{review.comment}”</p>
              <p className="text-sm font-medium text-gray-800">– {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <footer className="bg-gradient-to-r from-[#0052CC] to-[#00C6A0] py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para encontrar al profesional ideal?</h2>
        <p className="mb-6">Únete hoy y accede a una red de expertos confiables</p>
        <button className="bg-[#66B2FF] text-[#081F41] font-semibold px-6 py-3 rounded-full hover:bg-[#00C6A0] hover:text-white transition">
          Crear cuenta
        </button>
      </footer>
    </div>
  );
};

export default HomePage;
