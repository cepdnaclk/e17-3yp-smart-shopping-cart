import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//func for SignUp screen
const SignUpScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Signup Screen</Text>
    </View>
  );
};

export default SignUpScreen;

//for style
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
});
