// From the ReactJS tutorial:
// https://reactjs.org/tutorial/tutorial.html

// React
import React from 'react'
import { render } from 'react-dom'

// Components
import Game from './components/game'

// Render
render(
  <Game />,
  document.getElementById('app')
)
