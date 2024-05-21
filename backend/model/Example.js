const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        requried: true,
    },
    detail: [String],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Example = mongoose.model('example', ExampleSchema)