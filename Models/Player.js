const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  gamesPlayed: {
    type: Number,
    required: true,
  },
  wins: {
    type: Number,
    required: true,
  },
  losses: {
    type: Number,
    required: true,
  },
  draws: {
    type: Number,
    required: true,
  },
});

module.exports = Player = mongoose.model("player", PlayerSchema);
