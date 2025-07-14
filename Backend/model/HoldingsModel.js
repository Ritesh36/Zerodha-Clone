const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingsSchema");

const HoldingModel = model("holding", HoldingSchema);

module.exports = { HoldingModel };