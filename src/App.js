
import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import NewRestaurantPage from './components/NewRestaurantPage';
import SearchPage from './components/SearchPage';
import initialRestaurants from './data';

function App() {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [currentPage, setCurrentPage] = useState('home');

  const handleAddRestaurant = (newRestaurant) => {
    setRestaurants((prevRestaurants) => [...prevRestaurants, newRestaurant]);
    setCurrentPage('home'); // Go back to home after adding
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return <HomePage restaurants={restaurants} />;
    } else if (currentPage === 'new') {
      return <NewRestaurantPage onAddRestaurant={handleAddRestaurant} />;
    } else if (currentPage === 'search') { // New condition for search page
      return <SearchPage restaurants={restaurants} />; // Pass restaurants to SearchPage
    }
    return <HomePage restaurants={restaurants} />; // Fallback
  };

  return (
    <div className="App">
      <header className="bg-primary text-white p-3 mb-4">
        <div className="container">
          <h1>Restaurants App</h1>
         <nav className="navbar navbar-expand-lg navbar-dark">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCurrentPage('home')}>Home</a>
                </li>
                 <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCurrentPage('search')}>Search Restaurants</a> {/* New link */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCurrentPage('new')}>New Restaurant</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;