const router = require("express").Router();
const transactionRoutes = require("./transactions");

// Post routes
router.use(transactionRoutes);

module.exports = router;
