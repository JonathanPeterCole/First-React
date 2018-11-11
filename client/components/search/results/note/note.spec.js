import React from 'react'
import { shallow } from 'enzyme'

// Component
import Note from './note'

// Tests
it('Notes render correctly', () => {
  const wrapper = shallow(<Note title='Test Title' body='Test Body' />)
  expect(wrapper).toMatchSnapshot()
})
