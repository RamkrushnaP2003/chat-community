const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    requier: true,
  },
  to: {
    type: String,
    requier: true,
  },
  msg: {
    type: String,
    maxLength: 100,
  },
  created_at: {
    type: Date,
    requier: true,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;