
const mongoose = require('mongoose')

const kodeBlogSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true,
    trim: true
  },
  author: {
    type: String,
    minlength: 3,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  readingTime: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('kodeBlog', kodeBlogSchema)
