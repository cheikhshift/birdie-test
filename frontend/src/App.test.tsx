import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from './App';

test('button toggle at app component', () => {

  const app = render(<App />);
  

  // get a hold of the button element, and trigger some clicks on it
  const button = document.querySelector("#toggleButton");
  expect(button.innerHTML).toBe("View as table");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(button.innerHTML).toBe("View as timeline");

  act(() => {
    for (let i = 0; i < 5; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  expect(button.innerHTML).toBe("View as table");
});
