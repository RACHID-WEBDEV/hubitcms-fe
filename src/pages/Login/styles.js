import { makeStyles,alpha } from '@material-ui/core/styles';
import mbackground from '../../assets/mbackground.png' 



export default makeStyles((theme) => ({
  

container:{
    width:'100%',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
     backgroundColor:' rgba(0, 126, 255, 0.025)',
    // backgroundColor:'white',
//     backgroundImage:`url(${'../../assets/mbackground.png' 
// })`,
//     backgroundSize:'cover',
},
logoImg:{

},
loginContainer : {
    background: 'rgba(196, 196, 196, 0.1)',
boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.15)',
    width:'45%',
    height:'auto',
    padding:'3rem',
    marginTop:'2rem',

},
loginForm:{
    display:'flex',
    flexDirection:'column',
  


},
email:{
    width:'100%',
},
subtitle:{
    textAlign:'center',
    marginBottom:'2rem'
},
loginTitle:{
    textAlign:'center',
    marginBottom:'1rem'


},
loginBtn:{
    backgroundColor:'#005FC0',
    padding:'0.6rem 5rem',
    margin:'auto',
    display:'block',
    color:'#fff',
    marginTop:'2rem'

},






      
}));