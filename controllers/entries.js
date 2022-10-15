const Entries = require("../models/Entries");

module.exports = {
  getEntries: async (req, res) => {
    console.log(req.user);
    const skip = parseInt(req.query.skip || '0') <=0 ? 0 : parseInt(req.query.skip);
    console.log(req.query.mood)
    const limit = req.query.limit || 4;
    try {
      const entryItems = await Entries.aggregate([
        {
          '$facet': {
            'data': [
              {
                '$match': { userId: req.user.id } //, mood: req.query.mood
              }, {
                '$skip': skip
              }, {
                '$limit': limit
              }
            ], 
            'count': [
              {
                '$count': 'count'
              }
            ]
          }
        }
      ]);
      console.log({entryItems})
      console.log(entryItems[0].count)
      const totalEntries = entryItems[0].count[0].count;
      res.render("dashboard.ejs", {
        entryItems: entryItems[0].data,
        user: req.user,
        skip,
        totalEntries
      });
    } catch (err) {
      console.log(err);
    }
  },
  createEntry: async (req, res) => {
    try {
      await Entries.create({
        entry: req.body.entry,
        date: req.body.date,
        title: req.body.title,
        mood: req.body.mood,
        userId: req.user.id,
      });
      console.log("Entry has been added!");
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
  deleteEntry: async (req, res) => {
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
