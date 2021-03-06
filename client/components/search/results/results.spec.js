import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

// Component
import Results from './results'

// Prepare variable for test data
let testData

// Before tests
beforeAll(() => {
  testData = [
    {
      'title': 'Test Title 1',
      'body': 'Test Body 1'
    },
    {
      'title': 'Test Title 1',
      'body': 'Test Body 1'
    },
    {
      'title': 'Test Title 1',
      'body': 'Test Body 1'
    }
  ]
})

// Tests
it('Results renders without crashing', () => {
  // Attempt to render the results component
  const div = document.createElement('div')
  ReactDOM.render(<Results items={testData} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Results renders test notes', () => {
  // Render the results component with some test data and check that it contains three notes
  const wrapper = mount(<Results items={testData} />)
  expect(wrapper.find('Note')).toHaveLength(3)
})
