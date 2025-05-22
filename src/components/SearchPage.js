
import React, { useState, useEffect } from 'react';

function SearchPage({ restaurants }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // useEffect to filter restaurants whenever searchTerm or restaurants prop changes
  useEffect(() => {
    const results = restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRestaurants(results);
  }, [searchTerm, restaurants]); // Dependencies: re-run effect if these change

  return (
    <div>
      <h2>Search Restaurants</h2>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by restaurant name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
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
          ))
        ) : (
          <p className="text-center w-100">No restaurants found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;