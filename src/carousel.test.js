/**
 * Created by localadmin on 3/28/17.
 */
import React from 'react';
import Carousel from './carousel';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import mockJson from "../public/funny.json";
import fetchMock from 'fetch-mock';

let app, div;
it('renders without crashing', () => {
    div = document.createElement('div');
    ReactDOM.render(<Carousel posts={mockJson.data.children}/>, div);
});