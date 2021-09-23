/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NativeScreenNavigationContainer} from 'react-native-screens';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/ProductsList/index';
import ProductScreen from './src/screens/ProductScreen';
import Signin from './src/screens/Signin';
import SignUp from './src/screens/SignUp';
import Qrscanner from './src/screens/Qrscanner';
import Home from './src/screens/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   {/* <Signin /> */}
    //   {/* <SignUp /> */}
    //   {/* <Qrscanner />\ */}
    //   <Home />
    // </SafeAreaView>
    <Home />
  );
};

export default App;
