import React, {useEffect, useState} from 'react'
import authServices from '../services/auth-services';
import Header from './Header';
import Navigation from './Navigation';

export default function Signup() {

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
    //     let {name, email, address, phoneno, nic, password} = user;
    //    authServices.signup(name, email, address, phoneno, nic, password)
    //     .then(res => {console.log(res)
            
    //     })
            
    //     .catch(error=>{console.log(error)});
    };

    useEffect(()=>{
        let errorx = {}
        if(Object.keys(error).length === 0 && submit){
            console.log(user);
                 let {name, email, address, phoneno, nic, password} = user;
       authServices.signup(name, email, address, phoneno, nic, password)
        .then(res => {console.log(res);
            if(res.data.email) {     //error

                errorx.success ='User created Succssfully!, Please confirm your email to login';
            }
            else{
                errorx.all = res.data;
                
                //alert(res.headers);
              }
        setErrors(errorx);
        })
            
        .catch(error=>{console.log(error)});
        }
    }, [error]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.name && !values.email && !values.address && !values.nic && !values.phoneno && !values.password)
        errors.all = 'Fields cannot be empty!';
        else{
        if(!values.name )
                    errors.all = 'Name is required';
        
        
        else if(values.name.length < 6)
                    errors.name = 'Name must be 6 characters long.'

        if(!values.email )
                    errors.email = 'Email is required.';
        
        else if(!regex.test(values.email))
            errors.email = 'This is not a valid email format!';  


        if(!values.address )
            errors.address = 'Address is required.';

        if(!values.nic )
            errors.nic = 'NIC is required.';
 
        if(!values.phoneno )
            errors.phoneno = 'Phone No is required.';

        if(!values.password )
            errors.password = 'Password is required.';

        else if(values.password.length < 6 )
            errors.password = 'Password must be 6 characters long.';
        }
       
        
        
        return errors;
    }

    return (
        <>
        <Header/>
        <Navigation/>
        <section id="main-content">
            <form className="login-form" action="/" onChange={handleChange} onSubmit={handleSubmit}>
                
                <div className="login-wrap">
                    <p className="login-img"><i className="icon_lock_alt" /></p>
                    <div class='form-group has-error'>
                        <p className="control-label ">{error.all}</p>
                    </div>
                    <div class='form-group has-success'>
                        <p className="control-label ">{error.success}</p>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="icon_profile" /></span>
                        <input name='name' type="text" className="form-control" placeholder="Name" autofocus />
                    </div>
                    <div class='form-group has-error'>
                    
                        <p className="control-label ">{error.name}</p>
                    </div>
                    <div className="input-group"> 
                        <span className="input-group-addon"><i className="icon_profile" /></span>
                        <input name='email' type="email" className="form-control" placeholder="Email" autofocus /> 
                    </div>
                    <div class='form-group has-error'>
                        <p className="control-label ">{error.email}</p>
                    </div>
                   
                    <div className="input-group">
                        <span className="input-group-addon"><i className="icon_profile" /></span>
                        <input name='address' type="text" className="form-control" placeholder="Address" autofocus />
                    </div >
                    <div class='form-group has-error'>
                        <p className="control-label ">{error.address}</p>
                    </div>

                    <div className="input-group">
                        <span className="input-group-addon"><i className="icon_profile" /></span>
                        <input name='phoneno' type="text" className="form-control" placeholder="Phone No" autofocus />
                    </div>
                    <div class='form-group has-error'>
                        <p className="control-label ">{error.phoneno}</p>
                    </div>

                    <div className="input-group">
                        <span className="input-group-addon"><i className="icon_profile" /></span>
                        <input name='nic' type="text" className="form-control" placeholder="NIC" autofocus />
                    </div>
                    <div class='form-group has-error'>
                        <p className="control-label ">{error.nic}</p>
                    </div>
                    
                    <div className="input-group">
                        <span className="input-group-addon"><i className="icon_key_alt" /></span>
                        <input name='password' type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div class='form-group has-error'>
                    
                        <p className="control-label ">{error.password}</p>
                    </div>
                   
                    {/* <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button> */}
                    <button className="btn btn-info btn-lg btn-block" type="submit">Signup</button>
                </div>
            </form>
        </section>
        </>
    )
}
