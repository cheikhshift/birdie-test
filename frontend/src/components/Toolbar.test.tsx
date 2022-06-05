import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';


import { TestData } from "../testdata"
import Toolbar  from './Toolbar'


test('to see if toolbar events are working', () => {
  
  var props = {
  	onQueryChange :  jest.fn(),
  	onSortOrderChange :  jest.fn(),
  }

  const tb = render(<Toolbar {...props}/>);
  const input = tb.getByLabelText('query-field')
  const dropDown = tb.getByLabelText('sort-field')

  const qryString = "query"
  const order = "-1"

  fireEvent.change(input, {target: {value: qryString}})
  fireEvent.change(dropDown, {target: {value: order}})

  expect(props.onQueryChange.mock.calls.length).toBe(1)
  expect(props.onSortOrderChange.mock.calls.length).toBe(1)
  
  // Check to see if events were called with the correct 
  // arguments
  expect(props.onQueryChange.mock.calls[0][0]).toBe(qryString);
  expect(props.onSortOrderChange.mock.calls[0][0]).toBe(order);
  
});

test('to see if filter method is working correctly', () => {
  
 	const result = Toolbar.filterItems(TestData, "", -1)
 	expect(result[0].mood).toBe("bad")

 	const resultWithFilterText = Toolbar.filterItems(TestData, "okay", -1)
 	expect(resultWithFilterText[0].mood).toBe("okay")
 	expect(resultWithFilterText.length).toBe(1)
  
});

