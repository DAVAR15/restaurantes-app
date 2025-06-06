import React, { useState, useEffect } from 'react';
import { getRestaurants } from '../firebaseService';

function HomePage() {
  const [restaurants, setRestaurants] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
        const fetchRestaurants = async () => {
      setLoading(true); 
      setError(null); 
      try {
        const data = await getRestaurants(); 
        setRestaurants(data); 
      } catch (err) {
        setError(err); 
      } finally {
        setLoading(false); 
      }
    };

    fetchRestaurants(); 
  }, []); 

  if (loading) {
    return <p>Cargando restaurantes...</p>; 
  }

  if (error) {
    return <p>Error al cargar restaurantes: {error.message}</p>; 
  }

  return (
    <div>
      <h2>Todos los Restaurantes</h2>
      <div className="row">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={restaurant.image} className="card-img-top" alt={restaurant.name} />
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

export default HomePage;