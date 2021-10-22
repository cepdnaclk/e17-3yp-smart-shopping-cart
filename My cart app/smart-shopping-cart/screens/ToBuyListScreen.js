import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
} from "react-native";

import axios from "axios";

//for colors
import { colors } from "../assets/colors";
//for adder icon
import { Ionicons } from "@expo/vector-icons";

//importing actions
import * as ToBuyListActions from "../store/actions/ListReducers";

import { useDispatch } from "react-redux";

//func for RecentActivity screen
const ToBuyListScreen = (props) => {
  const [products, getProducts] = useState([]);

  const API_URL = "http://192.168.8.100:3000/products";

  useEffect(() => {
    getAllproducts();
  }, []);

  const getAllproducts = () => {
    axios
      .get(API_URL)
      .then((response) => {
        const allProducts = response.data;
        getProducts(allProducts);
      })
      .catch((error) => response.send({ message: error }));
  };

  const dispatch = useDispatch();

  const RenderItem = (itemData) => {
    return (
      <View style={styles.gridItems}>
        {/* this is for image */}

        <View style={styles.itemLeft}>
          <ImageBackground
            source={{ uri: itemData.item.imgUrl }}
            style={styles.imgBg}
          >
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
              style={{ marginLeft: 150 }}
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
        keyExtractor={(item) => item.productId}
        data={products}
        renderItem={RenderItem} //hav to add items to final To-Buy List
        numColumns={1}
        style={{ backgroundColor: colors.secondaryColor }}
      ></FlatList>
    </View>
  );
};

export default ToBuyListScreen;

const { height, width } = Dimensions.get("window");

//for style
const styles = StyleSheet.create({
  gridItems: {
    flexDirection: "row",
    height: height * 0.2,
    margin: 10,
    backgroundColor: colors.primaryColor,
    borderRadius: 10,
    overflow: "hidden",
    alignContent: "space-between",
  },

  itemLeft: {
    flex: width * 0.4,
  },
  itemRight: {
    flex: width * 0.6,
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
