import React from "react";
import { View, Text, StyleSheet } from "react-native";

//func for ConnectCart screen
const ConnectCartScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>ConnectCart Screen</Text>
    </View>
  );
};

export default ConnectCartScreen;

//for style
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
});
