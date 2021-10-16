import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://192.168.43.68:5000/';

class AuthService{ 
    login(email, password){

    return axios.post(API_URL +'user/login', {email, password})
    .then(res => {
        const {access_token, refresh_token} = res.data;
        Cookies.set('access_token', access_token); 
        Cookies.set('refresh_token', refresh_token);
        return res;
    })

    }

    signup(name, email, address, phoneno, nic, password){
        return axios.post(API_URL + 'user/register', {name, email, address, phoneno, nic, password})
        .then(res => {
            return res;
        })
    }

    
}
export default new AuthService;