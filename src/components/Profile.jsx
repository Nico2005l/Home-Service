import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import { useEffect, useState } from "react";

const Profile = () => {
  const navigate = useNavigate();

  const isAuthenticated = !!localStorage.getItem("token");

  // Obtener datos del usuario desde localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.replace("/");
  };

  if (!isAuthenticated) {
    navigate("/login");
    return null; // Evita renderizar el componente si no está autenticado
  }

const [profile, setProfile] = useState(null);

useEffect(() => {
    const fetchProfile = async () => {
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
                setProfile(profileData);
            } else {
                setProfile(null);
            }
        } catch (err) {
            console.error("Error fetching profile:", err);
            setProfile(null);
        }
    };
    fetchProfile();
}, []);

if (!profile) {
    return (
        <div className="bg-[#081F41] min-h-screen flex items-center justify-center">
            <Navbar />
            <div className="text-white text-xl">Cargando perfil...</div>
        </div>
    );
}

return (
    <div className="bg-[#081F41] min-h-screen">
        <Navbar />
        <main className="flex flex-col md:flex-row justify-center items-center w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 mt-10 mx-auto">
            <div className="flex flex-col items-center md:mr-12 mb-8 md:mb-0">
                <img
                    src={profile.avatarUrl || "profile-picture-url"}
                    alt="Profile"
                    className="rounded-full w-40 h-40 border-4 border-blue-950 shadow-lg object-cover"
                />
                <button
                    className="mt-6 px-8 py-2 bg-[#0052CC] text-white font-semibold rounded-xl shadow hover:bg-[#00C6A0] transition-colors duration-200"
                    onClick={() => navigate("/editar-perfil")}
                >
                    Editar Perfil
                </button>
            </div>

        <div className="flex flex-col space-y-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-[#081F41] mb-2 border-b-2 border-blue-200 pb-2">
            Mi Perfil
          </h2>

                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <label className="font-semibold text-gray-800 w-40">Nombre</label>
                    <input
                        type="text"
                        value={profile.nombre + " " + profile.apellido || ""}
                        readOnly
                        className="sm:ml-3 mt-2 sm:mt-0 p-2 border border-blue-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full text-gray-800"
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <label className="font-semibold text-gray-800 w-40">Email</label>
                    <input
                        type="email"
                        value={profile.email || ""}
                        readOnly
                        className="sm:ml-3 mt-2 sm:mt-0 p-2 border border-blue-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full text-gray-800"
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <label className="font-semibold text-gray-800 w-40">Telefono</label>
                    <input
                        type="text"
                        value={profile.telefono || ""}
                        readOnly
                        className="sm:ml-3 mt-2 sm:mt-0 p-2 border border-blue-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full text-gray-800"
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <label className="font-semibold text-gray-800 w-40">DNI</label>
                    <input
                        type="text"
                        value={profile.dni || ""}
                        readOnly
                        className="sm:ml-3 mt-2 sm:mt-0 p-2 border border-blue-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full text-gray-800"
                    />
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleLogout}
                        className="px-8 py-2 bg-red-600 text-white font-semibold rounded-xl shadow hover:bg-red-700 transition-colors duration-200"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </main>
    </div>
  );
};

export default Profile;