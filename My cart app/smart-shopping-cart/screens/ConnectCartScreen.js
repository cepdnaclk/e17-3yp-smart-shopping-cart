import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { AsyncStorage } from "react-native";
import axios from "axios";

import { color } from "../assets/color";
import { LinearGradient } from "expo-linear-gradient";

import { backendurl } from "../backendurl";
const API_URL = backendurl;

export default function App(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  // handel scanned value
  async function findCartName(id) {
    // alert(id);
    const user = await AsyncStorage.getItem("user");
    axios
      .get(API_URL + "cart/" + id, { headers: { auth_token: user } })
      .then((Response) => {
        alert("connected with cart " + Response.data);
        //props.navigation.navigate("AddedList");
        props.navigation.navigate({ routeName: "ItemsInCart" });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    findCartName(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={color.primaryColor} style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <TouchableOpacity onPress={() => setScanned(false)}>
            <LinearGradient
              colors={color.secondaryColor}
              style={styles.newButton}
            >
              <Text style={styles.textSign}>Tap to Scan Again</Text>
            </LinearGradient>
          </TouchableOpacity>
          // <Button
          //   title={"Tap to Scan Again"}
          //   onPress={() => setScanned(false)}
          // />
        )}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textSign: {
    color: color.fontColor,
    fontWeight: "bold",
    fontSize: 18,
  },
  newButton: {
    marginTop: 70,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
    alignSelf: "center",
  },
});
