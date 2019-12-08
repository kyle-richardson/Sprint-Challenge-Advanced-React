import React from 'react';
import ReactDOM from 'react-dom';
import PlayerList from './PlayerList';

it('renders without crashing', () => {
  const testPlayerList = [
    {
        name: 'testName1',
        country: 'testCountry1',
        id: 40,
        searches: 62
    },
    {
        name: 'testName2',
        country: 'testCountry2',
        id: 45,
        searches: 97
    }
  ]
  const div = document.createElement('div');
  ReactDOM.render(<PlayerList playerList = {testPlayerList}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
