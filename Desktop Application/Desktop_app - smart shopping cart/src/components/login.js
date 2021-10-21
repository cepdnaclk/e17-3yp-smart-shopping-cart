import React, {useState, useEffect, useContext} from 'react';
import authService from '../services/auth-services';
import {Redirect, useHistory} from 'react-router-dom';
import Navigation from './Navigation';
import Header from './Header';


import {userContext} from '../App';

export default function Login() {

    const {state, dispatch} = useContext(userContext);


let history = useHistory();
    const [ user, setUser] = useState({});
    const [error, setErrors] = useState({});
    const [submit, setSubmit] = useState(false);

    const handleChange = e => { 
        setUser({...user, [e.target.name]:e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(user));
        setSubmit(true);
        
    };

    useEffect(()=>{
        let errorx = {}
        if(Object.keys(error).length === 0 && submit){
            console.log(user);
            let email = user.email;
            let password = user.password;
            authService.login(email, password)
            .then(res => {console.log(res)
                //console.log(res);

            if(res.data.message)     //INVALID LOGIN
            errorx.all = 'Invalid User!, Email or Password is incorrect.'; 

            else if(res.data.email)
            errorx.all = 'Please confirm your email to login.'; 
            

            else{   //LOGGED IN
            localStorage.setItem('isLoggedIn', true);
            
            errorx.all = 'Success';
            console.log(state, 'loggin');
            dispatch({type:'USER', payload:true});
            console.log(state, 'loggin');
           // <Redirect to='/'/>;
           history.push('/home');
           
            } 
    setErrors(errorx); 
            })
                
            .catch(err=>{console.log(err)});
        }
    }, [error]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if( !values.email ||  !values.password  ){
                    errors.all = 'Wrong Input! Fields cannot be empty.';
        }
    
       
        else if(!regex.test(values.email))
            errors.email = 'This is not a valid email format!';  

    
        
        return errors;
    }

    // const hasAccess = async (accesstoken, refreshtoken) => {

    //     if(!refreshtoken) return null;

    //     if(accesstoken === undefined){
    //         accesstoken = await refresh(refreshtoken);
    //         return accesstoken;
    //     }
    //     return accesstoken;
    // };


    const requestLogin = async (accesstoken, refreshtoken)=> {
        return new Promise((resolve, reject)=>{


        });
    };

    // const refresh  = refreshtoken =>{
    //     console.log('refreshing token');
    //     return new Promise((resolve, reject)=>{
    //     axios.get('http://192.168.1.104:5000/user/renewAccessToken', {headers:{'refresh_token':refreshtoken}})
    //     .then(res => {console.log(res)

    //       if(res.data.success === false){
    //           //set msg and return 
    //           resolve(false);
    //       }
    //       else{
    //           const accesstoken = res.data.access_token;
    //           Cookies.set('access_token', accesstoken);
    //           resolve(accesstoken);
    //       }
    //     })
            
    //     .catch(error=>{console.log(error)});
    // });
    // };

    // const protect = async e => { 
    //     let accesstoken = Cookies.get('access_token');
    //     let refreshtoken = Cookies.get('refresh_token');

    //     let access = await hasAccess(accesstoken, refreshtoken);

    //     if(!access){
    //         //set msg login again

    //     }
    //     else{
    //         await requestLogin (accesstoken, refreshtoken);
    //     }

    //     }; 


    return (
        <>
        <Navigation/>
        <Header/>
        <section id="main-content">
            <form className="login-form" action='' onChange={handleChange} onSubmit={handleSubmit}> 
                <div className="login-wrap">
                    <p className="login-img"><i className="icon_lock_alt" /></p>
                    <div class='form-group has-error'>
                   
                        <p className="control-label ">{error.all}</p>
                    </div>
                    <div className="input-group">
                    <span className="input-group-addon"><i className="icon_profile" /></span>
                    <input name='email' type="text" className="form-control" placeholder="email" autofocus />
                    </div>
                    <div  className="input-group">
                    <span className="input-group-addon"><i className="icon_key_alt" /></span>
                    <input name='password' type="password" className="form-control" placeholder="Password" />
                    </div>
                    <label className="checkbox"> 
                    <input type="checkbox" defaultValue="remember-me" /> Remember me
                    <span className="pull-right"> <a href="#"> Forgot Password?</a></span>
                    </label>
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                    {/* <button className="btn btn-info btn-lg btn-block" type="submit">Signup</button> */}
                </div>
            </form>
        </section>
        </>
    )
}
