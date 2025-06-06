

import { db } from './firebaseConfig'; 
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';

const restaurantsCollection = collection(db, 'restaurants');

/**
 * Obtiene todos los restaurantes de Firestore.
 * @returns {Promise<Array>} Un array de objetos de restaurante.
 */
export const getRestaurants = async () => {
  try {
    const snapshot = await getDocs(restaurantsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error al obtener restaurantes:', error);
    throw error; 
  }
};

/**
 * Añade un nuevo restaurante a Firestore.
 * @param {Object} restaurantData Los datos del restaurante a añadir (nombre, descripción, etc.).
 * @returns {Promise<string>} El ID del documento recién creado.
 */
export const addRestaurant = async (restaurantData) => {
  try {
    const docRef = await addDoc(restaurantsCollection, restaurantData);
    console.log("Restaurante añadido con ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error al añadir restaurante:', error);
    throw error;
  }
};

/**
 * Busca restaurantes en Firestore por nombre (coincidencia de prefijo).
 * @param {string} name El nombre o prefijo del nombre a buscar.
 * @returns {Promise<Array>} Un array de objetos de restaurante que coinciden.
 */
export const searchRestaurantsByName = async (name) => {
  try {
    const q = query(restaurantsCollection, where('name', '>=', name), where('name', '<=', name + '\uf8ff'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error al buscar restaurantes:', error);
    throw error;
  }
};