const express = require('express');
const voitureroute = require ('./routes/voitures')
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express();
const port = 3000;

dotenv.config()
const Mongodb_URI= process.env.Mongodb_URI
const PORT =process.env.port || 3000




app.use(express.json());
app.use('/voiture',voitureroute)
app.use(bodyParser.json());

//connection to mongodb and start server
mongoose.connect(Mongodb_URI).then(()=>{
  console.log('connected to Mongodb');

}).catch((err)=>{
  console.error('Erroe connecting to mongodb:',err.messag)
})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  