// From the ReactJS tutorial:
// https://reactjs.org/tutorial/tutorial.html

// React
import React from 'react'
import { render } from 'react-dom'

// Components
import Connection from './components/connection/connection'
import Search from './components/search/search'

// Digital Style
import './style.css'

// Render
render(
  <div className='page'>
    <Connection />
    <div className='container'>
      <Search />
    </div>
  </div>,
  document.getElementById('app')
)
