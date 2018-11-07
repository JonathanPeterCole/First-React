#!/usr/bin/env node

const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const path = require('path')
const cookieParser = require('cookie-parser')

// Routers
const indexRouter = require('./routes/index')

// Prepare express
const app = express()
const server = http.Server(app)
const io = socketio(server)

// Store the client count
let clientCount = 0

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Processors
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

// Routes
app.use('/', indexRouter)

// Socket IO
io.on('connection', (socket) => {
  // Store the client numer and increase the client count
  let clientNumber = clientCount
  clientCount++

  // Log the connection
  console.log('Client ' + clientNumber.toString() + ' connected')

  // Send the client number
  socket.emit('clientNumber', clientNumber.toString())

  // Send a random number every 5 seconds
  let interval = setInterval(() => {
    // Prepare a random number
    let random = Math.random()
    // Log the number
    console.log('Sending ' + random.toString() + ' to client ' + clientNumber.toString())
    // Send the random number
    socket.emit('dataUpdate', random)
  }, 5000)

  // Log disconnection and clear the interval
  socket.on('disconnect', () => {
    console.log('Client ' + clientNumber.toString() + ' disconnected')
    clearInterval(interval)
  })
})

// Listen
server.listen(3000)
server.on('listening', () => console.log('Example app listening on port 3000'))
server.on('error', (error) => {
  // Check if the error was a listening error
  if (error.syscall !== 'listen') {
    throw error
  }
  // Handle common error codes
  switch (error.code) {
    case 'EACCES':
      console.error('Port 3000 requires elevated privileges')
      process.exit(1)
    case 'EADDRINUSE':
      console.error('Port 3000 is already in use')
      process.exit(1)
    default:
      throw error
  }
})
