const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const routes = require("./routes");
const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://jacki:password12@ds015730.mlab.com:15730/heroku_r2bgtg6w",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

// routes here
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
