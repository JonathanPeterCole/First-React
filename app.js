#!/usr/bin/env node

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

// Routers
const indexRouter = require('./routes/index')

// Prepare express
const app = express()

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Processors
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', indexRouter)

// Export app
module.exports = app
