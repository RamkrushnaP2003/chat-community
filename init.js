const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("connection success");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

Chat.insertMany([
  {
    from: "Adam",
    to: "Eve",
    msg: "Send me your exam sheet",
    created_at: new Date(),
  },
  {
    from: "Amit",
    to: "Sumit",
    msg: "teach me some JS callback",
    created_at: new Date(),
  },
  {
    from: "Ram",
    to: "Krushna",
    msg: "Best of you for Coding",
    created_at: new Date(),
  },
  {
    from: "Love",
    to: "Kush",
    msg: "Hi bro! How are you?",
    created_at: new Date(),
  },
  {
    from: "Raja",
    to: "Rani",
    msg: "Welcome to Dolakpur kingdom",
    created_at: new Date(),
  },
  {
    from: "Principle",
    to: "Teacher",
    msg: "Teach studens in better way the can understant ",
    created_at: new Date(),
  },
  {
    from: "Mr",
    to: "Mrs",
    msg: "Hi Mrs",
    created_at: new Date(),
  },
]);
