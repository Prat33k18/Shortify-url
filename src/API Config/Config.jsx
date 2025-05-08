import axios from 'axios';

const url = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL||'http://localhost:8787', 
});

export { url };
