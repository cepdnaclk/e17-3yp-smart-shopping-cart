import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";

import RenderItem from "./RenderItem";

//for adder icon
import { Ionicons } from "@expo/vector-icons";

const ShowItem = (props) => {
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={RenderItem} //hav to add items to final To-Buy List
        numColumns={1}
        style={{ backgroundColor: "#f0f8ff" }}
      ></FlatList>
    </View>
  );
};

export default ShowItem;
