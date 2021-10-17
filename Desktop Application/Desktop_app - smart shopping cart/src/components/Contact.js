import React from 'react'
import {Link} from 'react-router-dom'

export default function Contact() {
    return (
    <div>
    {/*main content start*/}
    <section id="main-content">
        <section className="wrapper">
        <div className="row">
            <div className="col-lg-12">
            <h3 className="page-header"><i className="fa fa fa-bars" /> Pages</h3>
            <ol className="breadcrumb">
                <li><i className="fa fa-home" /><Link to='/'>Home</Link></li>
                <li><i className="fa fa-bars" />Pages</li>
                <li><i className="fa fa-square-o" />Pages</li>
            </ol>
            </div>
        </div>
        {/* page start*/}
        <div className="row">
            <div className="col-lg-6">
            <div className="recent">
                <h3>Send us a message</h3>
            </div>
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage" />
            <form action method="post" role="form" className="contactForm">
                <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validation" />
                </div>
                <div className="form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validation" />
                </div>
                <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validation" />
                </div>
                <div className="form-group">
                <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                <div className="validation" />
                </div>
                <div className="text-center"><button type="submit" className="btn btn-primary btn-lg">Send Message</button></div>
            </form>
            </div>
            <div className="col-lg-6">
            <div className="recent">
                <h3>Get in touch with us</h3>
            </div>
            <div className>
                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.</p>
                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.</p>
                <h4>Address:</h4>Little Lonsdale St, New York<br />
                <h4>Telephone:</h4>345 578 59 45 416<br />
                <h4>Fax:</h4>123 456 789
            </div>
            </div>
        </div>
        {/* page end*/}
        </section>
    </section>
    {/*main content end*/}
    </div>

    )
}
