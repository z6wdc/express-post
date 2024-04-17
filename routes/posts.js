const express = require('express')
const Post = require('../model/post')
const router = express.Router()

const handleSuccess = function(data) {
    return {
        'status': true,
        'data': data
    }
}

router.get('/', async function (req, res, next) {
    const posts = await Post.find()
    res.send(handleSuccess(posts))
})

router.post('/', async function (req, res, next) {
    const b = req.body
    const newPost = await Post.create(b)
    res.send(handleSuccess(newPost))
})

module.exports = router
