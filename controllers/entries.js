const Entries = require("../models/Entries");

module.exports = {
  getEntries: async (req, res) => {
    console.log(req.user);
    try {
      const entryItems = await Entries.find({ userId: req.user.id });
      const itemsLeft = await Entries.countDocuments({
        userId: req.user.id,
        completed: false,
      });
      res.render("dashboard.ejs", {
        Entries: entryItems,
        left: itemsLeft,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createEntry: async (req, res) => {
    try {
      await Entries.create({
        todo: req.body.todoItem,
        completed: false,
        userId: req.user.id,
      });
      console.log("Todo has been added!");
      res.redirect("/todos");
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};