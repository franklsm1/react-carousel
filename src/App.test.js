import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import mockJson from "../public/funny.json";
import fetchMock from 'fetch-mock';
import Carousel from './carousel';

let app;
let div;

beforeEach(() => {
    fetchMock
        .mock('https://www.reddit.com/r/funny.json', mockJson);
    div = document.createElement('div');
    app = shallow(<App />, div);
});

afterEach(() => {
    fetchMock.restore();
});

it('renders without crashing', () => {
    div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('retrieves json payload and creates a carousel', () => {
    app.node._self.componentWillMount()
        .then(() => {
            expect(fetchMock.done()).toBeTruthy();
            expect(app.state().posts[0]).toBe(mockJson.data.children[0]);

            let carousel = app.find(Carousel.name);
            expect(carousel.props().posts).toHaveLength(3);
        })
        .catch(error => {
          console.log(error);
        });
});
