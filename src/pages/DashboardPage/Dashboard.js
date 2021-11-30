import React,{useState,useEffect} from 'react'
import useStyles from './styles'
import {Typography, Button} from '@material-ui/core'
import {Link} from 'react-router-dom' 
import { Icon, InlineIcon } from '@iconify/react';




const Dashboard = () => {
    useEffect(() => {
        window.scroll(0,0)
}, [])
const classes = useStyles();
    

return (
        <div>
            <Typography variant="h4" className={classes.title}>
                Dashboard Page 
                Congratulations You are now logged in as a user 
            </Typography>
 
<Icon icon="fa-solid:eye-slash" />
<Icon icon="fa-solid:eye" />
        </div>
    )
}

export default Dashboard
