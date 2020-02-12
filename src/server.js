
const express = require('express')

const kodeBlogRouter = require('./routes/blogPost')

const app = express()

app.use(express.json())

app.use('/kodeBlog', kodeBlogRouter)

module.exports = app
