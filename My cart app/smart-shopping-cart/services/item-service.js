import axios from "axios";
// import authHeader from "./auth-header";
import { AsyncStorage } from "react-native";

import api from "./api";

import { backendurl } from "../backendurl";

const API_URL = backendurl;

class ItemService {
    async getCurrentUpdate() {
        const user = await AsyncStorage.getItem("user");

        //console.log("function get current item");

        return api.get("items/itemInCart").then((response) => {
            return response;
            console.log(response)
        });
    }


}

export default new ItemService();
