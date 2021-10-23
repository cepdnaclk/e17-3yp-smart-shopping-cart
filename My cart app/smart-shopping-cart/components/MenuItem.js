import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

//for colors
import { colors } from "../assets/colors";

//to display items in homescreen
const MenuItem = (props) => {
  return (
    <View style={styles.contentsItems}>
      <TouchableNativeFeedback onPress={props.goTo}>
        <View style={styles.container}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default MenuItem;

//styles
const styles = StyleSheet.create({
  contentsItems: {
    flex: 1,
    margin: 20,
    height: 100,
    width: 300,
  },
  container: {
    flex: 1,
    borderRadius: 10,

    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: colors.primaryColor,
  },
  title: {
    fontFamily: "special-elite",
    fontSize: 22,
    textAlign: "right",
    color: "#e0ffff",
  },
});
