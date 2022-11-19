import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import { color } from "../assets/color";
import { LinearGradient } from "expo-linear-gradient";

import {} from "react-native";
import DialogInput from "react-native-dialog-input";
import userService from "../services/user-service";
//import Modal from 'react-native-modalbox';

import Modal from "../components/passwordModal";
import Imagemodal from "../components/imageModal";
import { colors } from "../assets/colors";

export default function Profile() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const [image, setImage] = useState();
  const [imageModalVisible, setImageModalVisible] = useState(false);

  useEffect(() => {
    userService
      .getProfile()
      .then((res) => {
        //console.log(res);
        setName(res.data.name);
        setEmail(res.data.email);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  const handleImageOnSubmit = (image) => {
    console.log(image, "no image got");
  };

  const handleOnSubmit = (oldPassword, newPassword) => {
    userService.changePassword(oldPassword, newPassword).then((res) => {
      if (res.data.success == true)
        Alert.alert("Password is changed successfully", "", [{ text: "Okay" }]);
      else Alert.alert(res.data.message, "Try again!.", [{ text: "Okay" }]);
    });
  };

  //console.log(name, 'set name ......')
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={color.primaryColor} style={{ flex: 1 }}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.info}>UX Designer / Mobile developer</Text>
            <Text style={styles.description}>Email : {email}</Text>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => setImageModalVisible(true)}
            >
              {/* <Text>Upload Image</Text> */}
              <Imagemodal
                visible={imageModalVisible}
                onclose={() => setImageModalVisible(false)}
                onSubmit={handleImageOnSubmit}
              />
              <LinearGradient
                colors={color.secondaryColor}
                style={styles.buttonContainer}
              >
                <Text style={styles.textSign}>Upload Image</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => setModalVisible(true)}
            >
              {/* <Text>Change Password</Text> */}
              <Modal
                visible={modalVisible}
                onclose={() => setModalVisible(false)}
                onSubmit={handleOnSubmit}
              />
              <LinearGradient
                colors={color.secondaryColor}
                style={styles.buttonContainer}
              >
                <Text style={styles.textSign}>Change Password</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: colors.secondaryColor,
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: colors.secondaryColor,
    marginTop: 10,
    textAlign: "center",
    paddingBottom: 35,
  },
  textSign: {
    color: color.fontColor,
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    // backgroundColor: "#00BFFF",
  },
});
