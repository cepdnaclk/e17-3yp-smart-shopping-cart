/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../ProductScreen/styles';

export default function index() {
    const [username, onChangeText] = useState('');
    const [password, onChangePassword] = useState(null);
    const [show,hide] = useState(true);
    return (
        <ScrollView>
            <SafeAreaView>
                <Image source={require('../../data/images/logo1.jpeg')} style={singupStyle.logo}/>
                <TextInput placeholder="User Name" style={singupStyle.input} onChangeText={onChangeText} value={username}/>
                <TextInput placeholder="Password" style={singupStyle.input} onChangeText={onChangePassword} value={password} autoCompleteType="password" secureTextEntry={show} />
                <TouchableHighlight style={singupStyle.button}>
                    <Button title="Log In" />
                </TouchableHighlight>
                <TouchableHighlight style={singupStyle.button}>
                    <Button title="Sign Up" />
                </TouchableHighlight>

            </SafeAreaView>
        </ScrollView>
    );
}

const singupStyle = StyleSheet.create({
    main:{
        // textAlignVertical:'center',
        height:'100%',
        backgroundColor:'#fff',
        // justifyContent:'center',
        // flex:1,
        // alignContent:'center',
        // alignItems:'center',
        width:'100%',
    },
    logo:{
        // flex: 1,
        width: '100%',
        // height: '100%',
        resizeMode: 'contain',
    },
    input:{
        marginHorizontal: 55,
        marginBottom:20,

    },
    button: {
        marginLeft:'25%',
        height: 40,
        width: '50%',
        borderRadius: 10,
        backgroundColor: 'yellow',
        marginTop: 20,
        justifyContent:'center',
    },
});
