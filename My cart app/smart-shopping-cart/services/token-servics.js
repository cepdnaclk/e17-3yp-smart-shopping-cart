import { AsyncStorage } from "react-native";

class TokenServive {


    async getLocalRefreshToken(){
        const refresh = await AsyncStorage.getItem('refresh_token');
        if(refresh)
            return refresh;
    }

    async getLocalAccessToken(){
        const user = await AsyncStorage.getItem('user');
        if(user)
            return user;
    }

    async updateLocalAccessToken(token){
        AsyncStorage.removeItem('user');
        AsyncStorage.setItem('user', token);
    }

    
}

export default new TokenServive();