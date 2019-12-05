const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    complete: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = Todo = mongoose.model('todo', TodoSchema);
