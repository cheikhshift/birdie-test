import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import TableNav  from './TableNav'


test('to see if TableNav events are working', () => {
  
  var props = {
  	onPageSet :  jest.fn(),
  	onPageSizeSet :  jest.fn(),
    currentPage : 1,
    pages : 10
  }

  const tb = render(<TableNav {...props}/>);
  const dropDown = tb.getByLabelText('page-count')
  const nextButton = screen.getByRole('button', {
    name: /next/i
  })
  const prevButton = screen.getByLabelText("prev-button")
  let order = "1"

  fireEvent.change(dropDown, {target: {value: order}})
  expect(props.onPageSizeSet.mock.calls.length).toBe(1)
  

  fireEvent(
      nextButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
  )
   
  expect(props.onPageSet.mock.calls[0][0]).toBe(
    2
  );


  fireEvent(
      prevButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
  )


  expect(props.onPageSet.mock.calls.length).toBe(2)
  
  // Check if page number is displaying correctly
  expect(
    screen.getByText("2 / 10")
  ).toBeInTheDocument()

});

