import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
//packages for redux
import { createStore, combineReducers, applyMiddleware } from "redux";

import { Provider } from "react-redux";

//importing for fonts -->for package install
//(npm install expo-font)
import * as Font from "expo-font";
//(expo install expo-app-loading)
import AppLoading from "expo-app-loading";

//importing navigation modules
import CartNavigator from "./navigation/CartNavigator";

//importing module for to-buy list reducer
import listReducer from "./store/reducers/ListReducer";
import productReducer from "./store/reducers/productReducer";

//combining all reducers in one root reducer
const rootReducer = combineReducers({
  toBuyListReducer: listReducer, //key to display selected items for to-buy list
});

//creating store
const store = createStore(rootReducer);

//func for fetch fonts (hav to .ttf)
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "special-elite": require("./assets/fonts/SpecialElite-Regular.ttf"),
    "magma-font": require("./assets/fonts/Magma.ttf"),
  });
};

export default function App() {
  //state for checking fonts loaded or not
  const [fontLoaded, setFontLoaded] = useState(false);

  //condition for splash screen (AppLoading)
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)} //when ever AppLoading doesn't work properly
      />
    );
  }

  return (
    <Provider store={store}>
      <CartNavigator />
    </Provider>
  );
}

export { rootReducer };
