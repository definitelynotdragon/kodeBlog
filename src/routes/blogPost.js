
const express = require('express')
const post = require('../usecases/blogPost')
const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const posts = await post.getAll()
    response.json({
      succes: true,
      message: 'All posts',
      data: {
        posts
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      succes: false,
      message: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newPost = await post.create(request.body)
    response.json({
      succes: true,
      message: 'Post created',
      data: {
        Post: newPost
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      succes: false,
      message: error.message
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postFound = await post.getById(id)
    response.json({
      succes: true,
      message: 'Post found',
      data: {
        post: postFound
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      succes: false,
      message: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params.id
    const postDeleted = await post.deleteById(id)
    response.json({
      succes: true,
      message: 'Post deleted',
      data: {
        post: postDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      succes: false,
      message: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params.id
    const postUpdated = await post.updateById(id, request.body)
    response.json({
      succes: true,
      message: 'Post updated',
      data: {
        post: postUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      succes: false,
      message: error.message
    })
  }
})

module.exports = router
