import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Modal,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";

//colors
import { color } from "../assets/color";
import { LinearGradient } from "expo-linear-gradient";

export default passwordModal = ({ visible, onclose, onSubmit }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor == "oldPassword") setOldPassword(text);
    if (valueFor == "newPassword") setNewPassword(text);
  };

  const handleSubmit = () => {
    if (!oldPassword.trim() && !newPassword.trim()) return onclose();

    onSubmit(oldPassword, newPassword);
    setOldPassword("");
    setNewPassword("");
    onclose();
  };

  const closeModal = () => console.log(oldPassword, newPassword);

  return (
    <View style={{}}>
      <StatusBar hitten />
      <Modal visible={visible} animationType="fade">
        <LinearGradient
          colors={color.primaryColor}
          style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
        >
          <View style={styles.container}>
            <TextInput
              value={oldPassword}
              placeholder="Current Password"
              style={[styles.input, styles.title]}
              onChangeText={(text) => handleOnChangeText(text, "oldPassword")}
            />
            <TextInput
              value={newPassword}
              placeholder="New Password"
              style={[styles.input, styles.title]}
              onChangeText={(text) => handleOnChangeText(text, "newPassword")}
            />
          </View>
          <TouchableOpacity onPress={handleSubmit}>
            <LinearGradient
              colors={color.secondaryColor}
              style={styles.buttonContainer}
            >
              <Text style={styles.textSign}>Change</Text>
            </LinearGradient>
          </TouchableOpacity>

          {oldPassword.trim() || newPassword.trim() ? (
            <TouchableOpacity onPress={onclose}>
              <LinearGradient
                colors={color.secondaryColor}
                style={styles.buttonContainer}
              >
                <Text style={styles.textSign}>Close</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : null}
          <TouchableWithoutFeedback onPress={handleModalClose}>
            <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
          </TouchableWithoutFeedback>
        </LinearGradient>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 0.25,
    borderBottomColor: color.fontColor,
    fontSize: 18,
    color: color.fontColor,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  title: {
    height: 40,
    marginBottom: 15,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
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
    backgroundColor: "#00BFFF",
    alignSelf: "center",
  },
  textSign: {
    color: color.fontColor,
    fontWeight: "bold",
    fontSize: 18,
  },
});
