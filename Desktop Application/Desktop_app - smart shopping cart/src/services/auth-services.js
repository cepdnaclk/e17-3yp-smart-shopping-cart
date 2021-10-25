import axios from 'axios';
import Cookies from 'js-cookie';
import { hostAddress } from '../constant';

const API_URL = hostAddress;

class AuthService{ 
 

    login(email, password){

    return axios.post(API_URL +'user/login', {email, password})
    .then(res => {
        const {access_token, refresh_token, profile} = res.data;
        Cookies.set('access_token', access_token); 
        Cookies.set('refresh_token', refresh_token);
        Cookies.set( 'name',profile.name );
        Cookies.set( 'address', profile.address); 
        Cookies.set( 'nic', profile.nic);
        Cookies.set( 'phoneno', profile.phoneno);
        Cookies.set( 'email', profile.email);
        var arr = JSON.stringify(profile.roles) 
        Cookies.set( 'roles',arr);
        return res;
    })

    }

    signup(name, email, address, phoneno, nic, password){
        return axios.post(API_URL + 'user/register', {name, email, address, phoneno, nic, password})
        .then(res => {
            return res;
        })
    }

    logout(){
        //localStorage.removeItem('isLoggedIn');
       
        console.log('calledd logout');
    }

    
}
export default new AuthService;