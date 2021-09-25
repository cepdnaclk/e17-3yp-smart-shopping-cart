/* eslint-disable prettier/prettier */
// 'use strict';

import React, { Component, useState } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    Alert,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { View } from 'react-native-animatable';

export default function index() {
    const [scannedValue, setScannedValue] = useState('Scan OR Code');
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Text style={styles.head}>{scannedValue}</Text>
            <View style={[styles.qrcamera]}>
                <QRCodeScanner
                    onRead={(e) => {Alert.alert(e.data); setScannedValue(e.data);}}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    reactivate={true}
                    reactivateTimeout={5000}
                    showMarker={true}
                    // cameraTimeout={10000}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    head:{
        fontWeight:'bold',
        fontSize:50,
        justifyContent:'center',
        textAlign:'center',
        // height:100,
    },
    // main:{
    //     flex:1,
    //     backgroundColor:'#fff',
    //     // height:'100%',
    // },
    qrcamera:{
        borderColor:'#afe',
        marginTop:50,
        // marginRight:40,
        // width:100,
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});
