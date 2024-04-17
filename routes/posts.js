const express = require('express')
const Post = require('../model/post')
const router = express.Router()

router.get('/',async function(req,res,next){
    const posts = await Post.find()
    res.send({
        'status': true,
        'data': posts
    })
})

module.exports = router
