import axios from 'axios';
import Cookies from 'js-cookie';


const API_URL = 'http://192.168.8.126:5000/';

class UserService{ 
 

    

    updateUser(update){
    const access = Cookies.get('access_token'); 
    console.log('update funtion', update);
    return axios.put(API_URL +'profile/update',update, {headers:{ 'auth_token': access}} )
    .then(res => {
    
        return res;
    })

    }

    getUser(){
        const access = Cookies.get('access_token'); 
       
        return axios.get(API_URL +'profile/get', {headers:{ 'auth_token': access}} )
        .then(res => {
console.log(res.data, 'getuser');
            const {profile} = res.data;
       Cookies.remove();
        Cookies.set( 'name',res.data.name );
        Cookies.set( 'address', res.data.address); 
        Cookies.set( 'nic', res.data.nic);
        Cookies.set( 'phoneno', res.data.phoneno);
        Cookies.set( 'email', res.data.email);
    
       
        
            return res;
        })
    
    }

    updatePassword(password){
        const access = Cookies.get('access_token'); 
       
        return axios.put(API_URL +'profile/updatePassword', {'newpassword':password.new_password, 'currentpassword': password.current_password},{headers:{ 'auth_token': access}} )
        .then(res => {
          
    
       
        
            return res;
        })
    
    }

    uploadImage(file){

        const access = Cookies.get('access_token'); 
       const formdata = new FormData();
       formdata.append('cropped-image', file)
        return axios.post(API_URL +'profile/uploadImage', formdata,{headers:{ 'auth_token': access}} )
        .then(res => {
          
    
        
        
            return res;
        })

    }

    

    
}
export default new UserService;