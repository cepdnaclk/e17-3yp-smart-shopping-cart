import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    backgroundColor: "#f0f8ff",
  },
});
