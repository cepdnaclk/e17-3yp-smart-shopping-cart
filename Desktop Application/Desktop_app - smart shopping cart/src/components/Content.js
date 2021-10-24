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
            <h3 className="page-header"><i className="fa fa-laptop" /> Welcome to Smart Shopping Cart</h3>
            <ol className="breadcrumb">
                <li><i className="fa fa-home" /><a href="index.html">SSC</a></li>
                <li><i className="fa fa-laptop" />KRP shopping mall</li>
            </ol>
            </div>
                            <img src="https://static.turbosquid.com/Preview/2020/09/09__10_23_16/CaperSmartShoppingCartwithGoodsvray3dmodel001.jpg624B0EE0-E9D4-4600-B415-9C1486094DCCLarge.jpg" width="100%" height="650px" alt="" srcset=""/>
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
            Designed by <a href="/">KRPRockers</a>
        </div>
        </div>
    </section>
    {/*main content end*/}

    </>
    </div>

    )
}

