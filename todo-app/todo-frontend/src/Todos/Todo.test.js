import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
/*   const Todo = {
    text: 'testiteksti',
    done: true
  } */

  render(<Todo text={'testiteksti'} done={true} />)
  const element = screen.getByText('testiteksti')
  expect(element).toBeDefined()
})