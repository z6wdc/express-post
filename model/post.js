const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    post: {
        type: String,
        required: [true, 'post is empty']
    },
    image: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        required: [true, 'name is empty']
    },
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = postSchema
