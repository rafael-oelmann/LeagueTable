const express = require("express");
const router = express.Router();

// @route   GET api/players
// @desc    list of players
// @access  Public
router.get("/", (req, res) => res.send("Players route"));

module.exports = router;
