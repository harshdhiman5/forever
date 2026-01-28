const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  category: String, // New field for product category
  type: String      // New field for product type
});

module.exports = mongoose.model('Product', productSchema);
