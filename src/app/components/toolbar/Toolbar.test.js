import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Toolbar />, div);
    ReactDOM.unmountComponentAtNode(div);
});
