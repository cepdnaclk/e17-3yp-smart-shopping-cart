import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { colors } from "../assets/colors";
import { LinearGradient } from "expo-linear-gradient";
//package for icons
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

//func for Splash screen
const SplashScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Image source={require("../assets/cartlogo.png")} style={styles.logo} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Smart Shopping Cart</Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SignInScreen")}
          >
            <LinearGradient
              colors={[colors.primaryColor, "#0016d2"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons
                name="navigate-next"
                color={colors.secondaryColor}
                size={30}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("window");
const height_logo = height * 0.3;

//for style
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    height: height_logo,
    width: 280,
  },
  title: {
    color: colors.primaryColor,
    fontSize: 30,
    fontWeight: "bold",
  },

  button: {
    alignItems: "flex-end",
    marginTop: 20,
  },
  signIn: {
    width: 180,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: colors.secondaryColor,
    fontWeight: "bold",
    fontSize: 18,
  },
});
