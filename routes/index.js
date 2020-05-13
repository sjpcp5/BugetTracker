const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use(apiRoutes);

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;