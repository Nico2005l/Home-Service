import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavBar';

const EditProfile = () => {
  const [userData, setUserData] = useState({
    name: "Melissa Peters",
    email: "mpeters@gmail.com",
    birthdate: "23/09/1995",
    location: "CABA",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos guardados:", userData);
    navigate("/perfil");

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
                  value={value}
                  onChange={handleChange}
                  className="p-2 border border-blue-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full text-gray-800"
                />
              </div>
            ))}
            <button
              type="submit"
              className="mt-4 w-full py-2 bg-[#0052CC] text-white font-semibold rounded-lg shadow hover:bg-[#00C6A0] transition-colors duration-200"
            >
              Guardar Cambios
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditProfile;