const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const SeqSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  seq: {
    type: Number,
    required: true
  }
});
module.exports = Seq = mongoose.model("seq", SeqSchema);
