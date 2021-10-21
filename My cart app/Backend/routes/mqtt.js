// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
var awsIot = require('aws-iot-device-sdk');
const itemModel = require('../models/ItemModel');
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
function mqtt(id) {

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
            device.subscribe('cart/' + id);
            device.publish('topic_2', JSON.stringify({ test_data_kavi: 1 }));
        });

    device
        .on('message', async function (topic, payload) {
            console.log('message', topic, JSON.parse(payload.toString())
            );
            console.log('pppppp');

            let data = JSON.parse(payload.toString());
            console.log(data);
            if ('itemId' in data) {
                const found = await itemModel.findById(data.itemId);

                device.publish("cart/weight", JSON.stringify({ itemId: data.itemId, weight: found.weight }));
            }
            if ('state' in data) {

            }
        });


}
module.exports = mqtt;