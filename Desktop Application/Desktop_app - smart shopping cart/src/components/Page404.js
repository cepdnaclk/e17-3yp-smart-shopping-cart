import React from 'react'
import {Link} from 'react-router-dom'

export default function Page404() {
    return (
    <div>
        {/*main content start*/}
        <section id="main-content">
            <section className="wrapper">
            <div className="row">
                <div className="page-404">
                    <p className="text-404">404</p>
                    <h2>Aww Snap!</h2>
                    <p>Something went wrong or that page doesn’t exist yet. <br /><Link to="/">Return Home</Link></p>
                </div>
            </div>
            </section>
        </section>
    </div>

    )
}
