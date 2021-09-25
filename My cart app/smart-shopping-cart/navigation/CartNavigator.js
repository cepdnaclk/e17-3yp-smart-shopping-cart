import React from "react";
import { Text } from "react-native";

//stack navigation (npm install react-navigation-stack)
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

//package for bottom tab navigation
import { createBottomTabNavigator } from "react-navigation-tabs";

//package for drawer navigation
import { createDrawerNavigator } from "react-navigation-drawer";

//package for icons
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

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

//func for stack navigation
const CartNavigator = createStackNavigator(
  //argument 1
  {
    //for home Screen
    Home: {
      screen: HomeScreen,
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
    Registration: {
      screen: SignUpNavigator,
    },
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

export default createAppContainer(MenuNavigator);
//coverts to react component to render in app.js
