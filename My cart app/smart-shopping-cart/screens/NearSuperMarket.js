import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    backgroundColor: "#f0f8ff",
  },
});
