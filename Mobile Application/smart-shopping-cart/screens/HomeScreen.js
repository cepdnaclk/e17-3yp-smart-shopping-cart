import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//importing required modules and components
import MenuItem from "../components/MenuItem";

//for colors
import { colors } from "../assets/colors";

//package for icons
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

//func for Home screen
const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <MenuItem
        goTo={() => props.navigation.navigate({ routeName: "ToBuyList" })}
        title="Add To-Buy List"
      />
      <MenuItem
        goTo={() => props.navigation.navigate({ routeName: "ConnectCart" })}
        title="Connect Cart"
      />

      <MenuItem
        goTo={() => props.navigation.navigate({ routeName: "RecentActivity" })}
        title="Recent Activity"
      />

      <MenuItem
        goTo={() => props.navigation.navigate({ routeName: "NearSuperMarket" })}
        title="Find Near Super Market"
      />
      <MenuItem
        goTo={() => props.navigation.navigate({ routeName: "Payment" })}
        title="Payment"
      />
    </View>
  );
};

export default HomeScreen;

//func for navigation
HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Home",
    headerLeft: () => (
      <Ionicons
        name="ios-menu-sharp"
        size={40}
        color={colors.secondaryColor}
        style={{ margin: 20 }}
        onPress={() => navData.navigation.toggleDrawer()}
      />
    ),

    headerRight: () => (
      <FontAwesome
        name="user-circle-o"
        size={34}
        color={colors.secondaryColor}
        style={{ margin: 20 }}
        onPress={() => {navData.navigation.navigate({ routeName: "Profile" })}} //go to user page
      />
    ),
  };
};
//for style
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondaryColor,
  },
  menus:{
    backgroundColor:'#fff',
  },
});
