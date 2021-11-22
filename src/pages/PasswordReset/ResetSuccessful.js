import React,{useEffect} from 'react'
import useStyles from './styles'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom' 

import hubitlogo from '../../assets/hubit.png' ;


const ResetSuccessful = () => {
 

    

    useEffect(() => {
        window.scroll(0,0)
}, [])
   
const classes = useStyles();

    
return (
    <>
    <div className="desktop">

        <div className={classes.root}>
            <img src={hubitlogo} alt="hubut logo" className={classes.logoImg} />
            <div className={classes.loginContainer}>
                 <div className={classes.loginForm}>
                    <p className={classes.loginTitle}> 
                        Password Updated!
                    </p>
                          
                <p className={classes.lText}> 
                Your password has  successfully been updated, you can now proceed to Login
                  </p>
       
            </div> 
          
          
             <div className={classes.loginButton}>
                <Button   component={Link} to="/" className={classes.btned}>
                    Proceed to Login 
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

export default ResetSuccessful;
