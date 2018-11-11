import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

// Component
import Search from './search'

// Tests
it('Search renders without crashing', () => {
  // Attempt to render the results component
  const div = document.createElement('div')
  ReactDOM.render(<Search />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Search components renders the searchbar', () => {
  // Render the search component and check that the searchbar exists
  const wrapper = shallow(<Search />)
  expect(wrapper.find('searchbar')).toBeDefined()
})
