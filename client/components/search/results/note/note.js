// React
import React from 'react'
import PropTypes from 'prop-types'

// Style
import './style.css'

class Note extends React.Component {
  render () {
    return (
      <div className='note'>
        <div className='title'>{this.props.title}</div>
        <div className='body'>{this.props.body}</div>
      </div>
    )
  }
}

Note.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

export default Note
