import axios from "axios";
import TokenService from "./token-servics";
import { AsyncStorage } from "react-native";
import { or } from "react-native-reanimated";


const API_URL = "http://192.168.8.101:80/";


const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async function (config) {
    const token = await TokenService.getLocalAccessToken();

    if (token) {
      config.headers["auth_token"] = token;
    }
    return config;
  },
  (error) => {
    console.log(error, "send api");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    let originalConfig = err.config;

    if (err.response) {
      if (err.response.status === 401) {
        console.log("inteceptors");

        try {
          const res = await handle();

          if (res.status === 200) {
            const accessToken = res.headers.auth_token;
            await TokenService.updateLocalAccessToken(accessToken);

            originalConfig = {
              ...originalConfig,
              headers: {
                ...originalConfig.headers,
                autho_token: accessToken,
              },
            };
          }
        } catch (_error) {
          return Promise.reject(_error, "inceptor api");
        }
      }
      return instance(originalConfig);
    }
    return Promise.reject(err);
  }
);

const handle = async () => {
  try {
    const refresh_token = await TokenService.getLocalRefreshToken();

    return new Promise((resolve, reject) => {
      axios
        .get(API_URL + "user/renewAccessToken", {
          headers: { refresh_token: refresh_token },
        })
        .then(async (res) => {
          resolve(res);
        })
        .catch((error) => {
          console.log(error, "renew access token api");
        });
    });
  } catch (_error) {
    return console.log(_error, "api handle");
  }
};

export default instance;
