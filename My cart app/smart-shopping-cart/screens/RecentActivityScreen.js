import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
//for colors
import { color } from "../assets/color";

//func for RecentActivity screen
const RecentActivityScreen = (props) => {
  return (
    <LinearGradient
      colors={color.primaryColor}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>RecentActivity Screen</Text>
    </LinearGradient>
  );
};

export default RecentActivityScreen;

//for style
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
