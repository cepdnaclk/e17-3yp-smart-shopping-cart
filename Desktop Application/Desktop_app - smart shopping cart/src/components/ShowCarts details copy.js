import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation';
import Header from './Header';
import { hostAddress } from '../constant';
import QRCode from 'qrcode'

const API_URL = hostAddress;
export default function Basic_table() {
    useEffect(() => {
        cartRetrive();
    }, [])
    QRCode.toDataURL('I am a pony!')
        .then(url => {
            console.log(url)
        })
        .catch(err => {
            console.error(err)
        })

    // With async/await
    const generateQR = async text => {
        var opts = {
            errorCorrectionLevel: 'H',
            type: 'image/jpeg',
            quality: 1,
            margin: 2,
            color: {
                dark: "#000",
                light: "#fff"
            }
        }

        QRCode.toDataURL(text, opts, function (err, url) {
            if (err) throw err
            var showqr = document.getElementById('showqr');
            showqr.style.display="block";
            var img = document.getElementById('image')
            img.src = url
        })
    }

    const [Cart, setCart] = useState([])
    const cartRetrive = async () => {
        const cartData = await fetch(API_URL+"cart/cartDetails");
        const Cart = await cartData.json();
        setCart(Cart);
        console.log(Cart);
    }
    const deleteCart = async (id) => {
        var option = window.confirm("do you want delete the cart");
        if (option === true) {
            fetch(API_URL +"cart/delete/" + id, {
                method: 'DELETE',
            })
                .then(() => {
                    alert("cart removed")
                    window.location.reload();
                }) // or res.json()
                .catch((err) => {
                    console.log(err);
                })
        }
    }
    const addnewcart = async () => {
        if (document.getElementById("addcartinput").value === "") {
            alert("Enter cart name!");
            return;
        };
        var option = window.confirm("are you sure to add cart");
        if (option === true) {
            fetch(API_URL +"cart/addnewcart", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "cartName": document.getElementById("addcartinput").value })
            })
                .then(() => {
                    alert("cart Added")
                    window.location.reload();
                }) // or res.json()
                .catch((err) => {
                    console.log(err);
                })
        }
    }
    return (
        // <section>
        //     {
        //         <div>{Cart.name}</div>
        //     }
        // </section>
        <>
            <Navigation />
            <Header />

            <section id="main-content">
                <section className="wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="page-header"><i className="fa fa-table" /> Carts</h3>
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
                                <div id="showqr">
                                <img id="image" width="80%"src="" alt="" /><br />
                                    <button className="btn btn-danger" onClick={() =>document.getElementById("showqr").style.display="none" }><i className="icon_close_alt2" /> close</button>

                                </div>
                                <button style={{ padding: '10px', margin: '10px', backgroundColor: '#007aff', color: 'white' }} type="button" onClick={() => document.getElementById('addgroup').style.display = 'block'}>Add New cart</button>
                                <div id="addgroup" style={{ display: 'none' }}>
                                    <input style={{ padding: '10px', margin: '10px' }} placeholder="Enter the cart Name" required id="addcartinput" />
                                    <input style={{ padding: '10px', margin: '10px', backgroundColor: '#007aff', color: 'white' }} type="button" value="submit" onClick={() => addnewcart()} />
                                </div>
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
                                                            <button className="btn btn-primary" href="#" onClick={() => generateQR(singleCart._id)}><i className="icon_plus_alt2" /> QR</button>
                                                            {/* <a className="btn btn-success" href="#"><i className="icon_check_alt2" /></a> */}
                                                            <button className="btn btn-danger" onClick={() => deleteCart(singleCart._id)}><i className="icon_close_alt2" /> Delete</button>
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
        </>
    );
}
