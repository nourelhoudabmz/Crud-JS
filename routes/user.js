const express = require("express")
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();

process.env.SECRET_KEY = 'secret'

router.post('/register', (req, res) => {

  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

})

router.post("/login", async (req, res)=>{
  try{
      const {username, password} = req.body;
      const user = await User.findOne({username});
      if(!user){
          return res.status(404).send("User not found");
      }

      const samePassword = await bcrypt.compare(password, user.password);
      if(!samePassword){
          return res.status(401).send("Invalid Password");
      }
      
      res.send(user);
  }catch (error) {
      res.status(400).send(error.message)
  }
})

module.exports = users