import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

const Profile = () => {
const navigate = useNavigate();
return (
    <div className="bg-[#081F41] min-h-screen">
        <Navbar />
        <main className="flex flex-col md:flex-row justify-center items-center w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 mt-10 mx-auto">
            <div className="flex flex-col items-center md:mr-12 mb-8 md:mb-0">
                <img
                    src="profile-picture-url"
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
                        value="Melissa Peters"
                        readOnly
                        className="sm:ml-3 mt-2 sm:mt-0 p-2 border border-blue-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full text-gray-800"
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <label className="font-semibold text-gray-800 w-40">Email</label>
                    <input
                        type="email"
                        value="mpeters@gmail.com"
                        readOnly
                        className="sm:ml-3 mt-2 sm:mt-0 p-2 border border-blue-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full text-gray-800"
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <label className="font-semibold text-gray-800 w-40">Fecha de nacimiento</label>
                    <input
                        type="text"
                        value="23/09/1995"
                        readOnly
                        className="sm:ml-3 mt-2 sm:mt-0 p-2 border border-blue-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full text-gray-800"
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <label className="font-semibold text-gray-800 w-40">Ubicación</label>
                    <input
                        type="text"
                        value="CABA"
                        readOnly
                        className="sm:ml-3 mt-2 sm:mt-0 p-2 border border-blue-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full text-gray-800"
                    />
                </div>
            </div>
        </main>
    </div>
);
};

export default Profile;