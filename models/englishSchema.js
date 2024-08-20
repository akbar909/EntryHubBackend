const mongoose = require('mongoose');

const englishSchema = new mongoose.Schema({
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

const Question = mongoose.model('Question', englishSchema);

module.exports = Question;
