import React from 'react';
import { render, screen } from '@testing-library/react';

import { TestData } from '../testdata'
import TimelineItem from './TimelineItem'


test('to see if TimelineItem will render correctly', () => {

  render(<TimelineItem {...TestData[0]}/>);

  var dateFormatted = new Date(TestData[0].timestamp).toLocaleString()

  expect(
  	screen.getByText(dateFormatted)
  ).toBeInTheDocument()

  expect(
  	screen.getByText( "mood_observation " + TestData[0].mood as string)
  ).toBeInTheDocument()

  
});

