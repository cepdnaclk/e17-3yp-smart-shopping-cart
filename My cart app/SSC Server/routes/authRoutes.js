/* eslint-disable prettier/prettier */
const express = require('express');
const SignUps =require('../models/SignUp');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/',(req,res)=>{
    res.send('hello every one');
});

// get all user details
router.get('/getusers', async(req, res) => {
    try{
        const userDetails = await SignUps.find();
        res.json(userDetails);
    }catch{
        res.send(err=>{{message:err}});
    }
});


// create new users
router.post('/signup', async (req, res) => {
    // console.log(req.body);
    // res.send(
    //     req.body.firstName+req.body.lastName+req.body.email+req.body.password
    // );

    // generate salt to hash password
    const saltPassword = await bcrypt.genSalt(10)  //salting
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)
    // console.log(securePassword);
    let signup = new SignUps({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password : securePassword
    });

    res.send(signup);


    signup.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json(err=>{message:err});
        });
    
});

// login section
router.post('/login', async (req, res) => {
    // res.send(req.params.postId);

    try {
        const user = await SignUps.findOne({ email: req.body.email });

        // console.log(req.body.password);
        // console.log(user.password);

        const validPassword = await bcrypt.compare(req.body.password,user.password);
        if (validPassword) {
            res.status(200).json({ message: "Valid password" });
        } else {
            res.status(400).json({ error: "Invalid Password" });
        }
    } catch {
        (err) => {
            console.log({ message: err });
        }
    };
})

// get user through id

router.get('/getusers/:postId', async(req,res)=>{
    // res.send(req.params.postId);
    try{
        const user = await SignUps.findById(req.params.postId);
        res.send(user);
    }catch{(err)=>{
        console.log({message:err});
    }};
})

// check the mail available or not

router.post('/havemail', async (req, res) => {
    // res.send(req.params.postId);
    const emailreq=req.body.email;
    console.log(req.body.email);
    try {
        const user = await SignUps.findOne({ email: emailreq});
        
        // console.log("user");
        res.json(user == null ? { status: false } : { status: true });
    } catch {
        (err) => {
            console.log({ message: err });
            // console.log("user");

            res.json({ status: false })
        }
    };
})

// delete post using id

router.delete('/:postID', async(req,res)=>{
    try {
        await SignUps.remove({_id:req.params.postID});
    } catch (error) {
        res.send({message:err});
    }
})

//  update post

router.patch('/:postId',async(req,res)=>{
    try {
        const updatePost = await SignUps.updateOne({_id:req.params.postId},{$set:{firstName:req.body.firstName,lastName:req.body.lastName}});
        res.send(updatePost);
    } catch (error) {
        res.send({message:error});
    }
})

module.exports = router;
