import React from 'react';
import ReactDOM from 'react-dom';
import Stores from './stores';

describe('Stores', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render( <Stores /> , div);
        ReactDOM.unmountComponentAtNode(div);
    })
});