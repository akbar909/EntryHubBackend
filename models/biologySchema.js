const mongoose = require('mongoose');

const biologySchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctOption: {
    type: Number,
    required: true,
  },
});

const BiologyModel = mongoose.model('Biology', biologySchema);

module.exports = BiologyModel;
