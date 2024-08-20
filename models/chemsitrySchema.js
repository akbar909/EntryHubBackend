const mongoose = require('mongoose');
const chemsitrySchema = new mongoose.Schema({
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
const chemistry = mongoose.model('chemistry', chemsitrySchema);

module.exports = chemistry;

