import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//importing required modules and components
import MenuItem from "../components/MenuItem";

import { colors } from "../assets/colors";
//for colors
import { color } from "../assets/color";
import { LinearGradient } from "expo-linear-gradient";

//package for icons
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

//func for Home screen
const HomeScreen = (props) => {
  return (
    <LinearGradient colors={color.primaryColor} style={styles.screen}>
      <View>
        <MenuItem
          goTo={() => props.navigation.navigate({ routeName: "ToBuyList" })}
          title="To-Buy List"
        />
        <MenuItem
          goTo={() => props.navigation.navigate({ routeName: "ConnectCart" })}
          title="Connect Cart"
        />

        <MenuItem
          goTo={() =>
            props.navigation.navigate({ routeName: "RecentActivity" })
          }
          title="Recent Activity"
        />
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

//func for navigation
HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Home",
    // headerTransparent: true,
    //headerShown: false,

    headerStyle: {
      backgroundColor: "transparent",
    },
    headerLeft: () => (
      <Ionicons
        name="ios-menu-sharp"
        size={40}
        color={color.fontColor}
        style={{ margin: 20 }}
        onPress={() => navData.navigation.toggleDrawer()}
      />
    ),

    headerRight: () => (
      <FontAwesome
        name="user-circle-o"
        size={34}
        color={color.fontColor}
        style={{ margin: 20 }}
        onPress={() => {
          navData.navigation.navigate({ routeName: "Profile" });
        }} //go to user page
      />
    ),
  };
};
//for style
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    //backgroundColor: color.primaryColor,
  },
  menus: {
    //backgroundColor: "#fff",
  },
});
