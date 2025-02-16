import axios from 'axios';

const url = axios.create({
  baseURL: 'http://localhost:8787', 
});

export { url };