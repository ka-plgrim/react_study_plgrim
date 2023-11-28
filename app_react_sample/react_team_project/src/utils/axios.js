import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api'
});

export const fakeApiRequest = axios.create({
    baseURL: 'https://fakestoreapi.com'
});

export default axiosInstance;