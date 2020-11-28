import axios from 'axios';

const api = axios.create({
  baseURL: 'https://url.ngrok.io'
  // URL ngrok exemplo: 'https://5b8e918bf294.ngrok.io'
})

export default api;