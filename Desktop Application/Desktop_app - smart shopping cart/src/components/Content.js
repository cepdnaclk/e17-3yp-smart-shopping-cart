import React from 'react'
import Header from './Header';
import Navigation from './Navigation';

export default function Content() {
    return ( 
    <div>
    {/*main content start*/}
    <>
    <Header/>
    <Navigation/>
    <section id="main-content">
        <section className="wrapper">
        {/*overview start*/}
        <div className="row">
            <div className="col-lg-12">
            <h3 className="page-header"><i className="fa fa-laptop" /> Dashboard</h3>
            <ol className="breadcrumb">
                <li><i className="fa fa-home" /><a href="index.html">Home</a></li>
                <li><i className="fa fa-laptop" />Dashboard</li>
            </ol>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="info-box blue-bg">
                <i className="fa fa-cloud-download" />
                <div className="count">6.674</div>
                <div className="title">Download</div>
            </div>
            {/*/.info-box*/}
            </div>
            {/*/.col*/}
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="info-box brown-bg">
                <i className="fa fa-shopping-cart" />
                <div className="count">7.538</div>
                <div className="title">Purchased</div>
            </div>
            {/*/.info-box*/}
            </div>
            {/*/.col*/}
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="info-box dark-bg">
                <i className="fa fa-thumbs-o-up" />
                <div className="count">4.362</div>
                <div className="title">Order</div>
            </div>
            {/*/.info-box*/}
            </div>
            {/*/.col*/}
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="info-box green-bg">
                <i className="fa fa-cubes" />
                <div className="count">1.426</div>
                <div className="title">Stock</div>
            </div>
            {/*/.info-box*/}
            </div>
            {/*/.col*/}
        </div>
        {/*/.row*/}
        <div className="row">
            <div className="col-lg-9 col-md-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                <h2><i className="fa fa-map-marker red" /><strong>Countries</strong></h2>
                <div className="panel-actions">
                    <a href="index.html#" className="btn-setting"><i className="fa fa-rotate-right" /></a>
                    <a href="index.html#" className="btn-minimize"><i className="fa fa-chevron-up" /></a>
                    <a href="index.html#" className="btn-close"><i className="fa fa-times" /></a>
                </div>
                </div>
                <div className="panel-body-map">
                <div id="map" style={{height: 380}} />
                </div>
            </div>
            </div>
            <div className="col-md-3">
            {/* List starts */}
            <ul className="today-datas">
                {/* List #1 */}
                <li>
                {/* Graph */}
                <div><span id="todayspark1" className="spark" /></div>
                {/* Text */}
                <div className="datas-text">11,500 visitors/day</div>
                </li>
                <li>
                <div><span id="todayspark2" className="spark" /></div>
                <div className="datas-text">15,000 Pageviews</div>
                </li>
                <li>
                <div><span id="todayspark3" className="spark" /></div>
                <div className="datas-text">30.55% Bounce Rate</div>
                </li>
                <li>
                <div><span id="todayspark4" className="spark" /></div>
                <div className="datas-text">$16,00 Revenue/Day</div>
                </li>
                <li>
                <div><span id="todayspark5" className="spark" /></div>
                <div className="datas-text">12,000000 visitors every Month</div>
                </li>
            </ul>
            </div>
        </div>
        {/* Today status end */}
        <div className="row">
            <div className="col-lg-9 col-md-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                <h2><i className="fa fa-flag-o red" /><strong>Registered Users</strong></h2>
                <div className="panel-actions">
                    <a href="index.html#" className="btn-setting"><i className="fa fa-rotate-right" /></a>
                    <a href="index.html#" className="btn-minimize"><i className="fa fa-chevron-up" /></a>
                    <a href="index.html#" className="btn-close"><i className="fa fa-times" /></a>
                </div>
                </div>
                <div className="panel-body">
                <table className="table bootstrap-datatable countries">
                    <thead>
                    <tr>
                        <th />
                        <th>Country</th>
                        <th>Users</th>
                        <th>Online</th>
                        <th>Performance</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><img src="img/Germany.png" style={{height: 18, marginTop: '-2px'}} /></td>
                        <td>Germany</td>
                        <td>2563</td>
                        <td>1025</td>
                        <td>
                        <div className="progress thin">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={73} aria-valuemin={0} aria-valuemax={100} style={{width: '73%'}}>
                            </div>
                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={27} aria-valuemin={0} aria-valuemax={100} style={{width: '27%'}}>
                            </div>
                        </div>
                        <span className="sr-only">73%</span>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="img/India.png" style={{height: 18, marginTop: '-2px'}} /></td>
                        <td>India</td>
                        <td>3652</td>
                        <td>2563</td>
                        <td>
                        <div className="progress thin">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} style={{width: '57%'}}>
                            </div>
                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={43} aria-valuemin={0} aria-valuemax={100} style={{width: '43%'}}>
                            </div>
                        </div>
                        <span className="sr-only">57%</span>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="img/Spain.png" style={{height: 18, marginTop: '-2px'}} /></td>
                        <td>Spain</td>
                        <td>562</td>
                        <td>452</td>
                        <td>
                        <div className="progress thin">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={93} aria-valuemin={0} aria-valuemax={100} style={{width: '93%'}}>
                            </div>
                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={7} aria-valuemin={0} aria-valuemax={100} style={{width: '7%'}}>
                            </div>
                        </div>
                        <span className="sr-only">93%</span>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="img/India.png" style={{height: 18, marginTop: '-2px'}} /></td>
                        <td>Russia</td>
                        <td>1258</td>
                        <td>958</td>
                        <td>
                        <div className="progress thin">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                            </div>
                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                            </div>
                        </div>
                        <span className="sr-only">20%</span>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="img/Spain.png" style={{height: 18, marginTop: '-2px'}} /></td>
                        <td>USA</td>
                        <td>4856</td>
                        <td>3621</td>
                        <td>
                        <div className="progress thin">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                            </div>
                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                            </div>
                        </div>
                        <span className="sr-only">20%</span>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="img/Germany.png" style={{height: 18, marginTop: '-2px'}} /></td>
                        <td>Brazil</td>
                        <td>265</td>
                        <td>102</td>
                        <td>
                        <div className="progress thin">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                            </div>
                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                            </div>
                        </div>
                        <span className="sr-only">20%</span>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="img/Germany.png" style={{height: 18, marginTop: '-2px'}} /></td>
                        <td>Coloumbia</td>
                        <td>265</td>
                        <td>102</td>
                        <td>
                        <div className="progress thin">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                            </div>
                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                            </div>
                        </div>
                        <span className="sr-only">20%</span>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="img/Germany.png" style={{height: 18, marginTop: '-2px'}} /></td>
                        <td>France</td>
                        <td>265</td>
                        <td>102</td>
                        <td>
                        <div className="progress thin">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                            </div>
                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                            </div>
                        </div>
                        <span className="sr-only">20%</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
            {/*/col*/}
            <div className="col-md-3">
            <div className="social-box facebook">
                <i className="fa fa-facebook" />
                <ul>
                <li>
                    <strong>256k</strong>
                    <span>friends</span>
                </li>
                <li>
                    <strong>359</strong>
                    <span>feeds</span>
                </li>
                </ul>
            </div>
            {/*/social-box*/}
            </div>
            <div className="col-md-3">
            <div className="social-box google-plus">
                <i className="fa fa-google-plus" />
                <ul>
                <li>
                    <strong>962</strong>
                    <span>followers</span>
                </li>
                <li>
                    <strong>256</strong>
                    <span>circles</span>
                </li>
                </ul>
            </div>
            {/*/social-box*/}
            </div>
            {/*/col*/}
            <div className="col-md-3">
            <div className="social-box twitter">
                <i className="fa fa-twitter" />
                <ul>
                <li>
                    <strong>1562k</strong>
                    <span>followers</span>
                </li>
                <li>
                    <strong>2562</strong>
                    <span>tweets</span>
                </li>
                </ul>
            </div>
            {/*/social-box*/}
            </div>
            {/*/col*/}
        </div>
        {/* statics end */}
        {/* project team & activity start */}
        <div className="row">
            <div className="col-md-4 portlets">
            {/* Widget */}
            <div className="panel panel-default">
                <div className="panel-heading">
                <div className="pull-left">Message</div>
                <div className="widget-icons pull-right">
                    <a href="#" className="wminimize"><i className="fa fa-chevron-up" /></a>
                    <a href="#" className="wclose"><i className="fa fa-times" /></a>
                </div>
                <div className="clearfix" />
                </div>
                <div className="panel-body">
                {/* Widget content */}
                <div className="padd sscroll">
                    <ul className="chats">
                    {/* Chat by us. Use the class "by-me". */}
                    <li className="by-me">
                        {/* Use the class "pull-left" in avatar */}
                        <div className="avatar pull-left">
                        <img src="img/user.jpg" alt />
                        </div>
                        <div className="chat-content">
                        {/* In meta area, first include "name" and then "time" */}
                        <div className="chat-meta">John Smith <span className="pull-right">3 hours ago</span></div>
                        Vivamus diam elit diam, consectetur dapibus adipiscing elit.
                        <div className="clearfix" />
                        </div>
                    </li>
                    {/* Chat by other. Use the class "by-other". */}
                    <li className="by-other">
                        {/* Use the class "pull-right" in avatar */}
                        <div className="avatar pull-right">
                        <img src="img/user22.png" alt />
                        </div>
                        <div className="chat-content">
                        {/* In the chat meta, first include "time" then "name" */}
                        <div className="chat-meta">3 hours ago <span className="pull-right">Jenifer Smith</span></div>
                        Vivamus diam elit diam, consectetur fconsectetur dapibus adipiscing elit.
                        <div className="clearfix" />
                        </div>
                    </li>
                    <li className="by-me">
                        <div className="avatar pull-left">
                        <img src="img/user.jpg" alt />
                        </div>
                        <div className="chat-content">
                        <div className="chat-meta">John Smith <span className="pull-right">4 hours ago</span></div>
                        Vivamus diam elit diam, consectetur fermentum sed dapibus eget, Vivamus consectetur dapibus adipiscing elit.
                        <div className="clearfix" />
                        </div>
                    </li>
                    <li className="by-other">
                        {/* Use the class "pull-right" in avatar */}
                        <div className="avatar pull-right">
                        <img src="img/user22.png" alt />
                        </div>
                        <div className="chat-content">
                        {/* In the chat meta, first include "time" then "name" */}
                        <div className="chat-meta">3 hours ago <span className="pull-right">Jenifer Smith</span></div>
                        Vivamus diam elit diam, consectetur fermentum sed dapibus eget, Vivamus consectetur dapibus adipiscing elit.
                        <div className="clearfix" />
                        </div>
                    </li>
                    </ul>
                </div>
                {/* Widget footer */}
                <div className="widget-foot">
                    <form className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Type your message here..." />
                    </div>
                    <button type="submit" className="btn btn-info">Send</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
            <div className="col-lg-8">
            {/*Project Activity start*/}
            <section className="panel">
                <div className="panel-body progress-panel">
                <div className="row">
                    <div className="col-lg-8 task-progress pull-left">
                    <h1>To Do Everyday</h1>
                    </div>
                    <div className="col-lg-4">
                    <span className="profile-ava pull-right">
                        <img alt className="simple" src="img/avatar1_small.jpg" />
                        Jenifer smith
                    </span>
                    </div>
                </div>
                </div>
                <table className="table table-hover personal-task">
                <tbody>
                    <tr>
                    <td>Today</td>
                    <td>
                        web design
                    </td>
                    <td>
                        <span className="badge bg-important">Upload</span>
                    </td>
                    <td>
                        <span className="profile-ava">
                        <img alt className="simple" src="img/avatar1_small.jpg" />
                        </span>
                    </td>
                    </tr>
                    <tr>
                    <td>Yesterday</td>
                    <td>
                        Project Design Task
                    </td>
                    <td>
                        <span className="badge bg-success">Task</span>
                    </td>
                    <td>
                        <div id="work-progress2" />
                    </td>
                    </tr>
                    <tr>
                    <td>21-10-14</td>
                    <td>
                        Generate Invoice
                    </td>
                    <td>
                        <span className="badge bg-success">Task</span>
                    </td>
                    <td>
                        <div id="work-progress3" />
                    </td>
                    </tr>
                    <tr>
                    <td>22-10-14</td>
                    <td>
                        Project Testing
                    </td>
                    <td>
                        <span className="badge bg-primary">To-Do</span>
                    </td>
                    <td>
                        <span className="profile-ava">
                        <img alt className="simple" src="img/avatar1_small.jpg" />
                        </span>
                    </td>
                    </tr>
                    <tr>
                    <td>24-10-14</td>
                    <td>
                        Project Release Date
                    </td>
                    <td>
                        <span className="badge bg-info">Milestone</span>
                    </td>
                    <td>
                        <div id="work-progress4" />
                    </td>
                    </tr>
                    <tr>
                    <td>28-10-14</td>
                    <td>
                        Project Release Date
                    </td>
                    <td>
                        <span className="badge bg-primary">To-Do</span>
                    </td>
                    <td>
                        <div id="work-progress5" />
                    </td>
                    </tr>
                    <tr>
                    <td>Last week</td>
                    <td>
                        Project Release Date
                    </td>
                    <td>
                        <span className="badge bg-primary">To-Do</span>
                    </td>
                    <td>
                        <div id="work-progress1" />
                    </td>
                    </tr>
                    <tr>
                    <td>last month</td>
                    <td>
                        Project Release Date
                    </td>
                    <td>
                        <span className="badge bg-success">To-Do</span>
                    </td>
                    <td>
                        <span className="profile-ava">
                        <img alt className="simple" src="img/avatar1_small.jpg" />
                        </span>
                    </td>
                    </tr>
                </tbody>
                </table>
            </section>
            {/*Project Activity end*/}
            </div>
        </div><br /><br />
        <div className="row">
            <div className="col-md-6 portlets">
            <div className="panel panel-default">
                <div className="panel-heading">
                <h2><strong>Calendar</strong></h2>
                <div className="panel-actions">
                    <a href="#" className="wminimize"><i className="fa fa-chevron-up" /></a>
                    <a href="#" className="wclose"><i className="fa fa-times" /></a>
                </div>
                </div><br /><br /><br />
                <div className="panel-body">
                {/* Widget content */}
                {/* Below line produces calendar. I am using FullCalendar plugin. */}
                <div id="calendar" />
                </div>
            </div>
            </div>
            <div className="col-md-6 portlets">
            <div className="panel panel-default">
                <div className="panel-heading">
                <div className="pull-left">Quick Post</div>
                <div className="widget-icons pull-right">
                    <a href="#" className="wminimize"><i className="fa fa-chevron-up" /></a>
                    <a href="#" className="wclose"><i className="fa fa-times" /></a>
                </div>
                <div className="clearfix" />
                </div>
                <div className="panel-body">
                <div className="padd">
                    <div className="form quick-post">
                    {/* Edit profile form (not working)*/}
                    <form className="form-horizontal">
                        {/* Title */}
                        <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="title">Title</label>
                        <div className="col-lg-10">
                            <input type="text" className="form-control" id="title" />
                        </div>
                        </div>
                        {/* Content */}
                        <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="content">Content</label>
                        <div className="col-lg-10">
                            <textarea className="form-control" id="content" defaultValue={""} />
                        </div>
                        </div>
                        {/* Cateogry */}
                        <div className="form-group">
                        <label className="control-label col-lg-2">Category</label>
                        <div className="col-lg-10">
                            <select className="form-control">
                            <option value>- Choose Cateogry -</option>
                            <option value={1}>General</option>
                            <option value={2}>News</option>
                            <option value={3}>Media</option>
                            <option value={4}>Funny</option>
                            </select>
                        </div>
                        </div>
                        {/* Tags */}
                        <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="tags">Tags</label>
                        <div className="col-lg-10">
                            <input type="text" className="form-control" id="tags" />
                        </div>
                        </div>
                        {/* Buttons */}
                        <div className="form-group">
                        {/* Buttons */}
                        <div className="col-lg-offset-2 col-lg-9">
                            <button type="submit" className="btn btn-primary">Publish</button>
                            <button type="submit" className="btn btn-danger">Save Draft</button>
                            <button type="reset" className="btn btn-default">Reset</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="widget-foot">
                    {/* Footer goes here */}
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* project team & activity end */}
        </section>
        <div className="text-right">
        <div className="credits">
            {/*
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version form: https://bootstrapmade.com/buy/?theme=NiceAdmin
        */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
        </div>
    </section>
    {/*main content end*/}

    </>
    </div>

    )
}

