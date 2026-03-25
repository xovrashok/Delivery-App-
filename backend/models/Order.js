const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userName: String,
  email: String,
  phone: String,
  address: String,
  items: Array,
  totalPrice: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
