import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

// Component
import Search from './search'

// Tests
it('Search renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Search />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Search components renders the searchbar', () => {
  const wrapper = shallow(<Search />)
  expect(wrapper.find('search')).toBeDefined()
})
