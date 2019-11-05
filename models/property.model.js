const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PropertySchema = Schema({
  description: String,
  slug: String,
  type: String,
  currency: String,
  price: String,
  featured: Boolean,
  photo: String,
  sector: String
});

const propertyModel = mongoose.model('properties', PropertySchema);

module.exports = propertyModel;
