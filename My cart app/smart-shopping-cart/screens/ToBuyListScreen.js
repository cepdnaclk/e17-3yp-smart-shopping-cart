import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";

//for colors
import { colors } from "../assets/colors";

import { useSelector, useDispatch } from "react-redux";
//importing actions
import * as ToBuyListActions from "../store/actions/ListReducers";
//for adder icon
import { Ionicons } from "@expo/vector-icons";

//func component for ToBuyList screen
const ToBuyListScreen = (props) => {
  const listOfItemDetails = useSelector(
    (state) => state.toBuyListReducer.listItems
  );
  const dispatch = useDispatch();

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

          <Text style={styles.itemDetails}>
            Price : Rs.{itemData.item.price}
          </Text>
          <View>
            <Ionicons
              name="add-circle-sharp"
              size={28}
              style={{
                marginLeft: 180,
              }}
              color={colors.secondaryColor}
              onPress={() => {
                dispatch(ToBuyListActions.addToBuyList(itemData.item)); //calling func used in actions
              }} //hav to add items to final To-Buy List
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={listOfItemDetails}
        renderItem={RenderItem} //hav to add items to final To-Buy List
        numColumns={1}
        style={{ backgroundColor: colors.secondaryColor }}
      ></FlatList>
    </View>
  );
};

export default ToBuyListScreen;

//for style
const styles = StyleSheet.create({
  gridItems: {
    flexDirection: "row",
    height: 150,
    margin: 10,
    backgroundColor: colors.primaryColor,
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
    fontSize: 14,
    color: colors.secondaryColor,

    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: "left",
  },
  imgBg: { width: "100%", height: "100%", justifyContent: "flex-end" },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    color: colors.secondaryColor,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: "center",
  },
});
