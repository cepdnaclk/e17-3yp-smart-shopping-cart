import axios from "axios";
// import authHeader from "./auth-header";
import { AsyncStorage } from "react-native";

const API_URL = "http:192.168.8.100:3000";

import api from "./api";

class UserService {
  async getProfile() {
    const user = await AsyncStorage.getItem("user");

    console.log("function getprofile");

    return api.get("profile").then((response) => {
      return response;
    });
  }

  async getJwtVerification() {
    const user = await AsyncStorage.getItem("user");
    const refresh = await AsyncStorage.getItem("refresh_token");

    console.log("function clled jwt verification");

    return axios
      .get(API_URL + "user/verification", {
        headers: { auth_token: user, refresh_token: refresh },
      })
      .then((response) => {
        return response;
      });
  }

  async changePassword(currentpassword, newpassword) {
    const user = await AsyncStorage.getItem("user");

    return api
      .put("profile/updatePassword", { currentpassword, newpassword })
      .then((response) => {
        // if (response.headers.auth_token) {
        //     AsyncStorage.removeItem('user');
        //     AsyncStorage.removeItem('refresh_token');

        //     AsyncStorage.setItem('user', response.data.access_token);
        //     AsyncStorage.setItem('refresh_token', response.data.refresh_token);

        // }

        return response;
      });
  }

  async uploadImage(image) {
    const user = await AsyncStorage.getItem("user");

    console.log("image upload user service");
    return api.post("profile/uploadImage", { image }).then((response) => {
      return response;
    });
  }

  async renewAccessToken() {
    const refresh_token = await AsyncStorage.getItem("refresh_token");

    return axios
      .get(API_URL + "user/renewAccessToken", {
        headers: { refresh_token: refresh_token },
      })
      .then((res) => {
        if (res.headers.auth_token) {
          AsyncStorage.removeItem("user");
          AsyncStorage.setItem("user", res.data.access_token);
          return res;
        }
        return res;
      });
  }

  async logout() {
    const refresh_token = await AsyncStorage.getItem("refresh_token");

    return axios
      .get(API_URL + "user/logout", {
        headers: { refresh_token: refresh_token },
      })
      .then((res) => {
        console.log(res.data.success);

        return res;
      })
      .catch((error) => {
        console.log(error, "logout");
      });
  }
  getItems() {
    return api.get("items");
  }
}

export default new UserService();
