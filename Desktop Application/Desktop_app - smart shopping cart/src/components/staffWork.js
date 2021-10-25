import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation';
import Header from './Header';
import { hostAddress } from '../constant';
import QRCode from 'qrcode'
import itemServices from '../services/item-service';
// import JsBarcode from 'jsbarcode'
var JsBarcode = require('jsbarcode');

const API_URL = hostAddress;
export default function Basic_table() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        itemServices.getItem()
            .then(res => {
                // console.log(res.data)
                //console.log(res);

                setItems(res.data)
                
                // console.log(res.data, 'stet')


            })

            .catch(err => { console.log(err) });
        
    }, [])




    const [Cart, setCart] = useState([])
    
    const setitemdropdown = async () => {
        var dropdown=document.getElementById("items");
        console.log(items);
        for (var i = 0; i < items.length; i++) {
            var opt = document.createElement('option');
            opt.value = items[i]._id;
            opt.innerHTML = items[i].name;
            dropdown.appendChild(opt);
        }
        // console.log(Cart);
    }
    const barcodeGen = async ()=>{
        var barcodeId=Math.floor(Math.random() * 1000000000);
        var showqr = document.getElementById('showqr');
        showqr.style.display = "block";
        var img = document.getElementById('image')
        JsBarcode(img, barcodeId);
        // QRCode.toDataURL(text, opts, function (err, url) {
        //     if (err) throw err

        //     var img = document.getElementById('image')
        //     img.src = url
        // })
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
                            <h3 className="page-header"><i className="fa fa-table" /> help customers</h3>
                            <ol className="breadcrumb">
                                <li><i className="fa fa-home" /><Link to="/">Home</Link></li>
                                <li><i className="fa fa-table" />shopping</li>
                                <li><i className="fa fa-th-list" />Add product</li>
                            </ol>
                        </div>
                    </div>
                    {/* page start*/}
                    <div className="row">
                        <div className="col-lg-12">
                            <section className="panel">
                                <header className="panel-heading">
                                    select product
                                </header>
                                <div id="showqr">
                                    <div id="imageqr">
                                        <img id="image" width="80%" src="" alt="" /><br />
                                    </div>
                                    <button className="btn btn-danger" onClick={() => { document.getElementById("showqr").style.display = "none" }}><i className="icon_close_alt2" /> close</button>

                                </div>
                                <button style={{ padding: '10px', width: '40px', margin: '10px', backgroundColor: '#007aff', color: 'white', paddingLeft: "10px", paddingRight: "10px", }} type="button" onClick={() => { document.getElementById('addgroup').style.display = 'block'; setitemdropdown();}} >  sell  </button>
                                <div id="addgroup" style={{ display: 'none' }}>
                                    <section >
                                        {/* <div class='form-group has-error'>
                                            <p className="control-label ">faild</p>
                                        </div> */}
                                        
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th >Name</th>
                                                        <th >Price</th>
                                                        <th>quantity</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <td>
                                                        <select name="items" id="items" style={{ width: "-webkit-fill-available"}}>
                                                            
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <input type="text" name="price" className="form-control " />
                                                    </td>
                                                    <td><input type="text" name="quantity" className="form-control " /></td>
                                                    
                                                </tbody>
                                                <tfoot>
                                                    <tr><td colSpan="4">
                                                        <button ontype="button" className="btn btn-primary text-center" onClick={()=>{barcodeGen()}}>Add  <i className="fa fa-plus-circle" aria-hidden="true"></i></button>

                                                    </td></tr>
                                                </tfoot>
                                            </table>

                                        
                                    </section>
                                </div>
                            </section>
                        </div>
                    </div>
                    {/* page end*/}
                </section>
            </section>
        </>
    );
}
