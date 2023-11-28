import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api'
});

axiosInstance.interceptors.request.use(function(config) {
        config.headers.Authorization = 'bearer' + localStorage.getItem('accessToken');
        return config;
    }, function(error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(function(response) {
        return response;
    }, function(error) {
        if(error.response.data === 'jwt expired') {
            window.location.reload();
        }

        return Promise.reject(error);
    }
)

export default axiosInstance;