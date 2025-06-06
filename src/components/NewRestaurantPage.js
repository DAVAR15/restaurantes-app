
import React, { useState } from 'react';

function NewRestaurantPage({ onAddRestaurant }) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

      if (!name || !description || !address || !image) {
      alert('Please fill in all fields.');
      return;
    }

    // Create a new restaurant object
    const newRestaurant = {
      name: name.ToLowerCase(), // Convert name to lowercase for consistency when saving and searching.
      description,
      address,
      image,
    };


    onAddRestaurant(newRestaurant);

    setName('');
    setDescription('');
    setAddress('');
    setImage('');

    alert('Restaurant added successfully!');
  };

  return (
    <div>
      <h2>Add New Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3"> 
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="url" 
            className="form-control"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Restaurant</button>
      </form>
    </div>
  );
}

export default NewRestaurantPage;