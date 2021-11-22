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

import {IoMdCheckmark} from 'react-icons/io'
import {MdVisibilityOff} from 'react-icons/md';
import {MdVisibility} from 'react-icons/md';
import {MdLock }  from 'react-icons/md';
import { CircularProgress } from '@material-ui/core'


import { KeyIcon } from 'react-line-awesome' 

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

const handleLogin = async (e) => {  //login function    
    e.preventDefault();
       //get values from context
       setLoading(true);
    const item = {"email":email,"password":password};
    const response = await userLogin(item); 
    if(response.data.error === false){
      setLoading(false);
        localStorage.setItem('token',response.data.response);
        
        history.push('/dashboard'); //redirect to dashboard page if login is successful 
     
        setShowError(false);
        setErrorMessage('');

      } else { 
        // alert('Invalid email or password');
        
        setLoading(false);
        setErrorMessage(response.data.message);
        setShowError(true);
    }   //if login is unsuccessful, alert user with error message 

}       
setTimeout(() => {
    setShowError(false);
}, 10000);

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
                <i className="far fa-user iconf"></i> 

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
            <MdLock className="icon" />

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
            
            {text ? <MdVisibility onClick={changeType} className={classes.icon} /> : <MdVisibilityOff onClick={changeType} className={classes.icon} />}
              
            </InputAdornment>
          }
        />
      </FormControl>
      </div>

                </div>
                </div> 
                
                 <div className={classes.checkContainer}>
                  <input type="checkbox" className={classes.checkItem} />
                  <p>
                Remember me

                  </p>
                </div> 
                 <div className={classes.loginButton}>
                    <Button   onClick={handleLogin} className={classes.btned} 
                    disabled={loading ? true : false}
                    >
                      {/* {loading ? <CircularProgress className={classes.whiteSpinner} /> : "Log In" }   */}
                      Log In
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
