import React, { useState } from 'react';
import './MisPosteosStyles.css';

const EditarService = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:3000/api/services/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, category, price })
    });

    const data = await response.json();
    response.ok
      ? alert(`Servicio actualizado correctamente`)
      : alert(`Error: ${data.error}`);
  };

  return (
    <div className="container-posteo">
      <div className="form-box">
        <h2>Editar Servicio</h2>
        <form onSubmit={handleUpdate}>
          <input placeholder="ID del servicio" value={id} onChange={e => setId(e.target.value)} />
          <input placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
          <input placeholder="Descripción" value={description} onChange={e => setDescription(e.target.value)} />
          <input placeholder="Categoría" value={category} onChange={e => setCategory(e.target.value)} />
          <input placeholder="Precio" value={price} onChange={e => setPrice(e.target.value)} />
          <button type="submit">Actualizar</button>
        </form>
      </div>
    </div>
  );
};

export default EditarService;
