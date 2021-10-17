import React from "react";
import { View, Text, StyleSheet } from "react-native";

//for colors
import { colors } from "../assets/colors";

//func for RecentActivity screen
const NearSuperMarket = (props) => {
  return (
    <View style={styles.screen}>
      <Text>NearSuperMarket Screen</Text>
    </View>
  );
};

export default NearSuperMarket;

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
