import axios from "axios";
import authHeader from "./auth-header";
import { AsyncStorage } from "react-native";

const API_URL = "http://192.168.8.101:80/";

class UserService {
  async getProfile() {
    const user = await AsyncStorage.getItem("user");

    console.log("function getprofile");

    return axios
      .get(API_URL + "profile", { headers: { auth_token: user } })
      .then((response) => {
        //console.log(response);
        //console.log(response.headers.auth_token);
        return response;
      });
  }

  async getJwtVerification() {
    const user = await AsyncStorage.getItem("user");

    console.log("function clled jwt verification");

    return axios
      .get(API_URL + "profile/verification", { headers: { auth_token: user } })
      .then((response) => {
        //console.log(response);
        //console.log(response.headers.auth_token);
        return response;
      });
  }

  async changePassword(currentpassword, newpassword) {
    const user = await AsyncStorage.getItem("user");

    console.log("password change func");
    return axios
      .put(
        API_URL + "profile/updatePassword",
        { currentpassword, newpassword },
        { headers: { auth_token: user } }
      )
      .then((response) => {
        if (response.headers.auth_token) {
          AsyncStorage.removeItem("user");
          AsyncStorage.setItem("user", response.data);
        }
        //console.log(response);
        //console.log(response.headers.auth_token);
        return response;
      });
  }

  async uploadImage(image) {
    const user = await AsyncStorage.getItem("user");

    console.log("image upload user service");
    return axios
      .post(
        API_URL + "profile/uploadImage",
        { image },
        { headers: { auth_token: user } }
      )
      .then((response) => {
        //console.log(response);
        //console.log(response.headers.auth_token);
        return response;
      });
  }

  getItems() {
    return axios.get(API_URL + "items", { headers: authHeader() });
  }
}

export default new UserService();
