/* eslint-disable prettier/prettier */
const axios = require('axios');
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableHighlight, ScrollView, SafeAreaView, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../ProductScreen/styles';
const validator = require('validator');


export default function index() {
    // axios.defaults.baseURL = 'http://localhost:3000/';

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [repass, setRepass] = useState(null);
    const [show, hide] = useState(true);

    const [RetypePassword, setRetypePassword] = useState('1p@Padfag');
    const [signupValues, setSignupValues] = useState({
        firstName:'hello',
        lastName:'hello',
        email:'test2@gmail.com',
        password:'1p@Padfag',
    });

    function onPress(){
        axios.post('/havemail', {
            'email': signupValues.email,
        })
            .then((res) => {
                // console.log(res.data);
                if (res.data.status == true){
                    Alert.alert('This mail Already registed');
                    return;
                }
            })
            .catch((err) => {
                console.log(err);
            });
        if (!validator.isEmail(signupValues.email)){
            Alert.alert('Enter Valid Mail address');
            return;
        }
        if (RetypePassword != signupValues.password) {
            Alert.alert('Password not Matched');
            return;
        }
        if (!validator.isStrongPassword(signupValues.password)){
            Alert.alert('Enter strong password');
            return;
        }
        if (!validator.isAlpha(signupValues.firstName)) {
            Alert.alert('Enter Valid First Name');
            return;
        }
        if (!validator.isAlpha(signupValues.lastName)) {
            Alert.alert('Enter valid last name');
            return;
        }


        axios.defaults.baseURL = 'http://192.168.8.126:3000/';

        axios.post('/signup', signupValues)
            .then(()=>{
                Alert.alert('Welcome ' + signupValues.firstName + '! signup successful! ');
            })
            .catch(()=>{
                Alert.alert('signup failed! ');
            });
    }

    return (
        <ScrollView>
            <SafeAreaView style={singupStyle.main}>
                <Image source={require('../../data/images/logo1.jpeg')} style={singupStyle.logo} />
                <TextInput placeholder="First Name" style={singupStyle.input} onChangeText={(e) => setSignupValues({ ...signupValues, firstName: e })} value={signupValues.firstName}/>
                <TextInput placeholder="Last Name" style={singupStyle.input} onChangeText={(e) => setSignupValues({ ...signupValues, lastName: e })} value={signupValues.lastName} />
                <TextInput placeholder="Email" style={singupStyle.input} onChangeText={(e) => setSignupValues({ ...signupValues, email: e })} value={signupValues.email} />
                <TextInput placeholder="Password" style={singupStyle.input} onChangeText={(e) => setSignupValues({ ...signupValues, password: e })} secureTextEntry={show} value={signupValues.password}/>
                <TextInput placeholder="Re Password" style={singupStyle.input} onChangeText={(e) => setRetypePassword(e)} secureTextEntry={show} value={RetypePassword} />
                <TouchableHighlight style={singupStyle.button}>
                    <Button title="Sign Up" onPress={onPress}/>
                </TouchableHighlight>
                <TouchableHighlight style={singupStyle.button}>
                    <Button title="Already have Account" onPress={()=>{console.log('hello');}}/>
                </TouchableHighlight>
            </SafeAreaView>
        </ScrollView>
    );
}

const singupStyle = StyleSheet.create({
    main: {
        // textAlignVertical:'center',
        height: '100%',
        backgroundColor: '#fff',
        // justifyContent:'center',
        // flex:1,
        // alignContent:'center',
        // alignItems:'center',
        width: '100%',
    },
    logo: {
        // flex: 1,
        width: '100%',
        // height: '100%',
        resizeMode: 'contain',
    },
    input: {
        marginHorizontal: 55,
        marginBottom: 20,
        height:40,

    },
    button: {
        marginLeft: '25%',
        height: 40,
        width: '50%',
        borderRadius: 10,
        backgroundColor: 'yellow',
        marginTop: 20,
        justifyContent: 'center',
    },
});
