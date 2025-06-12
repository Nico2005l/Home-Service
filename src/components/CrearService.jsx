import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const CreateService = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: ''
  });

  const [imageUrl, setImageUrl] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'price' && !/^\d*\.?\d*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('http://localhost:3000/api/services/upload-image', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.url) {
        setImageUrl(data.url);
      } else {
        console.error('Respuesta inválida del servidor:', data);
      }
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, price, description, category } = formData;

    if (!name || !price || !description || !category) {
      setSuccessMessage('❌ Todos los campos son obligatorios.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          price: parseFloat(price),
          description: description.trim(),
          category: category.trim(),
          images: imageUrl ? [imageUrl] : []
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('✅ Servicio creado correctamente.');
        setFormData({ name: '', price: '', description: '', category: '' });
        setImageUrl(null);
      } else {
        setSuccessMessage(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setSuccessMessage('❌ Error al conectar con el servidor.');
    }
  };

  return (
    <div className="bg-[#081F41] min-h-screen">
      <NavBar />
      <h1 className="text-3xl font-semibold text-white p-6 mt-2">Crear Post</h1>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mx-6 mb-4">
          {successMessage}
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-md m-6 mt-3 mb-0">
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 items-start">

          {/* Imagen principal */}
          <div className="space-y-4">
            <div className="relative w-full aspect-square bg-blue-950 rounded-md flex items-center justify-center border border-blue-800">
              {imageUrl ? (
                <img src={imageUrl} alt="preview" className="w-full h-full object-cover rounded-md" />
              ) : (
                <span className="text-blue-400">Previsualización</span>
              )}

              {/* Input oculto con label como botón */}
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label
                htmlFor="imageUpload"
                className="absolute top-2 left-2 bg-[#0052CC] text-white text-md px-2 py-1 rounded cursor-pointer transition-colors duration-200 hover:bg-[#00C6A0]"
              >
                Elegir Imagen
              </label>
            </div>
          </div>

          {/* Formulario */}
          <div className="space-y-4">
            <div>
              <label className="text-sm text-blue-950 block mb-1">Título del Servicio</label>
              <input
                type="text"
                name="name"
                placeholder="Ingrese el Título"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950 placeholder:text-grey-400"
              />
            </div>

            <div>
              <label className="text-sm text-blue-950 block mb-1">Precio</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-800">$</span>
                <input
                  type="text"
                  name="price"
                  placeholder="Ingrese el Precio"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full pl-6 border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950 placeholder:text-grey-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-blue-950 block mb-1">Descripción</label>
              <textarea
                name="description"
                placeholder="Ingrese la Descripción"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-blue-800 rounded px-3 py-2 resize-none h-24 bg-gray-100 text-blue-950 placeholder:text-grey-400"
              />
            </div>

            <div>
              <label className="text-sm text-blue-950 block mb-1">Tipo de Servicio</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-blue-800 rounded px-3 py-2 bg-gray-100 text-blue-950"
              >
                <option value="">Seleccione un tipo</option>
                <option value="plomeria">Plomería</option>
                <option value="electricista">Electricista</option>
                <option value="limpieza">Limpieza</option>
                <option value="jardineria">Jardinería</option>
                <option value="otros">Otros</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#0052CC] text-white py-3 rounded transition-colors duration-200 hover:bg-[#00C6A0]"
              >
                Crear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateService;
