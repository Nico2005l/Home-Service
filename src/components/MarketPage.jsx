import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar'; // Ajusta la ruta si es necesario

const MarketPage = () => {
  const services = [
    { title: "Reparación de bacha", price: "$15000", image: "img1.jpg" },
    { title: "Mantenimiento de aire acondicionado", price: "$19500", image: "img2.jpg" },
    { title: "Electricista", price: "$10000", image: "img3.jpg" },
    { title: "Fumigador", price: "$6500", image: "img4.jpg" },
    { title: "Limpieza a domicilio", price: "$10000", image: "img5.jpg" },
    { title: "Gasista", price: "$15000", image: "img6.jpg" },
  ];

  return (
    <div className="bg-[#081F41] min-h-screen">
      <NavBar />

      {/* Sección superior: Título */}
      <h1 className="text-3xl font-semibold text-white p-6 mt-2">Mercado</h1>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-4 px-6 py-6">
        {/* Filtros */}
        <aside className="w-full lg:w-64 space-y-4 text-sm">
          <div className="border border-blue-800 rounded p-4 bg-white">
            <h2 className="font-semibold mb-2 text-blue-950">Categorías</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-800 text-white px-2 py-1 rounded">Plomería ✕</span>
              <span className="bg-blue-800 text-white px-2 py-1 rounded">Electricista ✕</span>
              <span className="bg-blue-800 text-white px-2 py-1 rounded">Limpieza ✕</span>
            </div>
            <div className="mt-4 space-y-2">
              <label className="block text-blue-950"><input type="checkbox" defaultChecked /> Verificado</label>
              <label className="block text-blue-950"><input type="checkbox" defaultChecked /> Destacado</label>
              <label className="block text-blue-950"><input type="checkbox" defaultChecked /> Descuento</label>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold mb-1 text-blue-950">Precio</label>
              <input type="range" min="0" max="30000" defaultValue="30000" className="w-full accent-[#00C6A0]" />
              <div className="text-xs mt-1 text-blue-950">$0–30000</div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="font-semibold text-xs text-blue-950">Zona</p>
              <label className="block text-blue-950"><input type="checkbox" defaultChecked /> Recoleta</label>
              <label className="block text-blue-950"><input type="checkbox" defaultChecked /> Caballito</label>
              <label className="block text-blue-950"><input type="checkbox" defaultChecked /> Puerto Madero</label>
            </div>
            <div className="mt-4 space-y-2">
              <p className="font-semibold text-xs text-blue-950">Medios de pago</p>
              <label className="block text-blue-950"><input type="checkbox" defaultChecked /> Efectivo</label>
              <label className="block text-blue-950"><input type="checkbox" defaultChecked /> Débito</label>
              <label className="block text-blue-950"><input type="checkbox" defaultChecked /> Crédito</label>
            </div>
          </div>
        </aside>

        {/* Productos */}
        <main className="flex-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="relative w-72">
                <input
                  type="text"
                  placeholder="Buscador"
                  className="w-full border border-blue-800 rounded px-4 py-2 bg-gray-100 text-blue-950 placeholder:text-gray-400"
                />
                <span className="absolute right-3 top-2.5 text-blue-800">🔍</span>
              </div>
              <div className="flex gap-2 text-sm">
                <button className="bg-[#0052CC] text-white px-3 py-1 rounded font-semibold hover:bg-[#00C6A0] hover:text-white">Nuevo</button>
                <button className="px-3 py-1 rounded border border-blue-800 text-white bg-[#0052CC] hover:bg-[#00C6A0] hover:text-white">Precio ascendente</button>
                <button className="px-3 py-1 rounded border border-blue-800 text-white bg-[#0052CC] hover:bg-[#00C6A0] hover:text-white">Precio descendente</button>
                <button className="px-3 py-1 rounded border border-blue-800 text-white bg-[#0052CC] hover:bg-[#00C6A0] hover:text-white">Puntaje</button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s, i) => (
                <Link to={`/servicio`} key={i} className="block">
                  <div className="border border-blue-800 rounded p-2 bg-white hover:shadow-lg transition">
                    <div className="h-40 bg-gray-100 rounded mb-2 overflow-hidden flex items-center justify-center">
                      {/* Reemplazar por una imagen real si se desea */}
                      <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-sm font-medium text-blue-950">{s.title}</h3>
                    <p className="text-sm font-semibold text-blue-800">{s.price}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Paginación */}
            <div className="mt-8 flex justify-center items-center gap-2 text-sm">
              <button className="px-2 py-1 rounded bg-[#0052CC] text-white font-bold hover:bg-[#00C6A0] hover:text-white">1</button>
              <button className="text-white bg-[#0052CC] border border-blue-800 hover:bg-[#00C6A0] hover:text-white px-2 py-1 rounded">2</button>
              <button className="text-white bg-[#0052CC] border border-blue-800 hover:bg-[#00C6A0] hover:text-white px-2 py-1 rounded">3</button>
              <span className="text-blue-950">...</span>
              <button className="text-white bg-[#0052CC] border border-blue-800 hover:bg-[#00C6A0] hover:text-white px-2 py-1 rounded">67</button>
              <button className="text-white bg-[#0052CC] border border-blue-800 hover:bg-[#00C6A0] hover:text-white px-2 py-1 rounded">68</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MarketPage;
