import React, { useContext } from "react";
import axios from "axios";
import { AsyncStorage } from "react-native";

const API_URL = "http://192.168.43.206:3000/";

class AuthService {
  async login(email, password) {
    //const [storedCredentials, setStoredCredentials] = useContext(CredentialContext);
    console.log("function clled");

    const response = await axios.post(API_URL + "user/login", {
      email,
      password,
    });
    //console.log(response.headers.auth_token);
    if (response.headers.auth_token) {
      AsyncStorage.setItem(response.data);
      //AsyncStorage.setItem('isLoggedIn', '1');
      //this.persistLogin(response.data);
      console.log("auth token created");
    }
    return response.data;
  }

  register(name, email, password) {
    console.log("function called signup");
    return axios
      .post(API_URL + "user/register", { name, email, password })
      .then((response) => {
        //console.log(response.headers.auth_token);
        return response;
      });
  }

  getCurrentUser() {
    return JSON.parse(AsyncStorage.getItem("user"));
  }
}

export default new AuthService();
