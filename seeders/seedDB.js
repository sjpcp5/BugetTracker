var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://jacki:password12@ds015730.mlab.com:15730/heroku_r2bgtg6w",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

var budgetSeed = [
  {
    name: "Income",
    value: 5000,
    date: new Date().setDate(new Date().getDate() - 10),
  },
  {
    name: "Mortgage",
    value: -1000,
    date: new Date().setDate(new Date().getDate() - 10),
  },
  {
    name: "Groceries",
    value: -200,
    date: new Date().setDate(new Date().getDate() - 10),
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
