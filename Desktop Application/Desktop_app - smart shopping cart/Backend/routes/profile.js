const express = require('express');
const router = express.Router();

const expressFileUpload = require('express-fileupload');

const bcrypt = require('bcryptjs');     //ENCRYPT

const jwt = require('jsonwebtoken');

const employeeModel = require('../models/EmployeeModel');

const verifyToken = require('./verifyToken');
const { isJwtExpired } = require('jwt-check-expiration');

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
//const uuid = require('uuid/v4')


router.use(expressFileUpload())

router.get('/', async (req, res) => {
    const found = await employeeModel.findById(req.user);

    return res.send({ name: found.name, email: found.email }).status(200);
});


router.put('/updatePassword', async (req, res) => {

    //CHECK USER FROM COLLECTION  
    const found = await employeeModel.findById(req.user);
    //console.log(found, 'req', found.password);

    //CHECK PASSWORD IS CORRECT 
    const valid = await bcrypt.compare(req.body.currentpassword, found.password);
    if (!valid) return res.send({ message: 'Your current password is wrong' }).status(401);

    //findidandupadate won't work as expected 

    //HASH PASSWORDS -> GENERATE SALT
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.newpassword, salt);

    //UPDATE PASSWORD
    found.password = hashedPassword;
    await found.save();

    //AGAIN CREATE NEW JWT WITH NEW PASSWORD
    // const token = jwt.sign({ _id: found._id }, process.env.token_secret, { expiresIn: 86400 });//60});  //expires in 24 hrs
    // res.header('auth_token', token).send(token) 
    res.send({ 'success': true }).status(200);
});

router.put('/update', async (req, res) => {       //GET ALL ITEMS

    console.log('update', req.body);
    //CHECK USER FROM COLLECTION
    const found = await employeeModel.findById(req.user);
    //console.log(found, 'req', found.password);


    const newValues = {}
    if (req.body.name)
        newValues.name = req.body.name;

    if (req.body.email)
        newValues.email = req.body.email;

    if (req.body.address)
        newValues.address = req.body.address;

    if (req.body.nic)
        newValues.nic = req.body.nic;

    if (req.body.phoneno)
        newValues.phoneno = req.body.phoneno;


    console.log(newValues);

    try {

        await employeeModel.updateMany({ _id: found._id }, { $set: newValues });
        res.send({ success: true }).status(200);
    } catch (error) {
        console.log(error);
        res.send({ message: error });
    }
});

router.get('/get', async (req, res) => {

    const user = await employeeModel.findById(req.user);

    const profile = { name: user.name, address: user.address, nic: user.nic, phoneno: user.phoneno, email: user.email, roles: user.responsibilities }

    res.send(profile).status(200);
});




const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_BUCKET_REGION
})

const upload = (bucketName) =>
    multer({
        storage: multerS3({
            s3,
            bucket: bucketName,
            metadata: function (req, file, cb) {
                cb(null, { fieldName: file.fieldname })
            },
            key: function (req, file, cb) {
                cb(null, 'image.jpg')

            }
        })
    })

router.post('/uploadImage', async (req, res) => {
    console.log(req.files);


    const uploadSingle = upload('smart-shopping-cart-image').single('cropped-image');
    uploadSingle(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(400).send({ success: false, message: err.message });
        }
        console.log(req);

        res.status(200).send({ data: req.file });
    })
});

// const s3 = new aws.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_KEY
// })

// const storage = multer.memoryStorage({
//     destination: function(req, file, callback) {
//         callback(null, '')
//     }
// })

// const upload = multer({storage}).single('croped-image')

// router.post('/uploadImage',upload,(req, res) => {

//     let myFile = req.file.originalname.split(".")
//     const fileType = myFile[myFile.length - 1]

//     const params = {
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: `${uuid()}.${fileType}`,
//         Body: req.file.buffer
//     }

//     s3.upload(params, (error, data) => {
//         if(error){
//             res.status(500).send(error)
//         }

//         res.status(200).send(data)
//     })
// })

module.exports = router;
