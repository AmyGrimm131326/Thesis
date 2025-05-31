const mongoose = require('mongoose');

const {Schema} = mongoose;

const OrderSchema = new Schema({
  userEmail:{
    type: String,
    required: true
  },
  firstName:{
    type:String,
    required: true
  },
 lastName:{
    type:String,
    required: true
  },
  cardNum:{
    type: String,
    required: false
  },
  cvc:{
    type: Number,
    required: false
  },
  cart:{
    type: Array,
    required: true
  },
  total:{
    type: Number,
    required: true
  },
  complete:{
    type: Boolean,
    default: false
  },
 });
 
 module.exports = mongoose.model('orders', OrderSchema);