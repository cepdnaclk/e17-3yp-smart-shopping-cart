import axios from 'axios';
import Cookies from 'js-cookie';
import { hostAddress } from '../constant';

const API_URL = hostAddress;

class ItemService{ 
 

    getItem(email, password){
const access = Cookies.get('access_token'); 
console.log(access);
    return axios.get(API_URL +'items/all',{headers:{ 'auth_token': access}} )
    .then(res => {
    console.log(res, 'item service');
        return res;
    })

    }


    addItem(item){
    const access = Cookies.get('access_token'); 
    console.log(access);
    return axios.post(API_URL +'items/add',item,{headers:{ 'auth_token': access}} )
    .then(res => {
    
        return res;
    })

    }

    deleteItem(itemId){
    const access = Cookies.get('access_token'); 
    console.log('delete funtion');
    return axios.delete(API_URL +'items/delete/'+itemId,{headers:{ 'auth_token': access}} )
    .then(res => {
    
        return res;
    })

    }


    updateItem(itemId, update){
    const access = Cookies.get('access_token'); 
    console.log('update funtion', update, itemId);
    return axios.put(API_URL +'items/update/'+itemId,update, {headers:{ 'auth_token': access}} )
    .then(res => {
    
        return res;
    })

    }

    

    
}
export default new ItemService;