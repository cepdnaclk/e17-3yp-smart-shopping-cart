import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Modal, StatusBar,TouchableWithoutFeedback, Keyboard, Button, TouchableOpacity, Text} from 'react-native';


export default passwordModal = ({visible, onclose, onSubmit}) => {

        const [oldPassword , setOldPassword] = useState('');
        const [newPassword , setNewPassword] = useState('');


        const handleModalClose = () =>{
            Keyboard.dismiss();
        }

        const handleOnChangeText = (text, valueFor) => {
            if(valueFor == 'oldPassword')
                setOldPassword(text);
            if(valueFor == 'newPassword')
                setNewPassword(text);
        }

        const handleSubmit =()=>{
            if (!oldPassword.trim() && !newPassword.trim())
                return onclose()

            onSubmit(oldPassword, newPassword);
            setOldPassword('');
            setNewPassword('');
            onclose();
        }

        const closeModal = () =>

        console.log(oldPassword, newPassword);

        return(  
            <>
            <StatusBar hitten/>
            <Modal
                visible = {visible}
                animationType ='fade'>
                    <View style = {styles.container}>
                        <TextInput value= {oldPassword} placeholder='Current Password' style={[styles.input, styles.title]} 
                        onChangeText={(text) => handleOnChangeText(text, 'oldPassword')}/>
                        <TextInput value= {newPassword} placeholder='New Password' style={[styles.input, styles.title]} 
                        onChangeText={(text) => handleOnChangeText(text, 'newPassword')}/>
                        
                    </View> 
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                        <Text>Change</Text> 
                    </TouchableOpacity>

                    { oldPassword.trim() || newPassword.trim() ?
                    <TouchableOpacity style={styles.buttonContainer} onPress={onclose}>
                        <Text>Close</Text> 
                    </TouchableOpacity> : null }
                    <TouchableWithoutFeedback onPress={handleModalClose}>
                        <View style={[styles.modalBG, StyleSheet.absoluteFillObject]}/>
                    </TouchableWithoutFeedback>
            </Modal>
            </>
        );
    
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth : 2,
        borderBottomColor : 'grey',
        fontSize : 20,
        color : 'black'
    },
    container : {
        paddingHorizontal : 20,
        paddingTop : 15
        
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
});