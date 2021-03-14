const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
// get products
const Product = require('../../models/products')

router.get('/',async(req, res) => {
    try {
        const p = await Product.find()
        res.json(p)
    } catch (error) {
        res.json(console.log(error))
    }
  

});

router.post('/', async (req, res) => {

    const product = new Product({
        dishName: req.body.dishName,
        image: req.body.image,
        calories: req.body.calories,
        amount: req.body.amount,
        price: req.body.price
    })

        const p = await product.save();
        res.json(p)
        console.log(p)

});

module.exports = router