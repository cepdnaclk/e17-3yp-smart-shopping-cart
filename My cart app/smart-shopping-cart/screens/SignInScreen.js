import React, { Component } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
  AsyncStorage,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';

import { colors } from "../assets/colors";
import Authservice from "../services/auth-service";

const primary = "#1b1b33";

class SignInScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
      message: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <View style={styles.footer}>
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              width: Dimensions.get("window").width,
            }}
          >
            <Text
              style={[
                styles.text_footer,
                { marginTop: 35, paddingHorizontal: 20 },
              ]}
            >
              Email
            </Text>

            <View style={[styles.action_up, { paddingHorizontal: 20 }]}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Email"
                style={[styles.textInput, { paddingHorizontal: 10 }]}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              ></TextInput>
            </View>

            <Text
              style={[
                styles.text_footer,
                { marginTop: 35, paddingHorizontal: 20 },
              ]}
            >
              Password
            </Text>
            <View style={[styles.action, { paddingHorizontal: 20 }]}>
              <Feather name="lock" color="#05375a" size={20} />

              <TextInput
                placeholder="Your Password"
                secureTextEntry={true}
                style={[styles.textInput, { paddingHorizontal: 10 }]}
                autoCapitalize="none"
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              ></TextInput>
            </View>
            <View style={[{ marginTop: 50, paddingHorizontal: 20 }]}>
              <Button
                style={{ width: 300 }}
                color={colors.primaryColor}
                title="Sign In"
                onPress={this._login}
              />
            </View>

            <View style={[{ marginTop: 50, paddingHorizontal: 20 }]}>
              <Button
                style={{ width: 300 }}
                color={colors.primaryColor}
                title="Sign Up"
                onPress={this._login}
                onPress={() => this.props.navigation.navigate("SignUpScreen")}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  _login = async (props) => {
    //EMPTY FIELDS
    if (this.state.email.length == 0 || this.state.password.length == 0)
      Alert.alert("Wrong Input!", "Email or Password feild cannot be empty", [
        { text: "Okay" },
      ]);
    else {
      //LOGIN CALL
      await Authservice.login(this.state.email, this.state.password)
        .then((res) => {
          console.log(res);

          if (res.message)
            //INVALID LOGIN
            Alert.alert("Invalid User!", "Email or Password is incorrect.", [
              { text: "Okay" },
            ]);
          else if (res.email)
            Alert.alert("Please confirm your email to login.", "", [
              { text: "Okay" },
            ]);
          else {
            //LOGGED IN

            //alert('Logged In');
            //props.navigation.navigate('mainScreen');

            this.props.navigation.navigate("HomeScreen");
            AsyncStorage.setItem("isLoggedIn", "1");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } //else
  };
} //class end

export default SignInScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor, //'#008080',//#1b1b33',//#009387',
    flex: 1,
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
  },
  text_header: {
    color: colors.secondaryColor,
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  TextInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 90,
    width: "100%",
  },
  signin: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 0,
    paddingLeft: 20,
    color: "#05375a",
    fontSize: 18,
  },
  action_up: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryColor,
    paddingBottom: 5,
  },
  TextInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 90,
    width: "100%",
  },
  signin: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
