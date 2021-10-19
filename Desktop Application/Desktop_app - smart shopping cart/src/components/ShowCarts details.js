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