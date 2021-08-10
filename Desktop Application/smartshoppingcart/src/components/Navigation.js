import React from 'react'

export default function Navigation() {
    return (
        <div>
        {/*sidebar start*/}
            <aside>
            <div id="sidebar" className="nav-collapse ">
            {/* sidebar menu start*/}
            <ul className="sidebar-menu">
                <li className="active">
                <a className href="index.html">
                    <i className="icon_house_alt" />
                    <span>Dashboard</span>
                </a>
                </li>
                <li className="sub-menu">
                <a href="javascript:;" className>
                    <i className="icon_document_alt" />
                    <span>Forms</span>
                    <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                    <li><a className href="form_component.html">Form Elements</a></li>
                    <li><a className href="form_validation.html">Form Validation</a></li>
                </ul>
                </li>
                <li className="sub-menu">
                <a href="javascript:;" className>
                    <i className="icon_desktop" />
                    <span>UI Fitures</span>
                    <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                    <li><a className href="general.html">Elements</a></li>
                    <li><a className href="buttons.html">Buttons</a></li>
                    <li><a className href="grids.html">Grids</a></li>
                </ul>
                </li>
                <li>
                <a className href="widgets.html">
                    <i className="icon_genius" />
                    <span>Widgets</span>
                </a>
                </li>
                <li>
                <a className href="chart-chartjs.html">
                    <i className="icon_piechart" />
                    <span>Charts</span>
                </a>
                </li>
                <li className="sub-menu">
                <a href="javascript:;" className>
                    <i className="icon_table" />
                    <span>Tables</span>
                    <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                    <li><a className href="basic_table.html">Basic Table</a></li>
                </ul>
                </li>
                <li className="sub-menu">
                <a href="javascript:;" className>
                    <i className="icon_documents_alt" />
                    <span>Pages</span>
                    <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                    <li><a className href="profile.html">Profile</a></li>
                    <li><a className href="login.html"><span>Login Page</span></a></li>
                    <li><a className href="contact.html"><span>Contact Page</span></a></li>
                    <li><a className href="blank.html">Blank Page</a></li>
                    <li><a className href="404.html">404 Error</a></li>
                </ul>
                </li>
            </ul>
            {/* sidebar menu end*/}
            </div>
        </aside>
        {/*sidebar end*/}
        </div>
    )
}
