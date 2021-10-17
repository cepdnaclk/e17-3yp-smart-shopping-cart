//func is for render Items in ADD to-buy List and final list
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";

//for adder icon
import { Ionicons } from "@expo/vector-icons";

const RenderItem = (itemData) => {
  return (
    <View style={styles.gridItems}>
      {/* this is for image */}

      <View style={styles.itemLeft}>
        <ImageBackground source={itemData.item.img} style={styles.imgBg}>
          <Text style={styles.title}>{itemData.item.title}</Text>
        </ImageBackground>
      </View>

      {/* diplay price and add icon */}
      <View style={styles.itemRight}>
        <Text style={styles.itemDetails}>{itemData.item.description}</Text>

        <Text style={styles.itemDetails}>Type : {itemData.item.type}</Text>

        <Text style={styles.itemDetails}>Price : Rs.{itemData.item.price}</Text>

        <Ionicons
          name="add-circle-sharp"
          size={28}
          style={{
            marginLeft: 180,
          }}
          color="#f0f8ff"
          onPress={() => {
            dispatch(ToBuyListActions.addToBuyList(itemData.item)); //calling func used in actions
          }} //hav to add items to final To-Buy List
        />
      </View>
    </View>
  );
};

export default RenderItem;

//for style
const styles = StyleSheet.create({
  gridItems: {
    flexDirection: "row",
    height: 150,
    margin: 10,
    backgroundColor: "#4169e1",
    borderRadius: 10,
    overflow: "hidden",
    alignContent: "space-between",
  },

  itemLeft: {
    flex: 3,
  },
  itemRight: {
    flex: 4,
  },
  itemDetails: {
    fontFamily: "open-sans-bold",
    fontSize: 12,
    color: "#f0f8ff",

    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: "left",
  },
  imgBg: { width: "100%", height: "100%", justifyContent: "flex-end" },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    color: "#f0f8ff",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: "center",
  },
});
