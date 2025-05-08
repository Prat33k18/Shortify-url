import axios from 'axios';

const baseURL =
  process.env.REACT_APP_API_BASE_URL ||
  process.env.REACT_APP_BACKEND_URL ||
  'http://localhost:8787';

const url = axios.create({
  baseURL,
});

export { url };
