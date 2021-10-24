import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
//for colors
import { colors } from "../assets/colors";

//func for RecentActivity screen
const RecentActivityScreen = (props) => {
  return (
    <LinearGradient colors={["#0016d2", `#ff8c00`]}>
      <View style={styles.screen}>
        <Text>RecentActivity Screen</Text>
      </View>
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
