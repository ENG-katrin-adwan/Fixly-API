const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { 
    type: String, required: true 
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  duration: {
    type: Number,
    required: true, 
},
 isAvailable: {
    type: Boolean,
    required: true,
  }
});
const Service = mongoose.model("Service", serviceSchema);

module.exports = Service