import React from 'react'

export default function From_validation() {
    return (
        <section id="main-content">
    <section className="wrapper">
        <div className="row">
        <div className="col-lg-12">
            <h3 className="page-header"><i className="fa fa-files-o" /> Form Validation</h3>
            <ol className="breadcrumb">
            <li><i className="fa fa-home" /><a href="index.html">Home</a></li>
            <li><i className="icon_document_alt" />Forms</li>
            <li><i className="fa fa-files-o" />Form Validation</li>
            </ol>
        </div>
        </div>
        {/* Form validations */}
        <div className="row">
        <div className="col-lg-12">
            <section className="panel">
            <header className="panel-heading">
                Form validations
            </header>
            <div className="panel-body">
                <div className="form">
                <form className="form-validate form-horizontal" id="feedback_form" method="get" action>
                    <div className="form-group ">
                    <label htmlFor="cname" className="control-label col-lg-2">Full Name <span className="required">*</span></label>
                    <div className="col-lg-10">
                        <input className="form-control" id="cname" name="fullname" minLength={5} type="text" required />
                    </div>
                    </div>
                    <div className="form-group ">
                    <label htmlFor="cemail" className="control-label col-lg-2">E-Mail <span className="required">*</span></label>
                    <div className="col-lg-10">
                        <input className="form-control " id="cemail" type="email" name="email" required />
                    </div>
                    </div>
                    <div className="form-group ">
                    <label htmlFor="curl" className="control-label col-lg-2">Website</label>
                    <div className="col-lg-10">
                        <input className="form-control " id="curl" type="url" name="url" />
                    </div>
                    </div>
                    <div className="form-group ">
                    <label htmlFor="cname" className="control-label col-lg-2">Subject <span className="required">*</span></label>
                    <div className="col-lg-10">
                        <input className="form-control" id="subject" name="subject" minLength={5} type="text" required />
                    </div>
                    </div>
                    <div className="form-group ">
                    <label htmlFor="ccomment" className="control-label col-lg-2">Feedback</label>
                    <div className="col-lg-10">
                        <textarea className="form-control " id="ccomment" name="comment" required defaultValue={""} />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                        <button className="btn btn-primary" type="submit">Save</button>
                        <button className="btn btn-default" type="button">Cancel</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </section>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-12">
            <section className="panel">
            <header className="panel-heading">
                Advanced Form validations
            </header>
            <div className="panel-body">
                <div className="form">
                <form className="form-validate form-horizontal " id="register_form" method="get" action>
                    <div className="form-group ">
                    <label htmlFor="fullname" className="control-label col-lg-2">Full name <span className="required">*</span></label>
                    <div className="col-lg-10">
                        <input className=" form-control" id="fullname" name="fullname" type="text" />
                    </div>
                    </div>
                    <div className="form-group ">
                    <label htmlFor="address" className="control-label col-lg-2">Address <span className="required">*</span></label>
                    <div className="col-lg-10">
                        <input className=" form-control" id="address" name="address" type="text" />
                    </div>
                    </div>
                    <div className="form-group ">
                    <label htmlFor="username" className="control-label col-lg-2">Username <span className="required">*</span></label>
                    <div className="col-lg-10">
                        <input className="form-control " id="username" name="username" type="text" />
                    </div>
                    </div>
                    <div className="form-group ">
                    <label htmlFor="password" className="control-label col-lg-2">Password <span className="required">*</span></label>
                    <div className="col-lg-10">
                        <input className="form-control " id="password" name="password" type="password" />
                    </div>
                    </div>
                    <div className="form-group ">
                    <label htmlFor="confirm_password" className="control-label col-lg-2">Confirm Password <span className="required">*</span></label>
                    <div className="col-lg-10">
                        <input className="form-control " id="confirm_password" name="confirm_password" type="password" />
                    </div>
                    </div>
                    <div className="form-group ">
                    <label htmlFor="email" className="control-label col-lg-2">Email <span className="required">*</span></label>
                    <div className="col-lg-10">
                        <input className="form-control " id="email" name="email" type="email" />
                    </div>
                    </div>
                    <div className="form-group ">
                    <label htmlFor="agree" className="control-label col-lg-2 col-sm-3">Agree to Our Policy <span className="required">*</span></label>
                    <div className="col-lg-10 col-sm-9">
                        <input type="checkbox" style={{width: 20}} className="checkbox form-control" id="agree" name="agree" />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                        <button className="btn btn-primary" type="submit">Save</button>
                        <button className="btn btn-default" type="button">Cancel</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </section>
        </div>
        </div>
        {/* page end*/}
    </section>
    </section>
)
}
