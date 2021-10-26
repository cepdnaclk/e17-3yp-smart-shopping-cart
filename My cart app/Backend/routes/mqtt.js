// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
var awsIot = require("aws-iot-device-sdk");
const itemModel = require("../models/ItemModel");
const UserModel = require("../models/UserModel");
const CartModel = require('../models/CartModel');

// var aws = require('aws-sdk');
// aws.config.update({
//     region: 'us-east-1',
// });

// var iotdata = new aws.IotData({
//     endpoint: 'a25thj60akgd3r-ats.iot.us-east-1.amazonaws.com',
//     accessKeyId: 'ASIAROWJE2OBE3IFAB6',
//     secretAccessKey: 'qeDwO9Wo50skEbOaRWHoG7bUEIKCsAa7pfNG9kJk',

//  })

//     const params = {
//         thingName: 'shadow-test1'
//     };

//     iotdata.getThingShadow(params, function (err, data) {
//         if (err) {
//             console.log(err, err.stack);

//         }
//         else {
//             console.log(data);

//         }
//     });

//
// Replace the values of '<YourUniqueClientIdentifier>' and '<YourCustomEndpoint>'
// with a unique client identifier and custom host endpoint provided in AWS IoT.
// NOTE: client identifiers must be unique within your AWS account; if a client attempts
// to connect with a client identifier which is already in use, the existing
// connection will be terminated.
//

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
function mqtt(userid) {

  var device = awsIot.thingShadow({//device({
    keyPath: './private.pem.key',
    certPath: './certificate.pem.crt',
    caPath: './AmazonRootCA1.pem',
    clientId: 'cart-admin',
    host: 'a25thj60akgd3r-ats.iot.us-east-1.amazonaws.com',

  });
  device
    .on('connect', function () {
      console.log('connect');
      device.subscribe('cart/add/+');
      device.subscribe('cart/remove/+');

      device.subscribe('cart/updatecount/+');

      device.subscribe('cart/newitem/+');

      device.publish('topic_2', JSON.stringify({ test_data_kavi: 1 }));
    });

  device
    .on('message', async function (topic, payload) {
      console.log('message', topic, JSON.parse(payload.toString())
      );
      const topic_array = topic.split('/');
      console.log(topic_array)
      const state = topic_array[1];
      const cartid = topic_array[2];
      let data = JSON.parse(payload.toString());
      console.log(data);



      if (state === 'newitem') {

        const found = await itemModel.findOne({ barcodeid: data.barcodeid });
        device.publish("cart/weight/" + cartid, JSON.stringify({ userId: id, itemId: found._id, weight: found.weight, canDirectlyAdd: found.directadd }));
      }

      if (state === 'add') {
        console.log('add', data.userid);

        const newValues = { 'current_update.itemlist': { item: data.itemid, count: data.count } }

        try {

          const x = await UserModel.updateOne({ _id: data.userid }, { $addToSet: newValues });


        } catch (error) {
          console.log(error);
        }

        //console.log(x, found, userid);
      }

      if (state === 'remove') {
        console.log('remove', data.userid);

        const newValues = { 'current_update.itemlist': { item: data.itemid } }

        const x = await UserModel.updateOne({ _id: data.userid }, { $pull: newValues });

        console.log(x);
      }

      if (state === 'updatecount') {


        const newValues = { 'current_update.itemlist.$.count': data.count }

        const x = await UserModel.updateOne({ _id: data.userid, 'current_update.itemlist.item': data.itemid }, { $set: newValues });

        console.log(x);
      }

    });


}
module.exports = mqtt;

// {
//   "state": "add",
//   "userid" :"6171715f8356e033f113e7e8", 
//   "itemid": "6177ea336cc7fd77a01bc6e6", 616dfaf4372bba97e070ecf1
//   "count" : 1
//   }

// {
//     "barcodeeid" : "................",
//     "cardid" :"......"
// }
