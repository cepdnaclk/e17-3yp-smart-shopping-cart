import React from 'react'
import { Link } from 'react-router-dom'
export default function Basic_table() {
    return (
    <section id="main-content">
    <section className="wrapper">
        <div className="row">
        <div className="col-lg-12">
            <h3 className="page-header"><i className="fa fa-table" /> Table</h3>
            <ol className="breadcrumb">
            <li><i className="fa fa-home" /><Link to="/">Home</Link></li>
            <li><i className="fa fa-table" />Table</li>
            <li><i className="fa fa-th-list" />Basic Table</li>
            </ol>
        </div>
        </div>
        {/* page start*/}
        <div className="row">
        <div className="col-sm-6">
            <section className="panel">
            <header className="panel-heading">
                Basic Table
            </header>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
            </section>
        </div>
        <div className="col-sm-6">
            <section className="panel">
            <header className="panel-heading">
                Striped Table
            </header>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
            </section>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-6">
            <section className="panel">
            <header className="panel-heading no-border">
                Border Table
            </header>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td rowSpan={2}>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@TwBootstrap</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
            </section>
        </div>
        <div className="col-sm-6">
            <section className="panel">
            <header className="panel-heading">
                Hover Table
            </header>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Sumon</td>
                    <td>Mosa</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
            </section>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-6">
            <section className="panel">
            <header className="panel-heading">
                Condensed table
            </header>
            <table className="table table-condensed">
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Ajay Patel</td>
                    <td>LA</td>
                    <td>@ajaypatel_aj</td>
                </tr>
                </tbody>
            </table>
            </section>
        </div>
        <div className="col-sm-6">
            <section className="panel">
            <header className="panel-heading">
                Contextual classes
            </header>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                </tr>
                </thead>
                <tbody>
                <tr className="active">
                    <td>1</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                </tr>
                <tr className="success">
                    <td>2</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                </tr>
                <tr className="warning">
                    <td>3</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                </tr>
                <tr className="danger">
                    <td>4</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                </tr>
                </tbody>
            </table>
            </section>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-12">
            <section className="panel">
            <header className="panel-heading">
                Responsive tables
            </header>
            <div className="table-responsive">
                <table className="table">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </section>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-12">
            <section className="panel">
            <header className="panel-heading">
                Advanced Table
            </header>
            <table className="table table-striped table-advance table-hover">
                <tbody>
                <tr>
                    <th><i className="icon_profile" /> Full Name</th>
                    <th><i className="icon_calendar" /> Date</th>
                    <th><i className="icon_mail_alt" /> Email</th>
                    <th><i className="icon_pin_alt" /> City</th>
                    <th><i className="icon_mobile" /> Mobile</th>
                    <th><i className="icon_cogs" /> Action</th>
                </tr>
                <tr>
                    <td>Angeline Mcclain</td>
                    <td>2004-07-06</td>
                    <td>dale@chief.info</td>
                    <td>Rosser</td>
                    <td>176-026-5992</td>
                    <td>
                    <div className="btn-group">
                        <a className="btn btn-primary" href="#"><i className="icon_plus_alt2" /></a>
                        <a className="btn btn-success" href="#"><i className="icon_check_alt2" /></a>
                        <a className="btn btn-danger" href="#"><i className="icon_close_alt2" /></a>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>Sung Carlson</td>
                    <td>2011-01-10</td>
                    <td>ione.gisela@high.org</td>
                    <td>Robert Lee</td>
                    <td>724-639-4784</td>
                    <td>
                    <div className="btn-group">
                        <a className="btn btn-primary" href="#"><i className="icon_plus_alt2" /></a>
                        <a className="btn btn-success" href="#"><i className="icon_check_alt2" /></a>
                        <a className="btn btn-danger" href="#"><i className="icon_close_alt2" /></a>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>Bryon Osborne</td>
                    <td>2006-10-29</td>
                    <td>sol.raleigh@language.edu</td>
                    <td>York</td>
                    <td>180-456-0056</td>
                    <td>
                    <div className="btn-group">
                        <a className="btn btn-primary" href="#"><i className="icon_plus_alt2" /></a>
                        <a className="btn btn-success" href="#"><i className="icon_check_alt2" /></a>
                        <a className="btn btn-danger" href="#"><i className="icon_close_alt2" /></a>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>Dalia Marquez</td>
                    <td>2011-12-15</td>
                    <td>angeline.frieda@thick.com</td>
                    <td>Alton</td>
                    <td>690-601-1922</td>
                    <td>
                    <div className="btn-group">
                        <a className="btn btn-primary" href="#"><i className="icon_plus_alt2" /></a>
                        <a className="btn btn-success" href="#"><i className="icon_check_alt2" /></a>
                        <a className="btn btn-danger" href="#"><i className="icon_close_alt2" /></a>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>Selina Fitzgerald</td>
                    <td>2003-01-06</td>
                    <td>moshe.mikel@parcelpart.info</td>
                    <td>Waelder</td>
                    <td>922-810-0915</td>
                    <td>
                    <div className="btn-group">
                        <a className="btn btn-primary" href="#"><i className="icon_plus_alt2" /></a>
                        <a className="btn btn-success" href="#"><i className="icon_check_alt2" /></a>
                        <a className="btn btn-danger" href="#"><i className="icon_close_alt2" /></a>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>Abraham Avery</td>
                    <td>2006-07-14</td>
                    <td>harvey.jared@pullpump.org</td>
                    <td>Harker Heights</td>
                    <td>511-175-7115</td>
                    <td>
                    <div className="btn-group">
                        <a className="btn btn-primary" href="#"><i className="icon_plus_alt2" /></a>
                        <a className="btn btn-success" href="#"><i className="icon_check_alt2" /></a>
                        <a className="btn btn-danger" href="#"><i className="icon_close_alt2" /></a>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>Caren Mcdowell</td>
                    <td>2002-03-29</td>
                    <td>valeria@hookhope.org</td>
                    <td>Blackwell</td>
                    <td>970-147-5550</td>
                    <td>
                    <div className="btn-group">
                        <a className="btn btn-primary" href="#"><i className="icon_plus_alt2" /></a>
                        <a className="btn btn-success" href="#"><i className="icon_check_alt2" /></a>
                        <a className="btn btn-danger" href="#"><i className="icon_close_alt2" /></a>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>Owen Bingham</td>
                    <td>2013-04-06</td>
                    <td>thomas.christopher@firstfish.info</td>
                    <td>Rule</td>
                    <td>934-118-6046</td>
                    <td>
                    <div className="btn-group">
                        <a className="btn btn-primary" href="#"><i className="icon_plus_alt2" /></a>
                        <a className="btn btn-success" href="#"><i className="icon_check_alt2" /></a>
                        <a className="btn btn-danger" href="#"><i className="icon_close_alt2" /></a>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>Ahmed Dean</td>
                    <td>2008-03-19</td>
                    <td>lakesha.geri.allene@recordred.com</td>
                    <td>Darrouzett</td>
                    <td>338-081-8817</td>
                    <td>
                    <div className="btn-group">
                        <a className="btn btn-primary" href="#"><i className="icon_plus_alt2" /></a>
                        <a className="btn btn-success" href="#"><i className="icon_check_alt2" /></a>
                        <a className="btn btn-danger" href="#"><i className="icon_close_alt2" /></a>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>Mario Norris</td>
                    <td>2010-02-08</td>
                    <td>mildred@hour.info</td>
                    <td>Amarillo</td>
                    <td>945-547-5302</td>
                    <td>
                    <div className="btn-group">
                        <a className="btn btn-primary" href="#"><i className="icon_plus_alt2" /></a>
                        <a className="btn btn-success" href="#"><i className="icon_check_alt2" /></a>
                        <a className="btn btn-danger" href="#"><i className="icon_close_alt2" /></a>
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </section>
        </div>
        </div>
        {/* page end*/}
    </section>
    </section>

    )
}
