import React, { useState, useEffect } from 'react';
import './App.css';

import HomePage from './components/HomePage';
import NewRestaurantPage from './components/NewRestaurantPage';
import SearchPage from './components/SearchPage';

import { addRestaurant } from './firebaseService';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

 
  const handleAddRestaurant = async (newRestaurant) => {
    try {
      await addRestaurant(newRestaurant);
      console.log('Restaurante añadido a Firestore:', newRestaurant.name);
      setCurrentPage('home');
    } catch (error) {
      console.error('Error al añadir el restaurante:', error);
      alert('Hubo un error al añadir el restaurante. Inténtalo de nuevo.');
    }
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return <HomePage />;
    } else if (currentPage === 'new') {
      return <NewRestaurantPage onAddRestaurant={handleAddRestaurant} />;
    } else if (currentPage === 'search') {
      return <SearchPage />;
    }
       return <HomePage />;
  };

  return (
    <div className="App">
      <header className="App-header text-white p-3 mb-4">
        <div className="container">
          <h1>Restaurants App</h1>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCurrentPage('home')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCurrentPage('search')}>Search Restaurants</a>
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