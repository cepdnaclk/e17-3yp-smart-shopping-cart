const express = require('express');

const route = express.Router(); 

const verifyToken = require('./verifyToken');

const itemCol = require('../models/ItemModel');  

route.get('/all',async(req, res) =>{       //GET ALL ITEMS
    try {
       const itemlist = await itemCol.find();
     
       res.send(itemlist); 
    } catch (error) { 
        res.send({message:error});
    }
});


route.post('/add',async(req, res) =>{       //GET ALL ITEMS
   const newItem = new itemCol({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock,
       
    });
    try {
        console.log('new Item saving');
        const saveuser = await newItem.save();  //SAVE USER

        
        //console .log('herrrrrrre mail');
        //res.send({user:saveuser._id});     //WITHOUT SENDING WHOLE (PASSWORD SENSITIVE) 'USER: .....'
        res.send({ success:true }).status(200);
        
    } catch (err) {
        console.log(err);
        res.send(err).status(400);
    }
});
 
route.delete('/delete/:id',async(req, res) =>{       //GET ALL ITEMS
console.log(req.params.id);
const Id = req.params.id;
    try {
       await itemCol.deleteOne({_id: Id});
     
       res.send({success:true}).status(200); 
    } catch (error) { 
        console.log(error);
        res.send({message:error});
    }
});

route.put('/update/:id',async(req, res) =>{       //GET ALL ITEMS

const Id = req.params.id; 
const newValues={}
    if(req.body.name)
        newValues.name = req.body.name;
        
    if(req.body.price)
        newValues.price = req.body.price;

    if(req.body.category)
        newValues. category = req.body.category;

    if(req.body.stock)
        newValues.stock = req.body.stock;

    console.log(newValues, Id);

    try {
      
    await itemCol.updateMany({_id: Id}, {$set: newValues});
       res.send({success:true}).status(200); 
    } catch (error) { 
        console.log(error);
        res.send({message:error});
    }
});


module.exports = route; 