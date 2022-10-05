import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Dimensions,
} from "react-native";

//for colors
import { color } from "../assets/color";
import { LinearGradient } from "expo-linear-gradient";

//to display items in homescreen
const MenuItem = (props) => {
  return (
    <View style={styles.contentsItems}>
      <TouchableNativeFeedback onPress={props.goTo}>
        <LinearGradient colors={color.secondaryColor} style={styles.container}>
          <View>
            <Text style={styles.title}>{props.title}</Text>
          </View>
        </LinearGradient>
      </TouchableNativeFeedback>
    </View>
  );
};

export default MenuItem;

const { height, width } = Dimensions.get("window");

//styles
const styles = StyleSheet.create({
  contentsItems: {
    flex: 1,
    margin: 20,

    width: width * 0.5,
  },
  container: {
    flex: 1,
    shadowColor: "black",
    height: height * 0.5,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 50,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: colors.primaryColor,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
    color: color.fontColor,
  },
});
