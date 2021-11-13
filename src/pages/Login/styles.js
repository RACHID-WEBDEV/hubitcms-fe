import { makeStyles } from '@material-ui/core/styles';
import mbackground from '../../assets/mbackground.png' 



export default makeStyles((theme) => ({
  

root:{
    width:'100%',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    fontFamily:'Montserrat, sans-serif !important',
    alignItems:'center',
     backgroundColor:' rgba(0, 126, 255, 0.025)',
     overflowY:'hidden',
    
     [theme.breakpoints.down('sm')]:{
          height:'auto',
          minHeight:'100vh',
          overflowX:'hidden',

    },

   
},
margin: {
    margin: theme.spacing(1),
    width:'100%',
  },
  icon:{
    color: '#005FC0',
    fontSize:'1.5rem',

  },
  input:{
      width:'100%',
      marginTop:'1rem',
      fontFamily:'Montserrat, sans-serif',
  },


loginContainer : {
    background: 'rgba(196, 196, 196, 0.1)',
boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.15)',
    width:'45%',
    height:'auto',
    [theme.breakpoints.down('sm')]:{
      width:'100%',
      height:'auto',
      background:'transparent',
      boxShadow:'none',

    },
    padding:'3rem',
    marginTop:'2rem !important',

},

loginForm:{
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.down('sm')]:{
          width:'100%',
          padding:'1rem'
          
    },
},

email:{
    width:'100%',
    
},

subtitle:{
    textAlign:'center !important',
    marginBottom:'1rem !important',
    fontFamily:'Montserrat, sans-serif !importtant',
},

loginTitle:{
    textAlign:'center !important',
    marginBottom:'1rem !important',
    fontFamily:'Montserrat, sans-serif !important ',
    fontWeight:'600',
    fontSize:'20px',
},

btned:{
    backgroundColor:'#005FC0 !important' ,
    padding:'0.6rem 6rem !important',
    margin:'auto !important',
    display:'block !important',
    color:'#fff !important',
    fontFamily:'Montserrat, sans-serif',
    marginTop:'2rem !important',
    '&:hover':{
        backgroundColor: '#112fC0 !important',
      },
      [theme.breakpoints.down('sm')]:{
          
      },

},
termsContainer:{
display:'flex',
flexDirection:'row',
textAlign:'center',
justifyContent:'center',
alignItems:'center',
color:'#000000',
marginTop:'1rem',
fontSize:'11px',
[theme.breakpoints.down('sm')]:{
    fontSize:'0.6rem !important',
}
},
terms:{
    textDecoration:'none',
    color:'#122fc0',
fontSize:'11px',

    
    '&:hover':{
        color:'#122fc0',

    }

},
logoImg:{
    [theme.breakpoints.down('sm')]:{
        width:'30%',
        height:'auto',

    },
    width:'143px',
    height:'auto',
},
formItem:{
    [theme.breakpoints.down('sm')]:{
        width:'90%',
        display:'grid',
        placeItems:'center',
    }
},
lText:{
    fontFamily: 'Montserrat',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '13px',
lineHeight: '16px',
textAlign:'center',
marginBottom:'2rem',

color: 'rgba(0, 0, 0, 0.5)',
},

checkContainer:{
    display:'flex',
    marginTop:'1rem',
    [theme.breakpoints.down('sm')] :{
        marginLeft:'1.5rem',
    }
},
checkItem:{
    marginRight:[theme.spacing(1)],
    color:'#122fc0', 
    height:'16px',
    width:'16px',
    alignItems:'center'
},

fPass:{
color:'#007EFF',
fontFamily: 'Montserrat',
fontSize:'13px',
marginTop:'2rem',
textDecoration:'none',

},
fpContainer:{
    display:'flex',
    justifyContent:'center',
}





      
}));