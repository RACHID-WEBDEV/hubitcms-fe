import React,{useState,useEffect,useContext} from 'react'
import useStyles from './styles'
import { Button} from '@material-ui/core'
import {Link} from 'react-router-dom' 

import { userForgotPassword } from '../../services/PostService'
import Input from '@material-ui/core/Input';

import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import { useHistory } from 'react-router-dom'
import appContext from '../../contexts/app-context'
import hubitlogo from '../../assets/hubit.png' ;

import {IoMdCheckmark} from 'react-icons/io'


const PasswordReset = () => {

    const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    useEffect(() => {
        window.scroll(0,0)
}, [])
const handleReset = async (e) => {  //login function    
    e.preventDefault();
       //get values from context
         const item = {"email":email};
    const response = await userForgotPassword(item); 
    console.log(response)
    if(response.data.error === false){
        
        history.push('/emailsent'); //redirect to dashboard page if login is successful 
    } else { 
        setShowError(true);
        setErrorMessage(response.data.message);

    }   //if login is unsuccessful, alert user with error message 

}       
const classes = useStyles();

    
return (
    <>
    <div className="desktop">

        <div className={classes.root}>
            <img src={hubitlogo} alt="hubut logo" className={classes.logoImg} />
            <div className={classes.loginContainer}>
                 <div className={classes.loginForm}>
                    <p className={classes.loginTitle}> 
                        Forgot Password?
                    </p>
                          
                <p className={classes.lText}> 
                Enter your registered email below to receive password reset instructions
                  </p>
            <div className={classes.formItem}>
            <div className={classes.errorMsg}>
                {showError ? `${errorMessage}` : ''}  
                </div> 
            <div className={classes.margin}>
            <i className="far fa-user iconf"></i> 

            <FormControl className={classes.mar}>
              
    <Input
      id="input-with-icon-adornment"
      className={classes.input}
      placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
    />

  </FormControl>
  </div>
    

            </div>
            </div> 
          
          
             <div className={classes.loginButton}>
                <Button   onClick={handleReset} className={classes.btned}>
                    Continue
                </Button>
                </div> 
                <div className={classes.termsContainer}>
                        Remember password?<Link className={classes.terms}  to="/">
                            Login
                        </Link>
                    </div> 
                    <div className={classes.extraSpace}>

                    </div>
                
             
         </div>
    </div>
    </div>
    </>
    )
}

export default PasswordReset
