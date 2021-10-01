import axios from 'axios';
import { AsyncStorage } from 'react-native';
const API_URL = 'http://192.168.8.126:3000/';

class AuthService{
    login(email, password){
        console.log('function clled');
    
        return axios.post(API_URL+'user/login', {email, password})
        .then(response => {
            //console.log(response.headers.auth_token);
            if(response.headers.auth_token){
                AsyncStorage.setItem('user', JSON.stringify(response.data));
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
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService;





