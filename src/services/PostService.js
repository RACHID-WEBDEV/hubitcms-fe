    
        import axiosInstance from "./AxiosInstance"
    export const userLogin = (post) => {
        return axiosInstance.post('utility/admin-login', post)
    }
    
  
    
    export const getPosts = () => {
        return axiosInstance.get('/api/posts')
    }
    
    
    
    export const getPost = (id) => {
        return axiosInstance.get(`/api/posts/${id}`)
    }
    
   
    
    export const updatePost = (id, post) => {
        return axiosInstance.put(`/api/posts/${id}`, post)
    }
    
  
    
    export const deletePost = (id) => {
        return axiosInstance.delete(`/api/posts/${id}`)
    }     