import React,  {useEffect, useState} from 'react';
import axios from 'axios'; // npm install axios


export const LoginApi = () => {

const [token, setToken] = useState([]) ;

//username = "jmd2";
//password = "8Ruxot6285";

axios.post("http://192.168.1.149:8000/api/v1/api-token-auth/",{ username : 'jmd2' , password : '8Ruxot6285'})
  .then(res => { 
//  console.log("retour");
//  console.log(res.data); 
//  console.log(res.data.token);
//  setToken(res.data.token);
    return true;
      
    //setData(res.data);
    
     }) 
  .catch((error) => {
//    console.log('error:', error.message);
      setToken('');
      return false;
  })
                      
 
  
//return ({token : "xxxtoken"});
  }


//export default LoginApi;

// useEffect(() =>{

