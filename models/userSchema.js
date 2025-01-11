const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  telephone: String,
  age: Number,
  country: String,
  gender: String,
  createDate:{ type: Date, default: Date.now },
  writeDate:{ type: Date, default: Date.now }
},{timestamps:true});


// Create a model based on that schema
const User = mongoose.model("User", userSchema);


// export the model
module.exports = User;