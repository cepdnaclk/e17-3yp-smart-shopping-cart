// import React, {useContext} from 'react';
// import axios from 'axios';
import { AsyncStorage } from 'react-native';



// const API_URL = 'http://192.168.1.104:3000/';

import api from './api';

class AuthService{

    
    login(email, password){
        //const [storedCredentials, setStoredCredentials] = useContext(CredentialContext);
        console.log('function clled');
    
        return api.post('user/login', {email, password})
        .then(response => {
           
            if(response.headers.auth_token){
                AsyncStorage.setItem('user', response.data.access_token);
                AsyncStorage.setItem('refresh_token', response.data.refresh_token);


                //AsyncStorage.setItem('isLoggedIn', '1');

                //console.log(response.data.access_token);
                console.log('auth token created');
            } 
            return response.data;
        });  
   
    }

    register(name, email, password){
        
            console.log('function clled signup');
        return api.post( 'user/register', {name, email, password})
        .then(response => {
            
            return response;
        });

      
  
    }

    getCurrentUser(){
        return JSON.parse(AsyncStorage.getItem('user'));
    }

    
    



/*
    persistLogin (credentials){
        AsyncStorage.setItem('user', JSON.stringify(credentials))
        .then(()=>{
            setStoredCredentials(credentials);
        })
        .catch((error)=>{
            console.log(error);
        })


    }*/
}

export default new AuthService;





