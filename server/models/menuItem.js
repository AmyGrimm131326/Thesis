const mongoose = require('mongoose');

const { Schema } = mongoose;

const MenuItem = new Schema({
  img: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  flavors: {
    type: Array,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('menu-item', MenuItem);