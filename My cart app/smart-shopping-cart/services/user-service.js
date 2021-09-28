import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://192.168.109.32:3000/posts/';

class UserService{
    getPublicContent(){
        return axios.get(API_URL);
    }
}

export default new UserService();