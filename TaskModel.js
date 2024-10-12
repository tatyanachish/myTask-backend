const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: { 
        type: Date
    },
    })

module.exports = mongoose.model('MyTask',taskSchema)