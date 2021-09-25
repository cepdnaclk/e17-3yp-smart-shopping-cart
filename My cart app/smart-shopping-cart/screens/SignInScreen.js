import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { colors } from "../assets/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
//func for SignIn screen
const SignInScreen = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    // isValidUser: true,
    // isValidPassword: true,
  });

  //func for inputchange
  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        // isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        // isValidUser: false,
      });
    }
  };

  //func for password change
  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        // isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        // isValidPassword: false,
      });
    }
  };

  //func for hide password or not using eye icon
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Welcome!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>E-mail</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your E-mail"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />

          {/* for check circle icon */}
          {data.check_textInputChange ? (
            <Feather name="check-circle" color="blue" size={20} />
          ) : null}
        </View>

        {/* Password */}

        <Text style={{ ...styles.textFooter, marginTop: 10 }}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          {/* for eye icon */}
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="blue" size={20} />
            ) : (
              <Feather name="eye" color="blue" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {/* SignIn button */}

        <TouchableOpacity>
          <LinearGradient
            colors={[colors.primaryColor, "#0016d2"]}
            style={styles.signIn}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: colors.secondaryColor,
                },
              ]}
            >
              Sign In
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* SignUp button */}

        <TouchableOpacity
          style={[
            styles.signIn,
            {
              borderColor: colors.primaryColor,
              borderWidth: 2,
              marginTop: 15,
            },
          ]}
          onPress={() => props.navigation.navigate("SignUpScreen")}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: colors.primaryColor,
              },
            ]}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

//for style
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: colors.secondaryColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textHeader: {
    color: colors.secondaryColor,
    fontWeight: "bold",
    fontSize: 30,
  },
  textFooter: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 0,
    paddingLeft: 20,
    color: "#05375a",
    fontSize: 15,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 15,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
