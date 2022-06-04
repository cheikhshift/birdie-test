import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { Event } from '../../../backend/src/db/types'

import TimelineList from './TimelineList'

export const TestData : Event[] =   [{  
	 "id":"decaa026-2ce5-49cb-aff9-92326b85a98c",
	 "event_type":"mood_observation",
	 "visit_id":"39b94aab-cc35-4874-807f-c23472aec663",
	 "timestamp":"2019-04-23T10:53:13+01:00",
	 "caregiver_id":"4786d616-259e-4d52-80f7-8cf7dc6d881a",
	 "care_recipient_id":"03f3306d-a4a3-4179-ab88-81af66df8b7c",
	 "mood":"okay",
},{  
   "id":"decaa026-2ce5-49cb-aff9-92326b85ac",
   "event_type":"mood_observation",
   "visit_id":"39b94aab-cc35-4874-807f-c23472aec663",
   "timestamp":"2019-05-23T10:53:13+01:00",
   "caregiver_id":"4786d616-259e-4d52-80f7-8cf7dc6d881a",
   "care_recipient_id":"03f3306d-a4a3-4179-ab88-81af66df8b7c",
   "mood":"bad",
}]


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

