const express = require('express')
const Post = require('../model/post')
const User = require('../model/user')
const router = express.Router()

const handleSuccess = function (data) {
    return {
        'status': true,
        'data': data
    }
}

const handleError = function (message) {
    return {
        'status': false,
        'message': message
    }
}

router.get('/', async function (req, res, next) {
    try {
        const posts = await Post.find().populate('user')
        res.send(handleSuccess(posts))
    } catch (error) {
        res.send(handleError(error))
    }
})

router.post('/', async function (req, res, next) {
    const b = req.body
    try {
        b.content = b.content.trim()
        const newPost = await Post.create(b)
        res.send(handleSuccess(newPost))
    } catch (error) {
        res.send(handleError(error))
    }
})

router.delete('/', async function (req, res, next) {
    try {
        await Post.deleteMany()
            .then(result => {
                res.send(handleSuccess(result.deletedCount))
            })
            .catch(error => {
                res.send(handleError(error))
            })
    } catch (error) {
        res.send(handleError(error))
    }
})

router.delete('/:id', async function (req, res, next) {
    const id = req.params.id
    try {
        await Post.findByIdAndDelete(id)
            .then(deleted => {
                if (deleted != null) {
                    res.send(handleSuccess(deleted))
                } else {
                    res.send(handleError('無此ID'))
                }
            })
            .catch(error => {
                res.send(handleError(error))
            })
    } catch (error) {
        res.send(handleError(error))
    }
})

router.patch('/:id', async function (req, res, next) {
    const b = req.body
    const id = req.params.id
    if (b.content !== undefined) {
        b.content = b.content.trim()
    }
    try {
        await Post.findByIdAndUpdate(id, b, { new: true, runValidators: true })
            .then(updated => {
                if (updated != null) {
                    res.send(handleSuccess(updated))
                } else {
                    res.send(handleError('無此ID'))
                }
            })
            .catch(error => {
                res.send(handleError(error))
            })
    } catch (error) {
        res.send(handleError(error))
    }
})

module.exports = router
