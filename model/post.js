const mongoose = require('mongoose')
const postSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, '使用者ID 未填寫']
        },
        content: {
            type: String,
            required: [true, 'Content 未填寫']
        },
        image: {
            type: String,
            default: ""
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            select: false
        },
        likes: {
            type: Number,
            default: 0
        }
    }, {
    versionKey: false
}
)

const Post = mongoose.model('Post', postSchema)
module.exports = Post
