const mongoose = require('mongoose');
const mathSchema = new mongoose.Schema({
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
    }
});
const math = mongoose.model('math', mathSchema);

module.exports = math;

