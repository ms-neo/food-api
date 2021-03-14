const mongoose =require('mongoose');

const ProducstSchema =mongoose.Schema({
    dishName:String,
    image:String,
    calories:Number,
    amount:Number,
    price:Number
})

module.exports=mongoose.model("Products",ProducstSchema)