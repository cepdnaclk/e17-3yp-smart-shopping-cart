import React from 'react'

export default function login() {
    return (
        <section id="main-content">
            <form className="login-form" action="/">
                <div className="login-wrap">
                    <p className="login-img"><i className="icon_lock_alt" /></p>
                    <div className="input-group">
                    <span className="input-group-addon"><i className="icon_profile" /></span>
                    <input type="text" className="form-control" placeholder="Username" autofocus />
                    </div>
                    <div className="input-group">
                    <span className="input-group-addon"><i className="icon_key_alt" /></span>
                    <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <label className="checkbox">
                    <input type="checkbox" defaultValue="remember-me" /> Remember me
                    <span className="pull-right"> <a href="/"> Forgot Password?</a></span>
                    </label>
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                    <button className="btn btn-info btn-lg btn-block" type="submit">Signup</button>
                </div>
            </form>
        </section>
    )
}
