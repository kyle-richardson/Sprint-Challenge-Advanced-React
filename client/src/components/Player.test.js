import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Player player={{
      player: {
          name: 'testName',
          country: 'testCountry',
          id: 100,
          searches: 50
      }}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
