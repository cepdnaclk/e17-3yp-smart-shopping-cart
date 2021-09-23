/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Signin from '../Signin';
import SignUp from '../SignUp';
import ProductsList from '../ProductsList';
import Qrscanner from '../Qrscanner';


function HomeScreen() {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    );
}


const Tab = createBottomTabNavigator();

export default function index() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home-outline'
                                : 'home-outline';
                        } else if (route.name === 'Sign in') {
                            iconName = focused ? 'log-in-outline' : 'log-in-outline';
                        } else if (route.name === 'Sign up') {
                            iconName = focused ? 'log-in' : 'log-in';
                        } else if (route.name === 'QR Scan') {
                            iconName = focused ? 'qr-code-outline' : 'qr-code-outline';
                        } else if (route.name === 'products') {
                            iconName = focused ? 'cart-outline' : 'cart-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name = {iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Sign in" component={Signin} />
                <Tab.Screen name="Sign up" component={SignUp} />
                <Tab.Screen name="products" component={ProductsList} />
                <Tab.Screen name="QR Scan" component={Qrscanner} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}
