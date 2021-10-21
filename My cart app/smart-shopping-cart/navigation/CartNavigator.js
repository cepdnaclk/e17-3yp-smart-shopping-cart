import React, {Component, useContext} from "react";
import { ActivityIndicator, Text, StyleSheet, View, Alert } from "react-native";
import { AsyncStorage } from "react-native";

//stack navigation (npm install react-navigation-stack)
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

//package for bottom tab navigation
import { createBottomTabNavigator } from "react-navigation-tabs";

//package for drawer navigation
import { createDrawerNavigator } from "react-navigation-drawer";


//package for icons
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

import userService from '../services/user-service';

//importing required modules for navigation
import HomeScreen from "../screens/HomeScreen";
import ConnectCartScreen from "../screens/ConnectCartScreen";
import RecentActivityScreen from "../screens/RecentActivityScreen";
import ToBuyListScreen from "../screens/ToBuyListScreen";
import NearSuperMarketScreen from "../screens/NearSuperMarket";
import FinalAddedListScreen from "../screens/FinalAddedList";
import SplashScreen from "../screens/SplashScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProfileScreen from "../screens/ProfileScreen";

import LogOutScreen from "../screens/LogOutScreen";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import PaymentScreen from "../screens/PaymentScreen";


//func for stack navigation
const CartNavigator = createStackNavigator(
  //argument 1
  {
    //for home Screen
    Home: {
      screen: HomeScreen,
    },
    Profile:{
      screen: ProfileScreen,
    },
    //ToBuy List Screen
    ToBuyList: {
      screen: ToBuyListScreen,
      navigationOptions: {
        headerTitle: "Add To-Buy List",
      },
    },
    //ConnectCart Screen
    ConnectCart: {
      screen: ConnectCartScreen,
      navigationOptions: {
        headerTitle: "Connect Cart",
      },
    },
    //Recent Activity Screen
    RecentActivity: {
      screen: RecentActivityScreen,
      navigationOptions: {
        headerTitle: "Recent Activity",
      },
    },
    // payment
    Payment: {
      screen: PaymentScreen,
      navigationOptions: {
        headerTitle: "Payment",
      },
    },
    //Super Market Screen
    NearSuperMarket: {
      screen: NearSuperMarketScreen,
      navigationOptions: {
        headerTitle: "Find Near SuperMarket",
      },
    },
  },
  {
    //arg 2

    //default options for navigation
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#4169e1",
      },
      headerTintColor: "#e0ffff",
      headerTitleAlign: "center",
    },
  }
);

//func for Stack navigation for Added to-Buy List
//need to implement upto items buyinf->bill payment->credit card
const AddedListStackNavigator = createStackNavigator(
  {
    AddList: {
      screen: FinalAddedListScreen,
    },
  },
  {
    //arg 2
    //default options for navigation
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#4169e1",
      },
      headerTintColor: "#e0ffff",
      headerTitleAlign: "center",
    },
  }
);


//func for bottom tab navigation
const AddedListTabNavigator = createBottomTabNavigator(
  //arg1
  {
    LastScreen: {
      screen: CartNavigator, //adding stack navigation here
      navigationOptions: {
        tabBarLabel: "Recent Screen", //give name vissible
        tabBarIcon: (tabInfo) => (
          <MaterialIcons
            name="add-to-home-screen"
            size={24}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    AddedList: {
      screen: AddedListStackNavigator,
      navigationOptions: {
        headerTitle: "Added To-Buy List",
        tabBarLabel: "Added List", //give name vissible
        tabBarIcon: (tabInfo) => (
          <FontAwesome name="list" size={24} color={tabInfo.tintColor} />
        ),
      },
    },
  },
  //arg2 fro default options
  {
    tabBarOptions: {
      activeTintColor: "#4169e1",
      style: {
        backgroundColor: "#f0f8ff",
        height: 50,
      },
    },
  }
);


const LogOutNavigator = createBottomTabNavigator(
  //arg1
  {
    LastScreen: {
      screen: LogOutScreen, //adding stack navigation here
      navigationOptions: {
        tabBarLabel: "Recent Screen", //give name vissible
        tabBarIcon: (tabInfo) => (
          <MaterialIcons
            name="add-to-home-screen"
            size={24}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    AddedList: {
      screen: AddedListStackNavigator,
      navigationOptions: {
        headerTitle: "Added To-Buy List",
        tabBarLabel: "Added List", //give name vissible
        tabBarIcon: (tabInfo) => (
          <FontAwesome name="list" size={24} color={tabInfo.tintColor} />
        ),
      },
    },
  },
  //arg2 fro default options
  {
    tabBarOptions: {
      activeTintColor: "#4169e1",
      style: {
        backgroundColor: "#f0f8ff",
        height: 50,
      },
    },
  }
);

//func for splash and signup
const SignUpNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
  },
  SignInScreen: {
    screen: SignInScreen,
  },
  SignUpScreen: {
    screen: SignUpScreen,
  },
});

//func for menu drawer navigation
const MenuNavigator = createDrawerNavigator(
  { 
    HomeScreen: {
      screen: AddedListTabNavigator,
      navigationOptions: {
        drawerLabel: "Home",
      },
    },
    AddedList: {
      screen: AddedListStackNavigator,
      navigationOptions: {
        drawerLabel: "Added To-Buy List",
      },
    },
    LogOut :{
      screen : LogOutNavigator    
    },
    Registration :{
      screen : SignUpNavigator
    }
    
  },
  {
    //arg2
    contentOptions: {
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

//console.log(AsyncStorage.isLoggedIn);

class AuthLoadingScreen extends Component{  //loading screen until check for asyncstorage
  constructor(props){
    super(props);
    this._loadingData();
  }
  render(){
    return(
      <View style={StyleSheet.container}>
        <ActivityIndicator/>
        <StatusBar barStyle = 'default'/>
      </View>
    );
  }

  _loadingData = async()=>{
    
    const isLoggedIn = await AsyncStorage.getItem('user');    //get isloggedinv val
    if (isLoggedIn){    //IF USER LOGGED IN THEN WE HAVE TO CHECK VERIFY JWT

      console.log('Need to verify jwt');

      await userService.getJwtVerification().then(async res=>{
        //console.log(res.data);
        if(res.data.success){

          console.log('1111');
          this.props.navigation.navigate('App'); //navigate
        }

        else if(res.data.refreshtoken_expired){

          console.log('2222');
          Alert.alert('Session expired try sign in!','',[{text:'Okay'}]);
          this.props.navigation.navigate('Auth');
        }

        else if(res.data.accesstoken_expired){
         const response =  await userService.renewAccessToken().then(res=>{
         
            if(res.headers.auth_token){
              this.props.navigation.navigate('App'); //navigate

            }


          }).catch(error=>{
            console.log(error);
          this.props.navigation.navigate('Auth'); //navigate

          });
          
        }

        else{console.log('3333');
          
          this.props.navigation.navigate('Auth');
          alert('Unauthorized access!');
        }

        }).catch(error=>{console.log(error.message, 'cart navigator');

          console.log('4444');
          this.props.navigation.navigate('Auth');
          //alert(error.message);

        });
    }

    else{     //IF NOT LOGGED IN DIRECTLY TO AUTH
      console.log('Start')
      this.props.navigation.navigate('Auth');
    }

   
  }

}

export default createAppContainer(createSwitchNavigator(    //creates container
  {
  AuthLoading :AuthLoadingScreen,
  App : MenuNavigator,
  Auth : SignUpNavigator

},
{
  initialRouteName : 'AuthLoading'
}));


const styles = StyleSheet.create({
  container:{
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff'
  },
  
});



/*
 
const login = () => {
  const {isLoggedIn} = useLogin();
  return (<CredentialContext>
    {({storedCredentials})=>(
      <NavigationContainer>
        {storedCredentials ? <MenuNavigator/> : <SignUpNavigator/>}
      </NavigationContainer>
    )}
  </CredentialContext>);
};
*/
//coverts to react component to render in app.js
//export default login;

//const login = AsyncStorage.isLoggedIn ? MenuNavigator : SignUpNavigator;