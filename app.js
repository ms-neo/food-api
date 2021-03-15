require('dotenv').config()
const express = require("express");
const cors =require('cors');
const connectDB =require('./config/db.js')
const app = express();
// initialize middleware
app.use(cors())
app.use(express.json())

//set mongoose connection
connectDB()

//set routes
const main = require('./routes/api/main.js');
app.use('/api/main', main);


//listen to port
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`the server is now working on port ${port}`);
})