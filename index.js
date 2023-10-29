const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const port = 8080;
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

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

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("index.ejs", { chats });
});

//create new chat route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, msg, to } = req.body;
  let chat1 = new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date(),
  });
  console.log(chat1);
  chat1
    .save()
    .then((res) => {
      console.log("Chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

//Update route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

app.put("/chats/:id", async (req, res) => {
  let { msg } = req.body;
  let { id } = req.params;
  let update = await Chat.findByIdAndUpdate(
    id,
    { msg: msg },
    { runValidators: true, new: true }
  );
  console.log(update);
  res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let chatDel = await Chat.findByIdAndDelete(id);
  console.log(chatDel);
  res.redirect("/chats");
});

app.get("/", (req, res) => {
  res.send("root is work");
});

app.listen(port, () => {
  console.log(`App listening at post ${port}`);
});
