// From the ReactJS tutorial:
// https://reactjs.org/tutorial/tutorial.html

// React
import React from 'react'
import { render } from 'react-dom'

// Components
import Connection from './components/connection/connection'
import Game from './components/game/game'

// Digital Style
import './style.css'

// Render
render(
  <div className='container'>
    <Connection />
    <Game />
  </div>,
  document.getElementById('app')
)
