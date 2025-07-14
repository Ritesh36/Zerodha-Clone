const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PostionsSchema");

const PositionsModel = model("position", PositionsSchema);

module.exports = { PositionsModel };


