import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";

import { TestData } from './TimelineList.test'
import TableList from './TableList'


test('to see if TableList will render correctly', () => {

  render(<TableList events={TestData}/>);

  var dateFormatted = new Date(TestData[0].timestamp).toLocaleString()

  expect(
  	screen.getByText(dateFormatted)
  ).toBeInTheDocument()

  expect(
  	screen.getByText(TestData[0].mood as string)
  ).toBeInTheDocument()

  
});
