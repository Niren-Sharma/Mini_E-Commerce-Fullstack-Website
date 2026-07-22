const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

router.get("/",async(req,res)=>{
    try{
        const orders = await Order.find();
        res.json(orders);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});
router.post("/",async(req,res)=>{
    try{
        const order = new Order(req.body);
        const saveOrder = await order.save()
        res.status(201).json(saveOrder);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

module.exports = router;
