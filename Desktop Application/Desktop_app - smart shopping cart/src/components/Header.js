import React from 'react'
import {Link} from 'react-router-dom'
import authServices from '../services/auth-services';
import {useContext, useEffect, useState} from 'react';
import {userContext} from '../App';
import Cookies from 'js-cookie';




export default function Header() {
    const {state, dispatch} = useContext(userContext);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
   

    useEffect(() => {
        const loginStatus = localStorage.getItem('isLoggedIn');
        setName(Cookies.get( 'name'  ));
       
        if(loginStatus ){ 
            setIsLoggedIn(true);
           
        } 
    }); 

    const handleLogout = () => {
        authServices.logout();
                console.log('logout');
                localStorage.removeItem('isLoggedIn')
       
                 dispatch({type:'USER', payload:false})
               
    }  
    if(!isLoggedIn){
        return (
                <>
            <header className="header dark-bg">
                <div className="toggle-nav">
                    <div className="icon-reorder tooltips" data-original-title="Toggle Navigation" data-placement="bottom"><i className="icon_menu" /></div>
                </div>
                {/*logo start*/}
                <Link to='/' className="logo">Smart Shopping <span className="lite">Cart</span></Link>
                
               
                {/*logo end*/}
                </header>
                </>
            )
            }
    else{
        
    return (
        
    <header className="header dark-bg">
        <div className="toggle-nav">
            <div className="icon-reorder tooltips" data-original-title="Toggle Navigation" data-placement="bottom"><i className="icon_menu" /></div>
        </div>
        {/*logo start*/}
        <Link to='/' className="logo">Smart Shopping <span className="lite">Cart</span></Link>
        
       
        {/*logo end*/}
        <div className="nav search-row" id="top_menu">
            {/*  search form start */}
            <ul className="nav top-menu">
            <li>
                <form className="navbar-form">
                <input className="form-control" placeholder="Search" type="text" />
                </form>
            </li>
            </ul>
            {/*  search form end */}
        </div>
        <div className="top-nav notification-row">
            {/* notificatoin dropdown start*/}
            <ul className="nav pull-right top-menu">
            {/* task notificatoin start */}
            <li id="task_notificatoin_bar" className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="icon-task-l" />
                <span className="badge bg-important">6</span>
                </a>
                <ul className="dropdown-menu extended tasks-bar">
                <div className="notify-arrow notify-arrow-blue" />
                <li>
                    <p className="blue">You have 6 pending letter</p>
                </li>
                <li>
                    <a href="#">
                    <div className="task-info">
                        <div className="desc">Design PSD </div>
                        <div className="percent">90%</div>
                    </div>
                    <div className="progress progress-striped">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                        <span className="sr-only">90% Complete (success)</span>
                        </div>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div className="task-info">
                        <div className="desc">
                        Project 1
                        </div>
                        <div className="percent">30%</div>
                    </div>
                    <div className="progress progress-striped">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{width: '30%'}}>
                        <span className="sr-only">30% Complete (warning)</span>
                        </div>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div className="task-info">
                        <div className="desc">Digital Marketing</div>
                        <div className="percent">80%</div>
                    </div>
                    <div className="progress progress-striped">
                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span className="sr-only">80% Complete</span>
                        </div>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div className="task-info">
                        <div className="desc">Logo Designing</div>
                        <div className="percent">78%</div>
                    </div>
                    <div className="progress progress-striped">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100} style={{width: '78%'}}>
                        <span className="sr-only">78% Complete (danger)</span>
                        </div>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div className="task-info">
                        <div className="desc">Mobile App</div>
                        <div className="percent">50%</div>
                    </div>
                    <div className="progress progress-striped active">
                        <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                        <span className="sr-only">50% Complete</span>
                        </div>
                    </div>
                    </a>
                </li>
                <li className="external">
                    <a href="#">See All Tasks</a>
                </li>
                </ul>
            </li>
            {/* task notificatoin end */}
            {/* inbox notificatoin start*/}
            <li id="mail_notificatoin_bar" className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="icon-envelope-l" />
                <span className="badge bg-important">5</span>
                </a>
                <ul className="dropdown-menu extended inbox">
                <div className="notify-arrow notify-arrow-blue" />
                <li>
                    <p className="blue">You have 5 new messages</p>
                </li>
                <li>
                    <a href="#">
                    <span className="photo"><img alt="avatar" src="./img/avatar-mini.jpg" /></span>
                    <span className="subject">
                        <span className="from">Greg  Martin</span>
                        <span className="time">1 min</span>
                    </span>
                    <span className="message">
                        I really like this admin panel.
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className="photo"><img alt="avatar" src="./img/avatar-mini2.jpg" /></span>
                    <span className="subject">
                        <span className="from">Bob   Mckenzie</span>
                        <span className="time">5 mins</span>
                    </span>
                    <span className="message">
                        Hi, What is next project plan?
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className="photo"><img alt="avatar" src="./img/avatar-mini3.jpg" /></span>
                    <span className="subject">
                        <span className="from">Phillip   Park</span>
                        <span className="time">2 hrs</span>
                    </span>
                    <span className="message">
                        I am like to buy this Admin Template.
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className="photo"><img alt="avatar" src="./img/avatar-mini4.jpg" /></span>
                    <span className="subject">
                        <span className="from">Ray   Munoz</span>
                        <span className="time">1 day</span>
                    </span>
                    <span className="message">
                        Icon fonts are great.
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#">See all messages</a>
                </li>
                </ul>
            </li>
            {/* inbox notificatoin end */}
            {/* alert notification start*/}
            <li id="alert_notificatoin_bar" className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="icon-bell-l" />
                <span className="badge bg-important">7</span>
                </a>
                <ul className="dropdown-menu extended notification">
                <div className="notify-arrow notify-arrow-blue" />
                <li>
                    <p className="blue">You have 4 new notifications</p>
                </li>
                <li>
                    <a href="#">
                    <span className="label label-primary"><i className="icon_profile" /></span>
                    Friend Request
                    <span className="small italic pull-right">5 mins</span>
                    </a>
                </li>
                <li>
                    <Link to='/'>
                    <span className="label label-warning"><i className="icon_pin" /></span>
                    John location.
                    <span className="small italic pull-right">50 mins</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                    <span className="label label-danger"><i className="icon_book_alt" /></span>
                    Project 3 Completed.
                    <span className="small italic pull-right">1 hr</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                    <span className="label label-success"><i className="icon_like" /></span>
                    Mick appreciated your work.
                    <span className="small italic pull-right"> Today</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>See all notifications</Link>
                </li>
                </ul>
            </li>
            {/* alert notification end*/}
            {/* user login dropdown start*/}
            <li className="dropdown">
                <Link to='#' data-toggle="dropdown" className="dropdown-toggle">
                <span className="profile-ava">
                <img src="img/profile.png" width="30px" height="30px"/>
                </span>
                <span className="username">{name}</span>
                <b className="caret" />
                </Link>
                <ul className="dropdown-menu extended logout">
                <div className="log-arrow-up" />
                <li className="eborder-top">
                    <Link to='/profile'><i className="icon_profile" /> My Profile</Link>
                </li>
                <li>
                    <Link to='/'><i className="icon_mail_alt" /> My Inbox</Link>
                </li>
                <li>
                    <Link to='/'><i className="icon_clock_alt" /> Timeline</Link>
                </li>
                <li>
                    <Link to='/'><i className="icon_chat_alt" /> Chats</Link>
                </li>
                <li onClick={handleLogout}>
                    <Link to='/'><i className="icon_key_alt" /> Log Out</Link>
                </li>
                <li>
                    <a href="documentation.html"><i className="icon_key_alt" /> Documentation</a>
                </li>
                <li>
                    <a href="documentation.html"><i className="icon_key_alt" /> Documentation</a>
                </li>
                </ul>
            </li>
            {/* user login dropdown end */}
            </ul>
            {/* notificatoin dropdown end*/}
           
        </div>

        
       
        </header>
         
    )
    
        }

 
}
 