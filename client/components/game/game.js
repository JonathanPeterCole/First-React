// React
import React from 'react'

// Components
import Board from './board'

// Style
import './style.css'

class Game extends React.Component {
  render () {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
      </div>
    )
  }
}

export default Game
