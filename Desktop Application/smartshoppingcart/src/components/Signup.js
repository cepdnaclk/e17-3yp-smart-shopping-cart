import React from 'react'

export default function Signup() {
    return (
        <section id="main-content">
            <form className="login-form" method="post" action="/userRegistation">
                <div className="login-wrap">
                    <p className="login-img"><i className="icon_lock_alt" /></p>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="icon_profile" /></span>
                        <input type="text" className="form-control" placeholder="First Name" autofocus />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="icon_profile" /></span>
                        <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="" /></span>
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="" /></span>
                        <input type="text" className="form-control" placeholder="Address" />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="" /></span>
                        <input type="number" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="icon_key_alt" /></span>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="icon_key_alt" /></span>
                        <input type="password" className="form-control" placeholder="Re-Password" />
                    </div>
                    <label className="checkbox">
                    <input type="checkbox" defaultValue="remember-me" /> Agree
                    </label>
                    <button className="btn btn-info btn-lg btn-block" type="submit">Signup</button>
                    {/* <button className="btn btn-primary btn-lg btn-block" type="submit"><a href="/login">I have a Account</a></button> */}
                    
                </div>
            </form>
        </section>
    )
}
