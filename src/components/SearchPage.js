import React, { useState, useEffect } from 'react';

import { searchRestaurantsByName } from '../firebaseService';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    const handler = setTimeout(async () => {
      try {
       
        const lowercasedSearchTerm = searchTerm.toLowerCase().trim(); 
        const data = await searchRestaurantsByName(lowercasedSearchTerm);
        setResults(data);
      } catch (err) {
        console.error("Error al realizar la búsqueda en Firestore:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const handleSearchSubmit = (e) => {
      e.preventDefault();

  };

  return (
    <div>
      <h2>Buscar Restaurantes</h2>
      <form onSubmit={handleSearchSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Buscar</button>
        </div>
      </form>

      {loading && <p>Buscando restaurantes...</p>}
      {error && <p>Error al buscar: {error.message}</p>}

      {!loading && !error && results.length === 0 && searchTerm.trim() !== '' && (
        <p className="text-center w-100">No se encontraron restaurantes que coincidan con la búsqueda.</p>
      )}
      {!loading && !error && results.length === 0 && searchTerm.trim() === '' && (
        <p className="text-center w-100">Escribe un nombre para buscar.</p>
      )}

      <div className="row">
        {results.map((restaurant) => (
          <div key={restaurant.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              {restaurant.image && <img src={restaurant.image} className="card-img-top" alt={restaurant.name} />}
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text">{restaurant.description}</p>
                <p className="card-text"><small className="text-muted">{restaurant.address}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;