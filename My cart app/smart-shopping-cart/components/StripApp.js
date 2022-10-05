import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";

import { color } from "../assets/color";
import { LinearGradient } from "expo-linear-gradient";

import { backendurl } from "../backendurl";

//ADD localhost address of your server
const API_URL = backendurl;

const StripeApp = (props) => {
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const handlePayPress = async () => {
    //1.Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter Complete card details and Email");
      return;
    }
    const billingDetails = {
      email: email,
    };
    //2.Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      //2. confirm the payment
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          alert("Payment Successful");
          console.log("Payment successful ", paymentIntent);
        }
      }
    } catch (e) {
      console.log(e);
    }
    //3.Confirm the payment with the card details
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={color.primaryColor}
        style={{ flex: 1, justifyContent: "center", padding: 25 }}
      >
        <TextInput
          autoCapitalize="none"
          placeholder="E-mail"
          keyboardType="email-address"
          onChange={(value) => setEmail(value.nativeEvent.text)}
          style={styles.input}
        />
        <CardField
          postalCodeEnabled={true}
          placeholder={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={styles.card}
          style={styles.cardContainer}
          onCardChange={(cardDetails) => {
            setCardDetails(cardDetails);
          }}
        />
        <TouchableOpacity onPress={handlePayPress}>
          <LinearGradient
            colors={color.secondaryColor}
            style={styles.newButton}
          >
            <Text style={styles.textSign}>PAY</Text>
          </LinearGradient>
        </TouchableOpacity>
        {/* <Button onPress={handlePayPress} title="Pay" disabled={loading} /> */}
      </LinearGradient>
    </View>
  );
};
export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    //backgroundColor: "#efefefef",
    borderBottomWidth: 0.25,
    color: "black",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#00000000",
    color: "red",
  },
  cardContainer: {
    borderBottomWidth: 0.25,
    color: "red",
    height: 50,
    marginVertical: 30,
  },
  textSign: {
    color: color.fontColor,
    fontWeight: "bold",
    fontSize: 18,
  },
  newButton: {
    height: 40,
    width: 320,
    marginTop: 10,
    borderRadius: 50,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
