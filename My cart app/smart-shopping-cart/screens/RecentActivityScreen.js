import React from "react";
import { View, Text, StyleSheet } from "react-native";

//for colors
import { colors } from "../assets/colors";

//func for RecentActivity screen
const RecentActivityScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>RecentActivity Screen</Text>
    </View>
  );
};

export default RecentActivityScreen;

//for style
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondaryColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
