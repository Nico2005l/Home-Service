import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const CATEGORIES = ["Plomería", "Electricista", "Limpieza"];

const MarketPage = () => {
  const [services, setServices] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(250000);
  const [usePriceFilter, setUsePriceFilter] = useState(false);
  const [order, setOrder] = useState('nuevo'); // 'nuevo', 'asc', 'desc'
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/services/');
        if (!response.ok) throw new Error('Error al cargar los servicios');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  // Filtros
  let filtered = services
    .filter(s =>
      (selectedCategories.length === 0 || selectedCategories.includes(s.category)) &&
      (!usePriceFilter || s.price <= priceRange) &&
      (
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        (s.description && s.description.toLowerCase().includes(search.toLowerCase()))
      )
    );

  // Ordenamiento
  if (order === 'asc') {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (order === 'desc') {
    filtered = filtered.sort((a, b) => b.price - a.price);
  } else if (order === 'nuevo') {
    filtered = filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }

  // Handlers
  const handleCategoryChange = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

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
              {CATEGORIES.map(cat => (
                <label key={cat} className="flex items-center gap-1 text-blue-950">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            {/* Filtro de precio */}
            <div className="mt-4">
              <label className="block text-xs font-semibold mb-1 text-blue-950 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={usePriceFilter}
                  onChange={() => setUsePriceFilter(v => !v)}
                />
                Usar filtro de precio máximo
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="250000"
                  value={priceRange}
                  onChange={e => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#00C6A0]"
                  disabled={!usePriceFilter}
                />
                <input
                  type="number"
                  min="0"
                  max="250000"
                  value={priceRange}
                  onChange={e => {
                    let val = Number(e.target.value);
                    if (val > 250000) val = 250000;
                    if (val < 0) val = 0;
                    setPriceRange(val);
                  }}
                  className="w-24 border border-blue-800 rounded px-2 py-1 text-blue-950"
                  disabled={!usePriceFilter}
                />
              </div>
              <div className={`text-xs mt-1 ${usePriceFilter ? "text-blue-950" : "text-gray-400"}`}>
                ${priceRange}
              </div>
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
                  placeholder="Buscar servicios..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full border border-blue-800 rounded px-4 py-2 bg-gray-100 text-blue-950 placeholder:text-gray-400"
                />
                <span className="absolute right-3 top-2.5 text-blue-800">🔍</span>
              </div>
              <div className="flex gap-2 text-sm">
                <button
                  className={`px-3 py-1 rounded border border-blue-800 ${order === 'asc' ? 'bg-[#0052CC] text-white' : 'bg-white text-blue-800'} hover:bg-[#00C6A0] hover:text-white`}
                  onClick={() => setOrder('asc')}
                >
                  Precio ascendente
                </button>
                <button
                  className={`px-3 py-1 rounded border border-blue-800 ${order === 'desc' ? 'bg-[#0052CC] text-white' : 'bg-white text-blue-800'} hover:bg-[#00C6A0] hover:text-white`}
                  onClick={() => setOrder('desc')}
                >
                  Precio descendente
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((s, i) => (
                <Link to={`/servicio/${s.id}`} key={i} className="block">
                  <div className="border border-blue-800 rounded p-2 bg-white hover:shadow-lg transition">
                    <div className="h-64 bg-gray-100 rounded mb-2 overflow-hidden flex items-center justify-center"> {/* h-64 for bigger images */}
                      <img src={s.images && s.images[0] ? s.images[0] : "/media/placeholder1.webp"} alt={s.name} className="h-full w-full object-scale-down" />
                    </div>
                    <h3 className="text-md font-medium text-blue-950">{s.name}</h3>
                    <p className="text-sm font-semibold text-blue-800">${s.price}</p>
                  </div>
                </Link>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full text-center text-blue-950 py-8">No se encontraron servicios.</div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MarketPage;
