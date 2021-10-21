import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import { AsyncStorage } from 'react-native';



class LogOutScreen extends Component{
    constructor(props){
        super(props);
    
      }

    render(){
        return(
            <View style={styles.container}>

            <View style={styles.header}>
                
               
            </View>
                    <View style={styles.footer}>
                        <Button title='Logout' onPress ={this.logout}/>
                    </View>
            </View>

        );
    }

    logout= (props) => {
        console.log('here');
        AsyncStorage.removeItem('user');
        //AsyncStorage.removeItem('isLoggedIn');
        this.props.navigation.navigate('SplashScreen');
    }

}//class end

export default LogOutScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#008080',//#1b1b33',//#009387',
        flex :1
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom: 50
    },
    footer:{
        flex:3,
        backgroundColor:"#fff",
        
       
    },
});