import React, { Component } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AsyncStorage } from "react-native";
import userService from "../services/user-service";

import { color } from "../assets/color";
import { LinearGradient } from "expo-linear-gradient";

class LogOutScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={color.primaryColor}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {/* <View>
            <Button title="Logout" onPress={this.logout} />
          </View> */}

          <TouchableOpacity onPress={this.logout}>
            <LinearGradient
              colors={color.secondaryColor}
              style={styles.buttonContainer}
            >
              <Text style={styles.textSign}>Log Out</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }

  logout = async (props) => {
    AsyncStorage.removeItem("user");
    await userService
      .logout()
      .then((res) => {
        if (res.data.success) {
          AsyncStorage.removeItem("refresh");
          this.props.navigation.navigate("SplashScreen");
        }
      })
      .catch((error) => console.log(error));
  };
} //class end

export default LogOutScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#008080", //#1b1b33',//#009387',
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    //  backgroundColor: "#fff",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    // backgroundColor: "#00BFFF",
  },

  textSign: {
    color: color.fontColor,
    fontWeight: "bold",
    fontSize: 18,
  },
});
