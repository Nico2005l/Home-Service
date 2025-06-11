import React, { useState } from 'react';
import './MisPosteosStyles.css';

const DeletePosts = () => {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:3000/api/services/${id}`, {
      method: 'DELETE'
    });

    const data = await response.json();
    response.ok
      ? alert(`Servicio eliminado correctamente`)
      : alert(`Error: ${data.error}`);
  };

  return (
    <div className="container-posteo">
      <div className="form-box">
        <h2>Borrar Servicio</h2>
        <form onSubmit={handleDelete}>
          <input placeholder="ID del servicio a borrar" value={id} onChange={e => setId(e.target.value)} />
          <button type="submit">Borrar</button>
        </form>
      </div>
    </div>
  );
};

export default DeletePosts;
