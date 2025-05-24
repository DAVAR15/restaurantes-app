import React from 'react';


function HomePage({ restaurants }) { 
  return (
    <div>
      <h2>All Restaurants</h2>
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