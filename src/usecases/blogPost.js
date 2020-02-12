
const Post = require('../models/blogPost')

function create ({ title, author, date, readingTime, image }) {
  const newPost = new Post({ title, author, date, readingTime, image })
  return newPost.save()
}

function deleteById (id) {
  return Post.findByIdAndDelete(id)
}

function getAll () {
  return Post.find({})
}

function getById (id) {
  return Post.findById(id)
}

function updateById (id, PostToUpdate) {
  return Post.findByIdAndUpdate(id, PostToUpdate)
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById
}
