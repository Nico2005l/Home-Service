import React from "react";
import Navbar from "./NavBar";

const reviews = [
  {
    stars: 5,
    title: "Excelente",
    body: "Muy buen servicio, recomendado al 100%",
    user: "María Gimenez",
    date: "15/7/24",
  },
  {
    stars: 5,
    title: "Buena atención",
    body: "",
    user: "Natalia Cordero",
    date: "Date",
  },
  {
    stars: 5,
    title: "Excelente",
    body: "Muy buen servicio, recomendado al 100%",
    user: "Marcela Gomez",
    date: "18/9/24",
  },
  {
    stars: 4,
    title: "Muy bueno",
    body: "Me atendió muy bien",
    user: "Martín García",
    date: "9/12/24",
  },
  {
    stars: 3,
    title: "Review title",
    body: "Review body",
    user: "Gerardo Rey",
    date: "13/4/25",
  },
];

const ServiceProfile = () => {
  return (
    <div className="bg-[#081F41] min-h-screen">
      <Navbar />
      {/* Perfil */}
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4 m-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
            alt="Mario"
            className="w-48 mx-auto rounded-lg shadow-md border-4 border-blue-800"
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
      </div>
    </div>
  );
};

export default ServiceProfile;
