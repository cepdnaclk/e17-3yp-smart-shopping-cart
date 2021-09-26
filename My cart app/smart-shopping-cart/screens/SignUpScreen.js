import React,{Component} from 'react';
import { Alert, Animated, Dimensions, StyleSheet, View, Text, Image, TouchableOpacity, Button, TextInput, Platform, TouchableWithoutFeedback, ScrollView, useState} from 'react-native';
import authService from '../services/auth-service';
//var validator = require('react-native-validator-form');

const primary = '#1b1b33'

class SignUpScreen extends Component{

    constructor(props){
        super();
        this.state= {
            successful: false,
            name:'',
            email : '',
            password : '',
            loading : false,
            message : '',
            isValidEmail: true,
            isValidPassword: true,
            isValidName : true
        }
        
    }
   
    

    textInputNameChange =(val)=>{
        if(val.trim().length>5){
            this.setState({name :val})
            //this.setState({isValidName : true})   //if 
            
        }
        else{
            this.setState({name :val})
            //this.setState({isValidName : false})    //if
            
        }
        
    }

    textInputPasswordChange =(val)=>{
        if(val.trim().length>5){
            this.setState({password :val})
            //this.setState({isValidPassword : true}) //if
        }
        else{
            this.setState({password :val})
            //this.setState({isValidPassword : false})    //if
        }
    }

    textInputEmailChange =(val)=>{
       // if(validator.isEmail(val)){
            this.setState({email :val}),
            this.setState({isValidEmail : true})
      /*  }
        else{
            this.setState({email :val}),
            this.setState({isValidEmail : false})
        }*/
    }
    handleValidUser = (val) =>{
        if(val.trim().length>5)
         this.setState({isValidName : true})
        else
         this.setState({isValidName : false})

    }

    handleValidPassword = (val) =>{
        if(val.trim().length>5)
         this.setState({isValidPassword : true})
        else
         this.setState({isValidPassword : false})

    }

    render(){
    

    return (

      <View style={styles.container}>

<View style={styles.header}>
    <Text style={styles.text_header}>Welcome!</Text>
</View>
        <View style={styles.footer}>
             <View style= {{justifyContent:'center', alignContent:'center', width:Dimensions.get('window').width}}>
                    <Text style={[styles.text_footer , {marginTop:25, paddingHorizontal:20}]}>Name</Text>
                        <View style={[styles.action_up,{ paddingHorizontal:20}]}>
                        <TextInput placeholder='Your Name'
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText ={(val)=> this.textInputNameChange(val)} 
                                    onEndEditing={(e)=>{this.handleValidUser(e.nativeEvent.text)}}>

                        </TextInput>
                        </View>
                        {this.state.isValidName ? null :
                        <Text style={styles.errMsg}>Name must be 6 characters long.</Text>}

                        
                        <Text style={[styles.text_footer , {marginTop:35, paddingHorizontal:20}]}>Email</Text>
                        <View style={[styles.action_up,{ paddingHorizontal:20}]}>
                            <TextInput placeholder='Your Email'
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText ={(val)=> this.textInputEmailChange(val)}>

                            </TextInput>
                           
                        </View>
                        {this.state.isValidEmail ? null :
                        <Text style={styles.errMsg}>Not a valid Email address</Text>}

                        <Text style={[styles.text_footer, {marginTop:35, paddingHorizontal:20}]}>Password</Text>
                        <View style={[styles.action, {paddingHorizontal:20}]}>
                            <TextInput placeholder='Your Password'
                                secureTextEntry={true}
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText = {(val)=> this.textInputPasswordChange(val)}
                                onEndEditing={(e)=>this.handleValidPassword(e.nativeEvent.text)}>
                            </TextInput>
                    
                        </View>
                        {this.state.isValidPassword ? null :
                        <Text style={styles.errMsg}>Password must be 6 characters long.</Text>}
                     
                        <View style={[{marginTop:30, paddingHorizontal:20}]}>
                            <Button color={primary} title="Sign Up" onPress={this._signup}/>
                          
                        </View>
                        </View>
                        </View>
                        </View>
                    
    );
}//render


_signup = async(props) =>{
    if( this.state.email.length ==0 || this.state.password.length ==0 || this.state.name.length ==0)
        Alert.alert('Wrong Input!', 'Fields cannot be empty',[{text:'Okay'}]); 

    else{
    await authService.register(this.state.name, this.state.email, this.state.password).then(res=>{
    //console.log(res);
    
    if(res.data.user) {     //error
        alert('User successfully created');
    }
    else{
        alert(res.data);
        
        //alert(res.headers);
      }
    }).catch(error=>{console.log(error.message)});

      
    }//else
}
}//class

export default SignUpScreen;

const {height} = Dimensions.get("screen");
const height_logo = height*0.28;

const styles = StyleSheet.create({
    container:{
        backgroundColor:primary,//'#008080',//#1b1b33',//#009387',
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
    text_header:{
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer:{
        color:'#05375a',
        fontSize: 18
    },
    action:{
        flexDirection:'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    TextInput:{
        flex: 1,
        paddingLeft: 10,
        color: '#05375a'
    },
    button:{
        alignItems:'center',
        marginTop: 90,
        width:'100%'
    },
    signin:{
        width:'100%',
        height:50,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:10,
      
    },
    action_up:{
        flexDirection:'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    TextInput:{
        flex: 1,
        paddingLeft: 10,
        color: '#05375a'
    },
    button:{
        alignItems:'center',
        marginTop: 90,
        width:'100%'
    },
    signin:{
        width:'100%',
        height:50,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:10,
      
    },
    errMsg:{
        paddingHorizontal:20,
        color :'#FF0000',
        fontSize:14
    }
})