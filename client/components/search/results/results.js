// React
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Note from './note/note'

// Style
import './style.css'

class Results extends React.Component {
  render () {
    return (
      <div className='results'>
        {this.props.items.map(note => (
          <Note title={note.title} body={note.body} />
        ))}
      </div>
    )
  }
}

Results.propTypes = {
  items: PropTypes.array
}

export default Results
