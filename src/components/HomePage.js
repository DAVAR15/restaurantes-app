

import React from 'react';

// REMOVED: import restaurantsData from '../data'; // This line should be removed or commented out

// HomePage now expects 'restaurants' as a prop
function HomePage({ restaurants }) { // <--- This line is critical: it accepts 'restaurants' as a prop
  
  return (
    <div>
      <h2>All Restaurants</h2>
      <div className="row">


        {/* Use the 'restaurants' prop passed from App.js */}


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