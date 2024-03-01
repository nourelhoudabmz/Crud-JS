const mongoose =require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new moongose.Schema({
    username:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    }
})
// Méthode pour hasher le mot de passe avant de sauvegarder l'utilisateur
userSchema.pre('save', async (next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(`${this.password}`, salt);
        return next();
      } catch (err) {
        return next(err);
      }
})
const User =  mongoose.model('User', userSchema)
module.exports = User;