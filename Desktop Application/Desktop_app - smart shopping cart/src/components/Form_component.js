import React from 'react'

export default function Form_component() {
    return (
    <section id="main-content">
    <section className="wrapper">
        <div className="row">
        <div className="col-lg-12">
            <h3 className="page-header"><i className="fa fa-file-text-o" /> Form elements</h3>
            <ol className="breadcrumb">
            <li><i className="fa fa-home" /><a href="index.html">Home</a></li>
            <li><i className="icon_document_alt" />Forms</li>
            <li><i className="fa fa-file-text-o" />Form elements</li>
            </ol>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-12">
            <section className="panel">
            <header className="panel-heading">
                Form Elements
            </header>
            <div className="panel-body">
                <form className="form-horizontal " method="get">
                <div className="form-group">
                    <label className="col-sm-2 control-label">Default</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Help text</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" />
                    <span className="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Rounder</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control round-input" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Input focus</label>
                    <div className="col-sm-10">
                    <input className="form-control" id="focusedInput" type="text" defaultValue="This is focused..." />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Disabled</label>
                    <div className="col-sm-10">
                    <input className="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Placeholder</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" placeholder="placeholder" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" placeholder />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Static control</label>
                    <div className="col-lg-10">
                    <p className="form-control-static">email@example.com</p>
                    </div>
                </div>
                </form>
            </div>
            </section>
            <section className="panel">
            <div className="panel-body">
                <form className="form-horizontal " method="get">
                <div className="form-group has-success">
                    <label className="control-label col-lg-2" htmlFor="inputSuccess">Input with success</label>
                    <div className="col-lg-10">
                    <input type="text" className="form-control" id="inputSuccess" />
                    </div>
                </div>
                <div className="form-group has-warning">
                    <label className="control-label col-lg-2" htmlFor="inputWarning">Input with warning</label>
                    <div className="col-lg-10">
                    <input type="text" className="form-control" id="inputWarning" />
                    </div>
                </div>
                <div className="form-group has-error">
                    <label className="control-label col-lg-2" htmlFor="inputError">Input with error</label>
                    <div className="col-lg-10">
                    <input type="text" className="form-control" id="inputError" />
                    </div>
                </div>
                </form>
            </div>
            </section>
            <section className="panel">
            <div className="panel-body">
                <form className="form-horizontal " method="get">
                <div className="form-group">
                    <label className="control-label col-lg-2" htmlFor="inputSuccess">Control sizing</label>
                    <div className="col-lg-10">
                    <input className="form-control input-lg m-bot15" type="text" placeholder=".input-lg" />
                    <input className="form-control m-bot15" type="text" placeholder="Default input" />
                    <input className="form-control input-sm m-bot15" type="text" placeholder=".input-sm" />
                    <select className="form-control input-lg m-bot15">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                    <select className="form-control m-bot15">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                    <select className="form-control input-sm m-bot15">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                    </div>
                </div>
                </form>
            </div>
            </section>
            <section className="panel">
            <div className="panel-body">
                <form className="form-horizontal " method="get">
                <div className="form-group">
                    <label className="control-label col-lg-2" htmlFor="inputSuccess">Checkboxes and radios</label>
                    <div className="col-lg-10">
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" defaultValue />
                        Option one is this and that—be sure to include why it's great
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" defaultValue />
                        Option one is this and that—be sure to include why it's great option one
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />
                        Option one is this and that—be sure to include why it's great
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                        Option two can be something else and selecting it will deselect option one
                        </label>
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-lg-2" htmlFor="inputSuccess">Inline checkboxes</label>
                    <div className="col-lg-10">
                    <label className="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox1" defaultValue="option1" /> 1
                    </label>
                    <label className="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox2" defaultValue="option2" /> 2
                    </label>
                    <label className="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox3" defaultValue="option3" /> 3
                    </label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-lg-2" htmlFor="inputSuccess">Selects</label>
                    <div className="col-lg-10">
                    <select className="form-control m-bot15">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <select multiple className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-lg-2" htmlFor="inputSuccess">Column sizing</label>
                    <div className="col-lg-10">
                    <div className="row">
                        <div className="col-lg-2">
                        <input type="text" className="form-control" placeholder=".col-lg-2" />
                        </div>
                        <div className="col-lg-3">
                        <input type="text" className="form-control" placeholder=".col-lg-3" />
                        </div>
                        <div className="col-lg-4">
                        <input type="text" className="form-control" placeholder=".col-lg-4" />
                        </div>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </section>
        </div>
        </div>
        {/* Basic Forms & Horizontal Forms*/}
        <div className="row">
        <div className="col-lg-6">
            <section className="panel">
            <header className="panel-heading">
                Basic Forms
            </header>
            <div className="panel-body">
                <form role="form">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputFile">File input</label>
                    <input type="file" id="exampleInputFile" />
                    <p className="help-block">Example block-level help text here.</p>
                </div>
                <div className="checkbox">
                    <label>
                    <input type="checkbox" /> Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </section>
        </div>
        <div className="col-lg-6">
            <section className="panel">
            <header className="panel-heading">
                Horizontal Forms
            </header>
            <div className="panel-body">
                <form className="form-horizontal" role="form">
                <div className="form-group">
                    <label htmlFor="inputEmail1" className="col-lg-2 control-label">Email</label>
                    <div className="col-lg-10">
                    <input type="email" className="form-control" id="inputEmail1" placeholder="Email" />
                    <p className="help-block">Example block-level help text here.</p>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword1" className="col-lg-2 control-label">Password</label>
                    <div className="col-lg-10">
                    <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" /> Remember me
                        </label>
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                    <button type="submit" className="btn btn-danger">Sign in</button>
                    </div>
                </div>
                </form>
            </div>
            </section>
            <section className="panel">
            <div className="panel-body">
                <a href="#myModal" data-toggle="modal" className="btn btn-primary">
                Form in Modal
                </a>
                <a href="#myModal-1" data-toggle="modal" className="btn  btn-warning">
                Form in Modal 2
                </a>
                <a href="#myModal-2" data-toggle="modal" className="btn  btn-danger">
                Form in Modal 3
                </a>
                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1} id="myModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                        <h4 className="modal-title">Form Tittle</h4>
                    </div>
                    <div className="modal-body">
                        <form role="form">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">File input</label>
                            <input type="file" id="exampleInputFile3" />
                            <p className="help-block">Example block-level help text here.</p>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input type="checkbox" /> Check me out
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1} id="myModal-1" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                        <h4 className="modal-title">Form Tittle</h4>
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal" role="form">
                        <div className="form-group">
                            <label htmlFor="inputEmail1" className="col-lg-2 control-label">Email</label>
                            <div className="col-lg-10">
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword1" className="col-lg-2 control-label">Password</label>
                            <div className="col-lg-10">
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-offset-2 col-lg-10">
                            <div className="checkbox">
                                <label>
                                <input type="checkbox" /> Remember me
                                </label>
                            </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-offset-2 col-lg-10">
                            <button type="submit" className="btn btn-info">Sign in</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1} id="myModal-2" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                        <h4 className="modal-title">Form Tittle</h4>
                    </div>
                    <div className="modal-body">
                        <form className="form-inline" role="form">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                            <input type="email" className="form-control sm-input" id="exampleInputEmail5" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                            <input type="password" className="form-control sm-input" id="exampleInputPassword5" placeholder="Password" />
                        </div>
                        <div className="checkbox">
                            <label>
                            <input type="checkbox" /> Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-success">Sign in</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
        </div>
        {/* Inline form*/}
        <div className="row">
        <div className="col-lg-12">
            <section className="panel">
            <header className="panel-heading">
                Inline form
            </header>
            <div className="panel-body">
                <form className="form-inline" role="form">
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                </div>
                <div className="checkbox">
                    <label>
                    <input type="checkbox" /> Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
            </section>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-12">
            <div className="row">
            <div className="col-lg-6">
                <section className="panel">
                <header className="panel-heading">
                    Color Pickers &amp; Date Pickers
                </header>
                <div className="panel-body">
                    <form className="form-horizontal " action="#">
                    {/*date picker start*/}
                    <div className="form-group">
                        <label className="control-label col-sm-4">Default Datepicker</label>
                        <div className="col-sm-6">
                        <input id="dp1" type="text" defaultValue="28-10-2013" size={16} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-4">Starts with years view</label>
                        <div className="col-sm-6">
                        <div className="input-append date" id="dpYears" data-date="18-06-2013" data-date-format="dd-mm-yyyy" data-date-viewmode="years">
                            <input className="form-control" size={16} type="text" defaultValue="28-06-2013" readOnly />
                            <span className="add-on"><i className="icon-calendar" /></span>
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-4"> Date Ranges</label>
                        <div className="col-sm-6">
                        <div className="input-prepend">
                            <input id="reservation" type="text" className=" form-control" />
                        </div>
                        </div>
                    </div>
                    {/*date picker end*/}
                    {/*color picker start*/}
                    <div className="form-group">
                        <label className="control-label col-sm-4">Default</label>
                        <div className="col-sm-5">
                        <input type="text" defaultValue="#CCCCCC" className="cp1 form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-4">RGBA</label>
                        <div className="col-sm-5">
                        <input type="text" data-color-format="rgba" defaultValue="rgb(255,255,255,1)" className="cp2 form-control" />
                        </div>
                    </div>
                    {/*color picker end*/}
                    </form>
                </div>
                </section>
                <section className="panel">
                <header className="panel-heading">
                    Tags Input
                </header>
                <div className="panel-body">
                    <input name="tagsinput" id="tagsinput" className="tagsinput" defaultValue="Creative, Dashboard, Admin, Template, Theme, Bootstrap, Responsive, Retina, Minimal" />
                </div>
                </section>
            </div>
            <div className="col-lg-6">
                <section className="panel">
                <header className="panel-heading">
                    Custom Checkbox &amp; Radio
                </header>
                <div className="panel-body">
                    <form action="#" method="get" acceptCharset="utf-8">
                    <div className="checkboxes">
                        <label className="label_check" htmlFor="checkbox-01">
                        <input name="sample-checkbox-01" id="checkbox-01" defaultValue={1} type="checkbox" defaultChecked /> I agree to the terms &amp; conditions.
                        </label>
                        <label className="label_check" htmlFor="checkbox-02">
                        <input name="sample-checkbox-02" id="checkbox-02" defaultValue={1} type="checkbox" /> Please send me regular updates. </label>
                        <label className="label_check" htmlFor="checkbox-03">
                        <input name="sample-checkbox-02" id="checkbox-03" defaultValue={1} type="checkbox" /> This is nice checkbox.</label>
                    </div>
                    <div className="radios">
                        <label className="label_radio" htmlFor="radio-01">
                        <input name="sample-radio" id="radio-01" defaultValue={1} type="radio" defaultChecked /> This is option A...
                        </label>
                        <label className="label_radio" htmlFor="radio-02">
                        <input name="sample-radio" id="radio-02" defaultValue={1} type="radio" /> and this is option B...
                        </label>
                        <label className="label_radio" htmlFor="radio-03">
                        <input name="sample-radio" id="radio-03" defaultValue={1} type="radio" /> or simply choose option C
                        </label>
                    </div>
                    </form>
                </div>
                </section>
                <section className="panel">
                <header className="panel-heading">
                    Switch
                </header>
                <div className="panel-body">
                    <div className="row m-bot15">
                    <div className="col-sm-6 text-center">
                        <input type="checkbox" defaultChecked data-toggle="switch" />
                    </div>
                    <div className="col-sm-6 text-center">
                        <input type="checkbox" data-toggle="switch" />
                    </div>
                    </div>
                    <div className="row m-bot15">
                    <div className="col-sm-6 text-center">
                        <div className="switch switch-square" data-on-label="<i class=' icon-ok'></i>" data-off-label="<i class='icon-remove'></i>">
                        <input type="checkbox" />
                        </div>
                    </div>
                    <div className="col-sm-6 text-center">
                        <div className="switch switch-square" data-on-label="<i class=' icon-ok'></i>" data-off-label="<i class='icon-remove'></i>">
                        <input type="checkbox" defaultChecked />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-6 text-center">
                        <input type="checkbox" disabled data-toggle="switch" />
                    </div>
                    <div className="col-sm-6 text-center">
                        <input type="checkbox" defaultChecked disabled data-toggle="switch" />
                    </div>
                    </div>
                </div>
                </section>
            </div>
            </div>
            <div className="row">
            {/* Bootsrep Editor */}
            <div className="col-lg-12">
                <section className="panel">
                <header className="panel-heading">
                    Bootsrep Editor
                </header>
                <div className="panel-body">
                    <div id="editor" className="btn-toolbar" data-role="editor-toolbar" data-target="#editor" />
                </div>
                </section>
            </div>
            {/* CKEditor */}
            <div className="col-lg-12">
                <section className="panel">
                <header className="panel-heading">
                    CKEditor
                </header>
                <div className="panel-body">
                    <div className="form">
                    <form action="#" className="form-horizontal">
                        <div className="form-group">
                        <label className="control-label col-sm-2">CKEditor</label>
                        <div className="col-sm-10">
                            <textarea className="form-control ckeditor" name="editor1" rows={6} defaultValue={""} />
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </section>
            </div>
            </div>
        </div>
        </div>
        {/* page end*/}
    </section>
    </section>

    )
}
