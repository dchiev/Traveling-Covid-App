const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postsSchema = new Schema({
  country: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
const Posts = mongoose.model("Posts", postsSchema);

module.exports = Posts;
