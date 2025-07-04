import React from "react";
import Navbar from "./NavBar";
import { useState, useEffect, us } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../utils/backendURL"; // Importa la URL del backend


const ServiceProfile = () => {
  const [service, setService] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {

    const reviews = async () => {
      const response = await fetch(`${BACKEND_URL}/api/reviews/service/${id}`);
      const data = await response.json();
      console.log("Reviews data:", data);
      setReviews(data);
    };
    reviews();

    const fetchService = async () => {
      const response = await fetch(`${BACKEND_URL}/api/services/${id}`);
      const data = await response.json();

      console.log("Service data:", data.images);

      setService(data);
    };
    fetchService();
    setLoading(false);

  }, [id]);

  if (!service) return <div>Cargando...</div>;

  return (
    <div className="bg-[#081F41] min-h-screen">
      <Navbar />
      {/* Perfil */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4 m-4 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg">
            <img
          src={
            Array.isArray(service.images) && service.images.length > 0
              ? service.images[0]
              : "/media/placeholder1.webp"
          }
          alt="image"
          className="w-full h-64 object-scale-down rounded-lg bg-white"
            />
            <div className="space-y-2">
          <h2 className="text-blue-950 text-3xl capitalize">{service.name}</h2>
          <hr />
          <span className="bg-[#00C6A0] text-white text-xs capitalize font-semibold px-2 py-1 rounded">
            {service.category}
          </span>
          <p className="text-5xl font-bold mt-2 text-blue-950">${service.price}</p>
          <p className="text-sm text-gray-400">
            {service.description}
          </p>
          <button
            className="mt-4 w-full bg-[#0052CC] text-white py-2 px-4 rounded hover:bg-[#00C6A0] transition"
            onClick={() => {
              if (window.confirm("¿Deseas contratar este servicio? Se enviará tu información de contacto al proveedor.")) {
            window.alert("¡Listo! Se le envió tu información de contacto al mail del proveedor.");
              }
            }}
          >
            Contratar
          </button>
            </div>
          </div>

          
          <div className="mt-6">
            <hr />
          </div>
          

          {/* Reseñas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {reviews.map((review, index) => (
            <div key={review.id || index} className="bg-white border border-blue-800 rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-1 text-yellow-500 mb-2">
                {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {review.rating % 1 !== 0 && <span key="half" className="text-yellow-400">☆</span>}
                {Array.from({ length: 5 - Math.ceil(review.rating) }).map((_, i) => (
                  <span key={i + 10} className="text-gray-300">★</span>
                ))}
              </div>
              <h3 className="font-semibold text-blue-950">Usuario Anónimo</h3>
              <p className="text-sm text-gray-400">{review.comment}</p>
              <div className="mt-3 text-xs text-gray-500">
                <p>{new Date(review.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 w-full">
          <button className="bg-[#0052CC] text-white px-4 py-2 rounded font-semibold hover:bg-[#00C6A0] transition w-fit"
            onClick={() => window.location.href = "/review/" + id}>
            Cuentanos tu experiencia
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceProfile;
