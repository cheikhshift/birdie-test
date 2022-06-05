import React from 'react';
import { render, screen } from '@testing-library/react';

import { TestData } from './TimelineList.test'
import TimelineItem from './TimelineItem'


test('to see if TimelineItem will render correctly', () => {

  render(<TimelineItem {...TestData[0]}/>);

  var dateFormatted = new Date(TestData[0].timestamp).toLocaleString()

  expect(
  	screen.getByText(dateFormatted)
  ).toBeInTheDocument()

  expect(
  	screen.getByText( "Mood " + TestData[0].mood as string)
  ).toBeInTheDocument()

  
});

