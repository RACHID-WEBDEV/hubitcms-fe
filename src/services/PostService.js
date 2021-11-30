    
        import axiosInstance from "./AxiosInstance"
    export const userLogin = (post) => {
        return axiosInstance.post('utility/admin-login', post)
    }
    
    export const userForgotPassword = (post) => {
        return axiosInstance.post('utility/forgot-password', post)
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



    // Email Validation
//     const  ValidateEmail = (mail) =>  
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     setEmailCorrect(true);
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }