// From the ReactJS tutorial:
// https://reactjs.org/tutorial/tutorial.html

// React
import React from 'react'
import { render } from 'react-dom'

// Components
import Connection from './components/connection'
import Game from './components/game'

// Render
render(
  <div>
    <Connection />
    <Game />
  </div>,
  document.getElementById('app')
)
