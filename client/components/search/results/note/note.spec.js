import React from 'react'
import { shallow } from 'enzyme'

// Component
import Note from './note'

// Tests
it('Notes render correctly', () => {
  // Render a note with some test data and compare it to a Snapshot
  const wrapper = shallow(<Note title='Test Title' body='Test Body' />)
  expect(wrapper).toMatchSnapshot()
})
