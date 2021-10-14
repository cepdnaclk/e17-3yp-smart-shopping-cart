import React, {useContext} from 'react';
import axios from 'axios';
import { AsyncStorage } from 'react-native';



const API_URL = 'http://192.168.1.104:3000/';


class AuthService{

    
    login(email, password){
        //const [storedCredentials, setStoredCredentials] = useContext(CredentialContext);
        console.log('function clled');
    
        return axios.post(API_URL+'user/login', {email, password})
        .then(response => {
            //console.log(response.headers.auth_token);
            if(response.headers.auth_token){
                AsyncStorage.setItem('user', response.data);
                //AsyncStorage.setItem('isLoggedIn', '1');

                //this.persistLogin(response.data);
                console.log('auth token created');
            } 
            return response.data;
        });
   
    }

    register(name, email, password){
        
            console.log('function clled signup');
        return axios.post(API_URL + 'user/register', {name, email, password})
        .then(response => {
            //console.log(response.headers.auth_token);
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





