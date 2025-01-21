import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',  // Use backend port
});

export default instance;
