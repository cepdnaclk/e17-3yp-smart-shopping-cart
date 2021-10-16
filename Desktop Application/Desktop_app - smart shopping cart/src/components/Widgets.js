import React from 'react'

export default function Widgets() {
    return (
    <section id="main-content">
    <section className="wrapper">
        <div className="row">
        <div className="col-lg-12">
            <h3 className="page-header"><i className="icon_genius" /> Widgets</h3>
            <ol className="breadcrumb">
            <li><i className="fa fa-home" /><a href="index.html">Home</a></li>
            <li><i className="icon_genius" />Widgets</li>
            </ol></div>
        </div>
        <div className="row">
        <div className="col-lg-4">
            <section className="panel">
            <header className="panel-heading">
                Basic items
            </header>
            <ul className="list-group">
                <li className="list-group-item">Lorem ipsum dolor sit amet</li>
                <li className="list-group-item">Praesent tempus eleifend risus</li>
                <li className="list-group-item">Praesent tempus eleifend risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            </section>
        </div>
        <div className="col-lg-4">
            <section className="panel">
            <header className="panel-heading">
                Linked items
            </header>
            <div className="list-group">
                <a className="list-group-item " href="#">
                Lorem ipsum dolor sit amet
                </a>
                <a className="list-group-item active" href="javascript:;">Praesent tempus eleifend risus</a>
                <a className="list-group-item" href="javascript:;">Praesent tempus eleifend risus</a>
                <a className="list-group-item" href="javascript:;">Porta ac consectetur ac</a>
                <a className="list-group-item" href="javascript:;">Vestibulum at eros</a>
                <a className="list-group-item" href="javascript:;">Vestibulum at eros</a>
            </div>
            </section>
        </div>
        <div className="col-lg-4">
            <section className="panel">
            <header className="panel-heading">
                Custom content
            </header>
            <div className="list-group">
                <a className="list-group-item " href="javascript:;">
                <h4 className="list-group-item-heading">List group item heading</h4>
                <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                </a>
                <a className="list-group-item active" href="javascript:;">
                <h4 className="list-group-item-heading">List group item heading</h4>
                <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                </a>
                <a className="list-group-item" href="javascript:;">
                <h4 className="list-group-item-heading">List group item heading</h4>
                <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                </a>
            </div>
            </section>
        </div>
        </div>
        {/* page end*/}
    </section>
    </section>

    )
}
