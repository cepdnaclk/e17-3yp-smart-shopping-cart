import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function Basic_table() {
    useEffect(() => {
        cartRetrive();
    }, [])
    
    const [Cart, setCart] = useState([])
    const cartRetrive=async()=>{
        const cartData = await fetch("/cartDetails");
        const Cart= await cartData.json();
        setCart(Cart);
        console.log(Cart);
    }
    const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
    ];
    return (
        // <section>
        //     {
        //         <div>{Cart.name}</div>
        //     }
        // </section>
    
        <section id="main-content">
            <section className="wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="page-header"><i className="fa fa-table" /> Table</h3>
                        <ol className="breadcrumb">
                            <li><i className="fa fa-home" /><Link to="/">Home</Link></li>
                            <li><i className="fa fa-table" />Carts</li>
                            <li><i className="fa fa-th-list" />current Status</li>
                        </ol>
                    </div>
                </div>
                {/* page start*/}
                <div className="row">
                    <div className="col-lg-12">
                        <section className="panel">
                            <header className="panel-heading">
                                Cart Details
                            </header>
                            <table className="table table-striped table-advance table-hover">
                                <tbody>
                                    <tr>
                                        <th><i className="icon_profile" /> ID</th>
                                        <th><i className="icon_calendar" /> Date</th>
                                        <th><i className="icon_mail_alt" /> Name</th>
                                        <th><i className="icon_pin_alt" /> Status</th>
                                        <th><i className="icon_mobile" /> user</th>
                                        <th><i className="icon_cogs" /> Action</th>
                                    </tr>
                                    
                                    {
                                        Cart.map(singleCart => (
                                            <tr>
                                                <td>{singleCart._id}</td>
                                                <td>{singleCart.date}</td>
                                                <td>{singleCart.name}</td>
                                                <td>{singleCart.status}</td>
                                                <td>{singleCart.user}</td>
                                                <td>
                                                    <div className="btn-group">
                                                        <a className="btn btn-primary" href="#"><i className="icon_plus_alt2" /></a>
                                                        <a className="btn btn-success" href="#"><i className="icon_check_alt2" /></a>
                                                        <a className="btn btn-danger" href="#"><i className="icon_close_alt2" /></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>
                {/* page end*/}
            </section>
        </section>
    );
}
