/* global it */
import React from 'react'
import ReactDOM from 'react-dom'
import data from '../data.json'
import App from './index.js'
import { processTimestamp } from './children/postFooter/helpers.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App data={data} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('returns "X days ago" when the date is less than 1 week from today', () => {
  // Get the current date in seconds
  const currentDateInSeconds = Math.floor(Date.now() / 1000);

  // Create a timestamp that is 3 days ago
  const threeDaysAgoTimestamp = currentDateInSeconds - 3 * 24 * 60 * 60;

  const result = processTimestamp({ taken_at_timestamp: threeDaysAgoTimestamp });
  expect(result).toEqual('3 DAYS AGO');
});
