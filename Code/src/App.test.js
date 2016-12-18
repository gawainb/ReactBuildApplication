import React from 'react';
import ReactDOM from 'react-dom';
import App from './MainInterface';
import BuildList from './BuildList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
