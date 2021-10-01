import axios from "axios";
import authHeader from "./auth-header";
import { AsyncStorage } from "react-native";


const API_URL = 'http://192.168.109.32:3000/';

class UserService{

    getProfile(){
        return axios.get(API_URL + 'profile', {headers: authHeader()});
    }

    async getJwtVerification(){ 
        const user = await AsyncStorage.getItem('user');
        
        console.log('function clled jwt verification');
        
            return axios.get(API_URL + 'profile/verification', {headers: {'auth_token': user}})
            .then(response => { 
            //console.log(response);
            //console.log(response.headers.auth_token);
            return response;
            });
        
       
    }

    getItems(){
        return axios.get(API_URL + 'items', {headers: authHeader()});
    }
}

export default new UserService();