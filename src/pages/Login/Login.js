import React,{useState,useEffect,useContext} from 'react'
import useStyles from './styles'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom' 
import { userLogin } from '../../services/PostService'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from 'react-router-dom'
import appContext from '../../contexts/app-context'
import hubitlogo from '../../assets/hubit.png' ;
import {MdVisibilityOff} from 'react-icons/md';
import {MdVisibility} from 'react-icons/md';

import { Icon, InlineIcon } from '@iconify/react';




const Login = () => {
    const {loginValues,setLogin} = useContext(appContext);
    const [text, setText] = useState(true);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    


    const history = useHistory();
    useEffect(() => {
        window.scroll(0,0)
}, [])

const changeType = () => {
  setText(!text);
}
const handlePChange = (e) => {
  setPassword(e.target.value);
}
const handleEChange = (e) => {
  setEmail(e.target.value);
} 



const handleLogin = async (e) => {  
    e.preventDefault();
       setLoading(true);
    const item = {"email":email,"password":password};
    const response = await userLogin(item); 
    if(response.data.error === false){
      setLoading(false);
        localStorage.setItem('token',response.data.response);
        history.push('/dashboard'); 
        setShowError(false);
        setErrorMessage('');

      } else { 
        setLoading(false);
        setErrorMessage(response.data.message);
        setShowError(true);
    }   
}       
setTimeout(() => {
    setShowError(false);
}, 10000);
setTimeout(() => {
  setLoading(false);
}, 15000);
const classes = useStyles();
return (
        <>
        <div className="desktop">

            <div className={classes.root}>
                <img src={hubitlogo} alt="hubut logo" className={classes.logoImg} />
                <div className={classes.loginContainer}>
                     <div className={classes.loginForm}>
                   
                        <p className={classes.loginTitle}> 
                Welcome Back
                        </p>
                              
                    <p className={classes.lText}> 
                    Please Log in to your account to continue
                      </p>
                <div className={classes.formItem}>
                <div className={classes.errorP}>
                {showError ? `${errorMessage}` : ''}  
                </div> 
                <div className={classes.margin}>
                <Icon icon="raphael:user" className={classes.icon} />

                <FormControl className={classes.mar}>
                  
        <Input
          id="input-with-icon-adornment"
          className={classes.input}
          placeholder="Email"
          value={email}
          onChange={handleEChange}
        />

      </FormControl>
      </div>
            <div className={classes.margi}>
            <Icon icon="gridicons:lock" className={classes.icon} />
                <FormControl className={classes.mar}>
        <Input
          id="input-with-icon-adornment"
          className={classes.input}
          type={text ? "password" : "text"}
          placeholder="Password"
          value={password}
          onChange={handlePChange}

          endAdornment={
            <InputAdornment position="end">
            
            {text ? <Icon icon="fa-solid:eye" onClick={changeType} className={classes.iconRight} /> : <Icon icon="fa-solid:eye-slash" onClick={changeType} className={classes.iconRight} />}
              
            </InputAdornment>
          }
        />
      </FormControl>
      </div>

                </div>
                </div> 
                
                 <div className={classes.checkContainer}>
                  <input type="checkbox" className={classes.checkItem} />
                  <p>Remember me </p>
                </div> 
                 <div className={classes.loginButton}>
                    <Button   onClick={handleLogin} className={classes.btned} 
                    disabled={loading ? true : false}
                    >
                    {loading ? 'Loading...' : 'Log In'}
                      
                    </Button>
                    </div> 
                     <div className={classes.termsContainer}>
                        By continuing you agree to our  <Link className={classes.terms}  to="terms">
                            Terms and Condition
                        </Link>
                    </div> 
                   <div className={classes.fpContainer}>
                    <Link to="/forgetpassword" className={classes.fPass}>
                  Forgot password?
                    </Link>
                    </div> 
                 
             </div>
        </div>
        </div>
        </>
    )
}

export default Login
