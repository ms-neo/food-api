const express = require("express");

const mongoose = require('mongoose')
const cors =require('cors')
const app = express();
// initialize middleware
app.use(cors())
app.use(express.json())

//set mongoose connection
mongoose.connect("mongodb://neo:neo123@aravegfood-shard-00-00.lw15l.mongodb.net:27017,aravegfood-shard-00-01.lw15l.mongodb.net:27017,aravegfood-shard-00-02.lw15l.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-z2ftpn-shard-0&authSource=admin&retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () =>
    console.log('connect to mongoDB'))

//set routes
const main = require('./routes/api/main.js');
app.use('/api/main', main);


//listen to port
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`the server is now working on port ${port}`);
})