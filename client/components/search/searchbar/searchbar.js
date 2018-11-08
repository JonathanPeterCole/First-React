// React
import React from 'react'
import PropTypes from 'prop-types'

// Style
import './style.css'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    // Bindings
    this.textChanged = this.textChanged.bind(this)
  }

  textChanged (event) {
    this.props.textChanged(event)
  }

  render () {
    return (
      <input className='searchbar' type='text' placeholder='Search' onChange={this.textChanged} />
    )
  }
}

SearchBar.propTypes = {
  textChanged: PropTypes.func
}

export default SearchBar
