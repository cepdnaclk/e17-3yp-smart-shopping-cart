import React from "react";
import numeral from "numeral";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
} from "react-native";

//for colors
import { colors } from "../assets/colors";
//package for icons
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
//importing actions
import * as ToBuyListActions from "../store/actions/ListReducers";

//func component for Added To Buy lsit screen
const FinalAddedListScreen = (props) => {
  //to calculate total amount (total bill)
  const FinalTotalAmount = useSelector(
    (state) => state.toBuyListReducer.totalBill
  );

  //getting finalToBuyList
  const FinalToBuyList = useSelector((state) => {
    const transformedFinalItems = [];
    for (const key in state.toBuyListReducer.finalToBuyList) {
      {
        transformedFinalItems.push({
          productId: key,
          productTitle: state.toBuyListReducer.finalToBuyList[key].productTitle,
          productPrice: state.toBuyListReducer.finalToBuyList[key].productPrice,
          quantity: state.toBuyListReducer.finalToBuyList[key].quantity,
          sum: state.toBuyListReducer.finalToBuyList[key].sum,
          productImg: state.toBuyListReducer.finalToBuyList[key].productImg,
        });
      }
    }
    return transformedFinalItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    ); //sorting items
  });

  //to remove quantity and remove items from FInalToBuyList
  const dispatch = useDispatch();

  //func ro render items
  const RenderItem = (itemData) => {
    return (
      <View style={styles.gridItems}>
        {/* this is for image */}

        <View style={styles.itemHeader}>
          <ImageBackground
            source={{ uri: itemData.item.productImg }}
            style={styles.imgBg}
          >
            <Text style={styles.title} numberOfLines={2}>
              {itemData.item.productTitle}
            </Text>
          </ImageBackground>
        </View>

        {/* diplay price and add icon */}
        <View style={{ flexDirection: "row", alignContent: "space-between" }}>
          <Text style={styles.itemDetails}>
            Quantity: {itemData.item.quantity}
          </Text>
          <Ionicons
            name="md-trash"
            size={22}
            style={{ marginLeft: 50 }}
            color="red"
            onPress={() => {
              dispatch(
                ToBuyListActions.removeFromList(itemData.item.productId)
              );
            }} //hav to delete items to final To-Buy List
          />
        </View>
        <View>
          <Text style={{ ...styles.itemDetails }}>
            Price : Rs.{itemData.item.productPrice}
          </Text>
        </View>
      </View>
    );
  };

  return (
    //To display Total amount
    <View style={{ flex: 1, backgroundColor: colors.secondaryColor }}>
      <View style={styles.billStyle}>
        <Text style={styles.billText}>
          Total Amount to be paid is Rs.
          {numeral(FinalTotalAmount).format("0.00")}
        </Text>
      </View>
      <View>
        <Text style={styles.listTitle}>Added List of Items</Text>
      </View>

      <View style={{}}>
        <FlatList
          data={FinalToBuyList}
          keyExtractor={(item) => item.productId}
          renderItem={RenderItem} //hav to add items to final To-Buy List
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default FinalAddedListScreen;

const { height, width } = Dimensions.get("window");

//styles

const styles = StyleSheet.create({
  billStyle: {
    height: height * 0.05,
    margin: 20,
    backgroundColor: colors.primaryColor,
    borderRadius: 10,
  },
  billText: {
    fontFamily: "open-sans-bold",
    fontSize: width * 0.04,
    color: colors.secondaryColor,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    textAlign: "left",
  },
  listTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: colors.primaryColor,
    paddingHorizontal: 25,
  },
  gridItems: {
    height: height * 0.2,
    width: width * 0.45,
    margin: 10,
    backgroundColor: colors.primaryColor,
    borderRadius: 10,
    overflow: "hidden",
  },

  itemHeader: {
    height: "70%",
  },

  itemDetails: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    color: colors.secondaryColor,
    paddingHorizontal: 5,
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
