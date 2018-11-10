import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Component
import Search from './search'

// Configure Enzyme
configure({ adapter: new Adapter() })

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
