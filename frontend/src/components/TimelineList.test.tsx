import React from 'react';
import { render, screen } from '@testing-library/react';

import { Event } from '../../../backend/src/db/types'

import TimelineList from './TimelineList'

import { TestData } from '../testdata'


test('to see if data passed is rendered on screen.', () => {

  render(<TimelineList events={TestData} />);

  var dateFormatted = new Date(TestData[0].timestamp).toLocaleString()


  expect(
  	screen.getByText(dateFormatted)
  ).toBeInTheDocument()

  expect(
  	screen.getByText( "Mood " + TestData[0].mood as string)
  ).toBeInTheDocument()


  var lengthOfItems = document.querySelectorAll('.timeline-item').length;
  expect(lengthOfItems).toBe(TestData.length)
  
});

