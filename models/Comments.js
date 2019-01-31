const mongoose = require("../db/connection");

const Schema = mongoose.Schema;

// define a schema where the field-name is the key in the object passed in
// as an argument to mongoose.Schema, and the object values are the data type of that field

const Comment = new Schema({
  content: String
});

const Comment = mongoose.model("Comment", Comments);

//export the model
module.exports = Comment;
