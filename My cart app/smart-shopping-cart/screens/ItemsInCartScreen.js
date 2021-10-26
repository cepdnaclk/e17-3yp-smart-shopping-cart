import React, { useState, useEffect, useRef } from "react";
import numeral from "numeral";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  AsyncStorage,
} from "react-native";

//for colors
import { colors } from "../assets/colors";

//for colors
import { color } from "../assets/color";
import { LinearGradient } from "expo-linear-gradient";

//package for icons
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
//importing actions
import * as ToBuyListActions from "../store/actions/ListReducers";

import itemService from "../services/item-service";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [callback, delay]);
}

//func component for Added To Buy lsit screen
const ItemsInCartScreen = (props) => {
  const [itemData, setItemData] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState("");

  useInterval(async () => {
    itemService
      .getCurrentUpdate()
      .then((res) => {
        //console.log(res.data, 'dataaaaaaaa');
        setItemData(res.data.items);
        setCart(res.data.cart);
        totalcalc();
      })
      .catch((error) => {
        console.log(error, "errorrrrrrr");
      });
  }, 2000);

  const totalcalc = () => {
    let Tot = 0;
    itemData.map(({ id, name, price, count }) => {
      Tot = Tot + price * count;
    });
    setTotal(Tot);
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={color.primaryColor} style={{ flex: 4 }}>
        <View style={[styles.billStyle, { marginTop: 60 }]}>
          <Text style={styles.billText}>
            Cart : {cart}
            {"\n"}
            Total Amount to be paid is Rs {numeral(total).format("0.00")}
          </Text>
        </View>
        <View>
          {itemData.map(({ id, name, price, count }) => {
            //console.log(item, count);
            return (
              <View>
                <LinearGradient
                  style={styles.gridItems}
                  colors={color.secondaryColor}
                >
                  <View style={styles.itemLeft}>
                    <Text style={styles.title}>{name}</Text>
                  </View>
                  <View style={styles.itemRight}>
                    <Text style={styles.itemDetails}>Quantity : {count}</Text>
                    <Text style={styles.itemDetails}>Price : Rs. {price}</Text>
                    <Text style={styles.itemDetails}>
                      Total : Rs. {price * count}
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            );
          })}
        </View>
      </LinearGradient>
    </View>
  );
};

export default ItemsInCartScreen;

const { height, width } = Dimensions.get("window");

//for style
const styles = StyleSheet.create({
  gridItems: {
    flexDirection: "row",
    height: height * 0.15,
    margin: 10,
    //backgroundColor: colors.primaryColor,
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
  billStyle: {
    height: height * 0.1,
    margin: 20,
    backgroundColor: color.fontColor,
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
});
