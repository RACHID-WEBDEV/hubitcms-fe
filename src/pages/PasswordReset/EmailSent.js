import React,{useState,useEffect,useContext} from 'react'
import useStyles from './styles'
import hubitlogo from '../../assets/hubit.png' ;
import sendemail from '../../assets/sentemail.png'

const EmailSent = () => {
   
const classes = useStyles();

return (
    <>
    <div className="desktop">

        <div className={classes.root}>
            <img src={hubitlogo} alt="hubut logo" className={classes.logoImg} />
            <div className={classes.loginContainer}>
                 <div className={classes.loginForm}>
                    <p className={classes.loginTitle}> 
                    Email has been sent!
                    </p>
                          
                <p className={classes.lText}> 
                Please check your inbox and click on the received link to reset your password
                  </p>
            <div className={classes.formItem}>
                <img src={sendemail} alt="hubit" className={classes.emailSentImg} /> 
                
         </div>
         </div>
         </div>
    </div>
    </div>
    </>
    )
}

export default EmailSent
