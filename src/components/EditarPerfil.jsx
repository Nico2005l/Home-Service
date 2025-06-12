import React, { useState, useEffect, use } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavBar';





const EditProfile = () => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const response = await fetch("http://localhost:3000/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const profileData = await response.json();
          const allowedFields = ["nombre", "apellido", "telefono"];
          const filteredProfileData = Object.fromEntries(
            Object.entries(profileData).filter(([key]) => allowedFields.includes(key))
          );
          setUserData(filteredProfileData);
        } else {
          setUserData(null);
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        setUserData(null);
      }
      return response.json();
  };
    fetchUserData();

  }, []);
  if (!userData) {
    return <div>Cargando...</div>;
  }

  const isAuthenticated = !!localStorage.getItem("token");
  if (!isAuthenticated) {
    window.location.replace("/login");
    return null; // Evita renderizar el componente si no está autenticado
  }


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Cambia la URL por la de tu API real
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      const response = await fetch("http://localhost:3000/api/auth/edit", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el perfil");
      }

      navigate("/perfil");
    } catch (err) {
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#081F41] min-h-screen flex flex-col">
      <NavBar />
      <main className="flex justify-center items-center flex-1">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4 border-b-2 border-blue-200 pb-2">
            Editar Perfil
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {Object.entries(userData).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <label className="font-semibold text-gray-800 capitalize">{key}</label>
                <input
                  type={key === "email" ? "email" : "text"}
                  name={key}
                  placeholder={value}
                  className="p-2 border border-blue-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full text-gray-800"
                  disabled={loading}
                />
              </div>
            ))}
            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}
            <button
              type="submit"
              className="mt-4 w-full py-2 bg-[#0052CC] text-white font-semibold rounded-lg shadow hover:bg-[#00C6A0] transition-colors duration-200"
              disabled={loading}
            >
              {loading ? "Guardando..." : "Guardar Cambios"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditProfile;