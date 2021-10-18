import React from 'react'
import {Link} from 'react-router-dom'
export default function Navigation() {
    return (
        <div>
        {/*sidebar start*/}
            <aside>
            <div id="sidebar" className="nav-collapse ">
            {/* sidebar menu start*/}
            <ul className="sidebar-menu">
                <li className="active">
                <Link to='/'>
                    <i className="icon_house_alt" />
                    <span>Dashboard</span>
                </Link>
                </li>
                <li className="sub-menu">
                <Link >
                    <i className="icon_document_alt" />
                    <span>Forms</span>
                    <span className="menu-arrow arrow_carrot-right" />
                </Link>
                <ul className="sub">
                    <li><Link className to="form_component">Form Elements</Link></li>
                    <li><Link className to="form_validation">Form Validation</Link></li>
                </ul>
                </li>
                <li className="sub-menu">
                <Link className>
                    <i className="icon_desktop" />
                    <span>UI Fitures</span>
                    <span className="menu-arrow arrow_carrot-right" />
                </Link>
                <ul className="sub">
                    <li><Link className to="buttons">Buttons</Link></li>
                    <li><Link className to="general">Elements</Link></li>
                    <li><Link className to="grids">Grids</Link></li>
                </ul>
                </li>
                <li>
                <Link className to="widgets">
                    <i className="icon_genius" />
                    <span>Widgets</span>
                </Link>
                </li>
                <li>
                <Link className to="chart">
                    <i className="icon_piechart" />
                    <span>Charts</span>
                </Link>
                </li>
                <li className="sub-menu">
                <Link className>
                    <i className="icon_table" />
                    <span>Tables</span>
                    <span className="menu-arrow arrow_carrot-right" />
                </Link>
                <ul className="sub">
                    <li><Link className to="basic_table">Basic Table</Link></li>
                </ul>
                </li>
                <li className="sub-menu">
                <Link className>
                    <i className="icon_documents_alt" />
                    <span>Pages</span>
                    <span className="menu-arrow arrow_carrot-right" />
                </Link>
                <ul className="sub">
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/login'><span>Login Page</span></Link></li>
                    <li><Link to='/Signup'><span>Signup Page</span></Link></li>
                    <li><Link to='/contact'><span>Contact Page</span></Link></li>
                    <li><Link to='/blank'>Blank Page</Link></li>
                    <li><Link to='/page404'>404 Error</Link></li>
                </ul>
                </li>
                <li>
                            <Link to="./showcarts">
                                <i class="icon_cart_alt"></i>

                                <span>Carts</span>
                            </Link>
                </li>
            </ul>
            {/* sidebar menu end*/}
            </div>
        </aside>
        {/*sidebar end*/}
        </div>
    )
}
