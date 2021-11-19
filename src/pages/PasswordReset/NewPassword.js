import React,{useState,useEffect,useContext} from 'react'
import useStyles from './styles'
import { Button} from '@material-ui/core'
import {Link} from 'react-router-dom' 
import { userLogin } from '../../services/PostService'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { useParams,useLocation, useHistory } from 'react-router'
import hubitlogo from '../../assets/hubit.png' ;
import {MdVisibilityOff} from 'react-icons/md';
import {MdVisibility} from 'react-icons/md';
import { KeyIcon } from 'react-line-awesome' 


const NewPassword = () => {
    const {id} =  useParams();    
    const [text, setText] = useState(true);
    const [pshow, setPshow] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const handlePChange = (e) => {
        setPassword(e.target.value);
    }
    const handleCPChange = (e) => {
        setConfirmPassword(e.target.value);

    }
    const changeType = () => {
        setText(!text);
    }
     const  changePType = () => {
        setPshow(!pshow);
    }

    const history = useHistory();

    useEffect(() => {
        window.scroll(0,0)
}, [])
const checkPassword = (pass1, pass2) => {
    if(pass1 !== pass2) {
        setShowError(true)
    }
    else {
        setShowError(false)
    }
}

    const handleSubmit = (e) => {
        e.preventDefault();
        checkPassword(password,confirmPassword);
        if(password === confirmPassword){
            userLogin(id,password).then(res => {
                if(res.error === false){
                    
                    history.push('/resetsuccess');
                }
            })
        }
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
                        Reset Password
                        </p>
                              
                    <p className={classes.lText}> 
                    Set the new password for your account so that you can login and access all the features 
                      </p>
                <div className={classes.formItem}>
        
            <div className={classes.margin}>
            <KeyIcon className="icon" />

                <FormControl className={classes.margin}>
        
        <Input
          id="input-with-icon-adornment"
          className={classes.input}
          type={text ? "password" : "text"}
          placeholder="Password"
          onChange={handlePChange}
          value={password}
     
          endAdornment={
            <InputAdornment position="end">
            {text ? <MdVisibility onClick={changeType} className={classes.icon} /> : <MdVisibilityOff onClick={changeType} className={classes.icon} />}
                
              
            </InputAdornment>
          }
        />
      </FormControl>
      </div>
            <div className={classes.margi}>
            <KeyIcon className="icon" />

                <FormControl className={classes.mar}>
        
        <Input
          id="input-with-icon-adornment"
          
          className={classes.input}
          type={pshow ? "password" : "text"}
          
          placeholder="Re-enter password"
          onChange={handleCPChange}
          value={confirmPassword}
          endAdornment={
            <InputAdornment position="end">
            
            {pshow ? <MdVisibility onClick={changePType} className={classes.icon} /> : <MdVisibilityOff onClick={changePType} className={classes.icon} />}
              
            </InputAdornment>
          }
        />
      </FormControl>
      </div>

                </div>
                </div> 
                
                <div className={classes.errorP}>
                {showError ? 'Password do not match' : ''}  
                </div> 
                 <div className={classes.loginButton}>
                    <Button   onClick={handleSubmit} className={classes.btned}>
                        Reset Password
                    </Button>
                    </div> 
                    <div className={classes.extraSpace}>

                    </div>
                

                 
             </div>
        </div>
        </div>
        </>
    )
}

export default NewPassword;
