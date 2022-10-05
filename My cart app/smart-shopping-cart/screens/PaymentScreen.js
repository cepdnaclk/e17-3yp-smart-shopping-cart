import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StripeApp from "../components/StripApp";
import { StripeProvider } from "@stripe/stripe-react-native";

import { color } from "../assets/color";
import { LinearGradient } from "expo-linear-gradient";

export default function PaymentScreen() {
  return (
    <StripeProvider publishableKey="pk_test_51JehUWSCPqL7xbscRVNAqTUUt7VuPMnf0j4Y5XdQRqHbjSULO66d5o5qCZpjd9ye2v6azZPn1FIB3jZU3SEtL9rB009BwIxNyQ">
      <StripeApp />
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
