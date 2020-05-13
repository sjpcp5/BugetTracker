var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user:password@ds015730.mlab.com:15730/heroku_r2bgtg6w",
  {
    useNewUrlParser: true,
  }
);

var budgetSeed = [
  {
    name: "Income",
    value: 5000,
    date: 05 / 02 / 2020,
  },
  {
    name: "Mortgage",
    value: 1000,
    date: 05 / 06 / 2020,
  },
  {
    name: "Groceries",
    value: 200,
    date: 05 / 05 / 2020,
  },
];

db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(budgetSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
