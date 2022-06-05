import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Event } from '../../../backend/src/db/types'

import TimelineList from './TimelineList'

import { TestData } from '../testdata'


test('to see if data passed is rendered on screen.', () => {

  render(<TimelineList events={TestData} />);

  var dateFormatted = new Date(TestData[0].timestamp).toLocaleString()


  expect(
  	screen.getByText(dateFormatted)
  ).toBeInTheDocument()


  var lengthOfItems = document.querySelectorAll('.timeline-item').length;
  expect(lengthOfItems).toBe(TestData.length)
  
});

test('to see if infinite scroll is working.', () => {

  TimelineList.BatchSize = 1
  render(<TimelineList events={TestData} />);

  const nextButton = screen.getByRole('button', {
    name: /load more/i
  })

  var lengthOfItems = document.querySelectorAll('.timeline-item').length;
  expect(lengthOfItems).toBe(TimelineList.BatchSize)

   fireEvent(
      nextButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
  )

  lengthOfItems = document.querySelectorAll('.timeline-item').length;
  expect(lengthOfItems).toBe(TestData.length)
  
});

