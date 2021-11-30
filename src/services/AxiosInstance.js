import axios from 'axios'



const axiosInstance = axios.create({
    baseURL: 'https://hubitcms.herokuapp.com/smart-cms/api/1.0/',
    timeout: 10000,
    
  });
  const getToken = () => { 
    return localStorage.getItem('token')
    } 
    const tokenValue = getToken(); 
    axiosInstance.interceptors.request.use(
        config => {
            if (tokenValue) {
                config.headers.Authorization = `Bearer ${tokenValue}`
            } 
            return config
        },
        error => {
            return Promise.reject(error)
        } 
    )


export default axiosInstance;
 
 

