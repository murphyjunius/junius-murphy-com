import React from 'react';
import { render } from '@testing-library/react';
import {screen} from '@testing-library/dom';
import App from './App';

test('Includes Nav bar', () => {
	render(<App />);
	screen.getByTestId("navigation-bar")
});
