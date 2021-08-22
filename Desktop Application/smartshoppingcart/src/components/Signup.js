import React, { Component } from 'react'
import axios from 'axios'       //connect front end to backend mongodb



export default class Signup extends Component {
    constructor(){
        super()
        //setup the SIGNUP form empty
        this.state = {
            firstname:"",
            lastname:"",
            email:"",
            address:"",
            phonenumber:"",
            password:""
    } 

    //binding following methods to constructor
    this.changefirstname = this.changefirstname.bind(this)
    this.changelastname = this.changelastname.bind(this)
    this.changeemail = this.changeemail.bind(this)
    this.changeaddress = this.changeaddress.bind(this)
    this.changephonenumber = this.changephonenumber.bind(this)
    this.changepassword = this.changepassword.bind(this)
    

    //binding to onSubmit
    this.onSubmit = this.onSubmit.bind(this)
        
}   
changefirstname(event){
    this.setState(
        {
            firstname:event.target.value
        }
    )
}

changelastname(event){
    this.setState(
        {
            lastname:event.target.value
        }
    )
}

changeemail(event){
    this.setState(
        {
            email:event.target.value
        }
    )
}

changeaddress(event){
    this.setState(
        {
            address:event.target.value
        }
    )
}

changephonenumber(event){
    this.setState(
        {
            phonenumber:event.target.value
        }
    )
}

changepassword(event){
    this.setState(
        {
            password:event.target.value
        }
    )
}

//method for submit
onSubmit(event){
    event.preventDefault()    // when refreshing informations do not get deleted

    //when submit button pressed, all details are saved in "registered"
    const registered = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        address: this.state.address,
        phonenumber: this.state.phonenumber,
        password: this.state.password

    }

    //send "registered" to backend server
    axios.post("http://localhost:4000/app/signup",registered)
        .then(response => console.log(response.data))

    /*
        TO RETURN ANY PAGE IN FRONTEND AFTER SIGNUP WE CAN USE
                window.location = '/anypage'
     */

    //returns just same signup page
    this.setState(
        {
        firstname:"",
        lastname:"",
        email:"",
        address:"",
        phonenumber:"",
        password:""
        }
    )


}


    render() {
        return (
            <section id="main-content">
                <form className="login-form" onSubmit={this.onSubmit}>
                    <div className="login-wrap">
                        <p className="login-img"><i className="icon_lock_alt" /></p>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="icon_profile" /></span>
                            <input type="text" className="form-control" placeholder="First Name" onChange={this.changefirstname} value={this.state.firstname}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="icon_profile" /></span>
                            <input type="text" className="form-control" placeholder="Last Name" onChange={this.changelastname} value={this.state.lastname}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="" /></span>
                            <input type="email" className="form-control" placeholder="Email" onChange={this.changeemail} value={this.state.email}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="" /></span>
                            <input type="text" className="form-control" placeholder="Address" onChange={this.changeaddress} value={this.state.address}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="" /></span>
                            <input type="number" className="form-control" placeholder="Phone Number" onChange={this.changephonenumber} value={this.state.phonenumber}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="icon_key_alt" /></span>
                            <input type="password" className="form-control" placeholder="Password" onChange={this.changepassword} value={this.state.password}/>
                        </div>
                        {/* <div className="input-group">
                            <span className="input-group-addon"><i className="icon_key_alt" /></span>
                            <input type="password" className="form-control" placeholder="Re-Password" />
                        </div> */}
                        <label className="checkbox">
                        <input type="checkbox" defaultValue="remember-me"/> Agree
                        </label>
                        <button className="btn btn-info btn-lg btn-block" type="submit">Signup</button>
                        {/* <button className="btn btn-primary btn-lg btn-block" type="submit"><a href="/login">I have a Account</a></button> */}
                        
                    </div>
                </form>
            </section>
        )
    }
}
