// React
import React from 'react'

// Components
import SearchBar from './searchbar/searchbar'
import Results from './results/results'

// Search
import getResults from './repo/repo'

// Style
import './style.css'

class Search extends React.Component {
  constructor (props) {
    super(props)

    // Set the initial state
    this.state = {
      results: getResults('')
    }

    // Bindings
    this.searchChanged = this.searchChanged.bind(this)
  }

  searchChanged (event) {
    this.setState({ results: getResults(event.target.value) })
  }

  render () {
    return (
      <div className='search'>
        <SearchBar textChanged={this.searchChanged} />
        <Results items={this.state.results} />
      </div>
    )
  }
}

export default Search
