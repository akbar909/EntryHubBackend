const mongoose = require('mongoose');
const physicsSchema = new mongoose.Schema({
    questionText: {
        type : String,
        required : true,
    },
    options: {
        type : [String],
        required : true,
    },
    correctOption: {
        type : Number,
        required : true,
    }
});
const physics = mongoose.model('physics', physicsSchema);

    module.exports = physics;

