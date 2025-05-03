const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialty: String, // Keep it as specialty
  clinic: String,
  location: String,
  experience: Number,
  consultationFee: Number,
  consultationType: String,
  availability: String,
  Online: String,
  cashback: Number,
  rating: Number,
  image: String,
});

module.exports = mongoose.model('Doctor', doctorSchema);
