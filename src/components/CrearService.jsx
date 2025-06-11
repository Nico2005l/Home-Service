import React, { useState } from 'react';

const CrearService = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, description, category, price })
    });

    const data = await response.json();
    if (response.ok) {
      alert(`Servicio creado con ID: ${data.id}`);
      // Podés redirigir al usuario si querés
    } else {
      alert(`Error: ${data.error}`);
    }
  };

  return (
    <div>
      <h2>Crear Servicio</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input placeholder="Categoría" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CrearService;
