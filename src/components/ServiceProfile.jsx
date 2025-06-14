import React from "react";
import Navbar from "./NavBar";
import { useState, useEffect, us } from "react";
import { useParams } from "react-router-dom";



const ServiceProfile = () => {
  const [service, setService] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchService = async () => {
      const response = await fetch(`http://localhost:3000/api/services/${id}`);
      const data = await response.json();
      setService(data);
    };
    fetchService();
  }, [id]);

  if (!service) return <div>Cargando...</div>;

  return (
    <div className="bg-[#081F41] min-h-screen">
      <Navbar />
      {/* Perfil */}
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4 m-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img
            src="/media/OIP.jpg"
            alt="Mario"
            className="w-48 mx-auto rounded-lg shadow-md border-4 border-blue-800 scale-3d"
          />
          <div className="space-y-2">
            <h2 className="text-blue-950 text-3xl">Plomero</h2>
            <span className="bg-[#00C6A0] text-white text-xs font-semibold px-2 py-1 rounded">
              Consulta
            </span>
            <p className="text-5xl font-bold mt-2 text-blue-950">$20000</p>
            <p className="text-sm text-gray-400">
              Plomero con 10 años de experiencia con buena disponibilidad y atención
            </p>
            <button className="mt-4 w-full bg-[#0052CC] text-white py-2 px-4 rounded hover:bg-[#00C6A0] transition">
              Contratar
            </button>
          </div>
        </div>

        {/* Galería de imágenes (placeholders) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-full h-44 bg-gray-100 rounded flex items-center justify-center text-gray-400 border border-blue-800"
            >
              Imagen
            </div>
          ))}
        </div>

        

        {/* Reseñas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border border-blue-800 rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-1 text-yellow-500 mb-2">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - review.stars }).map((_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>
              <h3 className="font-semibold text-blue-950">{review.title}</h3>
              <p className="text-sm text-gray-400">{review.body}</p>
              <div className="mt-3 text-xs text-gray-500">
                <p>{review.user}</p>
                <p>{review.date}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Botón para dejar reseña */}
        <div className="flex justify-center mt-6 w-full">
          <button className="bg-[#0052CC] text-white px-4 py-2 rounded font-semibold hover:bg-[#00C6A0] transition w-fit"
            onClick={() => window.location.href = "/review"}>
            Cuentanos tu experiencia
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceProfile;
