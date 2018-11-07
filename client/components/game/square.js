import React from 'react'
import PropTypes from 'prop-types'

function Square (props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

Square.propTypes = {
  onClick: PropTypes.function,
  value: PropTypes.string
}

export default Square
