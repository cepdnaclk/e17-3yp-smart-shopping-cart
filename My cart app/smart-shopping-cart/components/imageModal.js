import React, {useState} from 'react';
import { StyleSheet, Image, TextInput, View, Modal, StatusBar,TouchableWithoutFeedback, Keyboard, Button, TouchableOpacity, Text, ImagePickerIOS} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

export default passwordModal = ({visible, onclose, onSubmit}) => {

        const [image , setImage] = useState('');

    
        const handleModalClose = () =>{
            Keyboard.dismiss();
        }

        const handleOnChangeText = (text, valueFor) => {
            if(valueFor == 'oldPassword')
                setOldPassword(text);
            if(valueFor == 'newPassword')
                setNewPassword(text);
        }

        const handleImageSubmit =()=>{
            

            onSubmit(image);
            setImage('');
         
            onclose();
        }

        const openImageLibrary = async() => {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if(status !== 'granted'){
                alert('Sorry, we need camera roll permissions to make this work!');
            }

            if(status === 'granted'){
                const response = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes : ImagePicker.MediaTypeOptions.Images,
                    allowsEditing : true,
                }); 
                
                if(!response.cancelled){
                    setImage(response.uri)
                }
            }

          
        }

        const uploadImage = () =>{

        }

      
        return(  
            <>
            <StatusBar hitten/>
            <Modal
                visible = {visible}
                animationType ='fade'>
                    <View style={styles.container}>
                        <View>
                            <TouchableOpacity onPress={openImageLibrary} style = {styles.uploadBtnContainer}>
                               {image? <Image source={{uri:image}} style={{width:'100%', height:'100%'}}/> : <Text style={styles.uploadBtn}>Upload Profile Image</Text>}
                            </TouchableOpacity>
                            <Text style={styles.skip} onPress={onclose}>Skip</Text>
                            {image?(
                            <Text style={[styles.skip, {backgroundColor:'green', color:'white', borderRadius:8}]}
                             onPress={handleImageSubmit}>upload</Text>
                            ):null}
                        </View>
                    </View>
                      
                    
                    <TouchableOpacity style={styles.buttonContainer} onPress={onclose}>
                        <Text>Close</Text> 
                    </TouchableOpacity>

                    
                    <TouchableWithoutFeedback onPress={handleModalClose}>
                        <View style={[styles.modalBG, StyleSheet.absoluteFillObject]}/>
                    </TouchableWithoutFeedback>
            </Modal>
            </>
        );
    
}

const styles = StyleSheet.create({
    container : {
       flex : 1,
       justifyContent : 'center',
       alignItems : 'center'
        
    },
    title : {
        height : 40,
        marginBottom : 15,
        fontWeight : 'bold'
    },
    modalBG : {
        flex : 1,
        zIndex : -1,
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
        alignSelf: 'center',
    },
    uploadBtnContainer : {
        height : 125,
        width : 125,
        borderRadius : 125/2,
        justifyContent : 'center',
        alignItems : 'center',
        borderStyle : 'dashed',
        borderWidth : 1,
        overflow : 'hidden'
    },
    uploadBtn : {
        textAlign:'center', 
        fontSize:16, 
        opacity: 0.3, 
        fontWeight: 'bold'
    },
    skip : {
        textAlign : 'center',
        padding : 10,
        fontSize : 16,
        fontWeight : 'bold',
        textTransform : 'uppercase',
        letterSpacing : 2,
        opacity : 0.5
    }
});