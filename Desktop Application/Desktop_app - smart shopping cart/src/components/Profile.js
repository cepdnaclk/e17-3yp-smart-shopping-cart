import React from 'react'

export default function Profile() {
    return (
    <div>
    {/*main content start*/}
    <section id="main-content">
        <section className="wrapper">
        <div className="row">
            <div className="col-lg-12">
            <h3 className="page-header"><i className="fa fa-user-md" /> Profile</h3>
            <ol className="breadcrumb">
                <li><i className="fa fa-home" /><a href="index.html">Home</a></li>
                <li><i className="icon_documents_alt" />Pages</li>
                <li><i className="fa fa-user-md" />Profile</li>
            </ol>
            </div>
        </div>
        <div className="row">
            {/* profile-widget */}
            <div className="col-lg-12">
            <div className="profile-widget profile-widget-info">
                <div className="panel-body">
                <div className="col-lg-2 col-sm-2">
                    <h4>Jenifer Smith</h4>
                    <div className="follow-ava">
                    <img src="img/profile-widget-avatar.jpg" alt />
                    </div>
                    <h6>Administrator</h6>
                </div>
                <div className="col-lg-4 col-sm-4 follow-info">
                    <p>Hello I’m Jenifer Smith, a leading expert in interactive and creative design.</p>
                    <p>@jenifersmith</p>
                    <p><i className="fa fa-twitter">jenifertweet</i></p>
                    <h6>
                    <span><i className="icon_clock_alt" />11:05 AM</span>
                    <span><i className="icon_calendar" />25.10.13</span>
                    <span><i className="icon_pin_alt" />NY</span>
                    </h6>
                </div>
                <div className="col-lg-2 col-sm-6 follow-info weather-category">
                    <ul>
                    <li className="active">
                        <i className="fa fa-comments fa-2x"> </i><br /> Contrary to popular belief, Lorem Ipsum is not simply
                    </li>
                    </ul>
                </div>
                <div className="col-lg-2 col-sm-6 follow-info weather-category">
                    <ul>
                    <li className="active">
                        <i className="fa fa-bell fa-2x"> </i><br /> Contrary to popular belief, Lorem Ipsum is not simply
                    </li>
                    </ul>
                </div>
                <div className="col-lg-2 col-sm-6 follow-info weather-category">
                    <ul>
                    <li className="active">
                        <i className="fa fa-tachometer fa-2x"> </i><br /> Contrary to popular belief, Lorem Ipsum is not simply
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* page start*/}
        <div className="row">
            <div className="col-lg-12">
            <section className="panel">
                <header className="panel-heading tab-bg-info">
                <ul className="nav nav-tabs">
                    <li className="active">
                    <a data-toggle="tab" href="#recent-activity">
                        <i className="icon-home" />
                        Daily Activity
                    </a>
                    </li>
                    <li>
                    <a data-toggle="tab" href="#profile">
                        <i className="icon-user" />
                        Profile
                    </a>
                    </li>
                    <li className>
                    <a data-toggle="tab" href="#edit-profile">
                        <i className="icon-envelope" />
                        Edit Profile
                    </a>
                    </li>
                </ul>
                </header>
                <div className="panel-body">
                <div className="tab-content">
                    <div id="recent-activity" className="tab-pane active">
                    <div className="profile-activity">
                        <div className="act-time">
                        <div className="activity-body act-in">
                            <span className="arrow" />
                            <div className="text">
                            <a href="#" className="activity-img"><img className="avatar" src="img/chat-avatar.jpg" alt /></a>
                            <p className="attribution"><a href="#">Jonatanh Doe</a> at 4:25pm, 30th Octmber 2014</p>
                            <p>It is a long established fact that a reader will be distracted layout</p>
                            </div>
                        </div>
                        </div>
                        <div className="act-time">
                        <div className="activity-body act-in">
                            <span className="arrow" />
                            <div className="text">
                            <a href="#" className="activity-img"><img className="avatar" src="img/chat-avatar.jpg" alt /></a>
                            <p className="attribution"><a href="#">Jhon Loves </a> at 5:25am, 30th Octmber 2014</p>
                            <p>Knowledge speaks, but wisdom listens.</p>
                            </div>
                        </div>
                        </div>
                        <div className="act-time">
                        <div className="activity-body act-in">
                            <span className="arrow" />
                            <div className="text">
                            <a href="#" className="activity-img"><img className="avatar" src="img/chat-avatar.jpg" alt /></a>
                            <p className="attribution"><a href="#">Rose Crack</a> at 5:25am, 30th Octmber 2014</p>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            </div>
                        </div>
                        </div>
                        <div className="act-time">
                        <div className="activity-body act-in">
                            <span className="arrow" />
                            <div className="text">
                            <a href="#" className="activity-img"><img className="avatar" src="img/chat-avatar.jpg" alt /></a>
                            <p className="attribution"><a href="#">Jimy Smith</a> at 5:25am, 30th Octmber 2014</p>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                                ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                            </div>
                        </div>
                        </div>
                        <div className="act-time">
                        <div className="activity-body act-in">
                            <span className="arrow" />
                            <div className="text">
                            <a href="#" className="activity-img"><img className="avatar" src="img/chat-avatar.jpg" alt /></a>
                            <p className="attribution"><a href="#">Maria Willyam</a> at 5:25am, 30th Octmber 2014</p>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                                ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                                condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros
                                eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                            </div>
                        </div>
                        </div>
                        <div className="act-time">
                        <div className="activity-body act-in">
                            <span className="arrow" />
                            <div className="text">
                            <a href="#" className="activity-img"><img className="avatar" src="img/chat-avatar.jpg" alt /></a>
                            <p className="attribution"><a href="#">Sarah saw</a> at 5:25am, 30th Octmber 2014</p>
                            <p>Knowledge speaks, but wisdom listens.</p>
                            </div>
                        </div>
                        </div>
                        <div className="act-time">
                        <div className="activity-body act-in">
                            <span className="arrow" />
                            <div className="text">
                            <a href="#" className="activity-img"><img className="avatar" src="img/chat-avatar.jpg" alt /></a>
                            <p className="attribution"><a href="#">Layla night</a> at 5:25am, 30th Octmber 2014</p>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            </div>
                        </div>
                        </div>
                        <div className="act-time">
                        <div className="activity-body act-in">
                            <span className="arrow" />
                            <div className="text">
                            <a href="#" className="activity-img"><img className="avatar" src="img/chat-avatar.jpg" alt /></a>
                            <p className="attribution"><a href="#">Andriana lee</a> at 5:25am, 30th Octmber 2014</p>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                                ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                            </div>
                        </div>
                        </div>
                        <div className="act-time">
                        <div className="activity-body act-in">
                            <span className="arrow" />
                            <div className="text">
                            <a href="#" className="activity-img"><img className="avatar" src="img/chat-avatar.jpg" alt /></a>
                            <p className="attribution"><a href="#">Maria Willyam</a> at 5:25am, 30th Octmber 2014</p>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                                ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                                condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros
                                eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* profile */}
                    <div id="profile" className="tab-pane">
                    <section className="panel">
                        <div className="bio-graph-heading">
                        Hello I’m Jenifer Smith, a leading expert in interactive and creative design specializing in the mobile medium. My graduation from Massey University with a Bachelor of Design majoring in visual communication.
                        </div>
                        <div className="panel-body bio-graph-info">
                        <h1>Bio Graph</h1>
                        <div className="row">
                            <div className="bio-row">
                            <p><span>First Name </span>: Jenifer </p>
                            </div>
                            <div className="bio-row">
                            <p><span>Last Name </span>: Smith</p>
                            </div>
                            <div className="bio-row">
                            <p><span>Birthday</span>: 27 August 1987</p>
                            </div>
                            <div className="bio-row">
                            <p><span>Country </span>: United</p>
                            </div>
                            <div className="bio-row">
                            <p><span>Occupation </span>: UI Designer</p>
                            </div>
                            <div className="bio-row">
                            <p><span>Email </span>:jenifer@mailname.com</p>
                            </div>
                            <div className="bio-row">
                            <p><span>Mobile </span>: (+6283) 456 789</p>
                            </div>
                            <div className="bio-row">
                            <p><span>Phone </span>: (+021) 956 789123</p>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                        </div>
                    </section>
                    </div>
                    {/* edit-profile */}
                    <div id="edit-profile" className="tab-pane">
                    <section className="panel">
                        <div className="panel-body bio-graph-info">
                        <h1> Profile Info</h1>
                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                            <label className="col-lg-2 control-label">First Name</label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" id="f-name" placeholder=" " />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-2 control-label">Last Name</label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" id="l-name" placeholder=" " />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-2 control-label">About Me</label>
                            <div className="col-lg-10">
                                <textarea name id className="form-control" cols={30} rows={5} defaultValue={""} />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-2 control-label">Country</label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" id="c-name" placeholder=" " />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-2 control-label">Birthday</label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" id="b-day" placeholder=" " />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-2 control-label">Occupation</label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" id="occupation" placeholder=" " />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-2 control-label">Email</label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" id="email" placeholder=" " />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-2 control-label">Mobile</label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" id="mobile" placeholder=" " />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-2 control-label">Website URL</label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" id="url" placeholder="http://www.demowebsite.com " />
                            </div>
                            </div>
                            <div className="form-group">
                            <div className="col-lg-offset-2 col-lg-10">
                                <button type="submit" className="btn btn-primary">Save</button>
                                <button type="button" className="btn btn-danger">Cancel</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </section>
                    </div>
                </div>
                </div>
            </section>
            </div>
        </div>
        {/* page end*/}
        </section>
    </section>
    {/*main content end*/}</div>

    )
}
