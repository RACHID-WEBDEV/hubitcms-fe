import React,{useState,useEffect,useContext} from 'react'
import useStyles from './styles'
import {Typography, Button} from '@material-ui/core'
import {Link} from 'react-router-dom' 
import LoginInput from '../../components/Inputs/LoginInput'
import LoginPasswordInput from '../../components/Inputs/LoginPasswordInput'
import { userLogin } from '../../services/PostService'
import { useHistory } from 'react-router-dom'
import appContext from '../../contexts/app-context'
import hubitlogo from '../../assets/hubitlogo.png' ;

const Login = () => {

    const {loginValues,setLogin} = useContext(appContext);
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        window.scroll(0,0)
}, [])
const handleLogin = async (e) => {  //login function    
    e.preventDefault();
    const {email,password} = loginValues;   //get values from context
    const item = {"email":email,"password":password};
    const response = await userLogin(item); 
    if(response.data.error === false){
        localStorage.setItem('token',response.data.response);
        history.push('/dashboard'); //redirect to dashboard page if login is successful 
    } else { 
        alert('Invalid email or password');
    }   //if login is unsuccessful, alert user with error message 
}       

    
return (
        <>
            <div className={classes.container}>
                <img src={hubitlogo} alt="hubut logo" className={classes.logoImg} />
                <div className={classes.loginContainer}>
                    <div className={classes.loginForm}>
                        <Typography variant="h4" className={classes.loginTitle}>
                            Welcome Back
                        </Typography>
                        <Typography variant="body1" className={classes.subtitle}>
                        Please Log in to your account to continue
                        </Typography>

             <LoginInput placeholder="Email" name="email" label="" type="email" ErrorMessage="" className={classes.email} />
             <LoginPasswordInput placeholder="Password" name="password"  />
             </div>
                <div className={classes.loginButton}>
                    <Button variant="contained" color="primary" onClick={handleLogin} className={classes.loginBtn}>
                        Login
                    </Button>
                    </div>
             </div>
        </div>
        </>
    )
}

export default Login
