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
    console.log("Before each being called----------------------------------------------")
    fetchMock
        .mock('https://www.reddit.com/r/funny.json', mockJson);
    div = document.createElement('div');
    app = shallow(<App />, div);
});

afterEach(() => {
    fetchMock.restore();
})

it('renders without crashing', () => {
    div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('retrieves json payload', () => {

    // app.node._self.loadJson()
    //     .then(() => {
    //         expect(fetchMock.done()).toBeTruthy();
    //         expect(app.state.response).toBe(mockJson);
    //         console.log(app.state.response);
    //
    //     })

});

it('testing to see if carousel is present', () => {
    let carousel = app.find(Carousel.name);
    expect(carousel.props().posts).toHaveLength(1);

});


