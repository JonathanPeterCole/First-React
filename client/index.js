// From the ReactJS tutorial:
// https://reactjs.org/tutorial/tutorial.html

// React
import React from 'react'
import { render } from 'react-dom'

// Components
import Game from './components/game'

// Socket IO
import io from 'socket.io-client'

// Log the connection to the server
const socket = io()
socket.on('connect', () => {
  // Log the connection
  console.log('Connected to server')
})

// Render
render(
  <Game />,
  document.getElementById('app')
)
