import React, { useState } from 'react';

const DeletePosts = () => {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:3000/api/services/${id}`, {
      method: 'DELETE'
    });

    const data = await response.json();
    if (response.ok) {
      alert(`Servicio eliminado`);
    } else {
      alert(`Error: ${data.error}`);
    }
  };

  return (
    <div>
      <h2>Borrar Servicio</h2>
      <form onSubmit={handleDelete}>
        <input placeholder="ID del servicio a borrar" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="submit">Borrar</button>
      </form>
    </div>
  );
};

export default DeletePosts;
