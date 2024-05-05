const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '請輸入您的名字']
    },
    email: {
        type: String,
        required: [true, '請輸入您的email']
    },
    photo: {
        type: String
    }
}, {
    versionKey: false
});

const User = mongoose.model('User', userSchema);
module.exports = User;
