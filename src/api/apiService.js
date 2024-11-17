//src/api/apiService
import axios from 'axios';

const API_URL = 'https://volunteer-connect-backend.onrender.com/api'; // Change if using a different server URL

export const getUserData = () => axios.get(`${API_URL}/users`);
export const createUser = (userData) => axios.post(`${API_URL}/users`, userData);
