import React from 'react';
import Carousel from './carousel';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import mockJson from "../public/funny.json";
import fetchMock from 'fetch-mock';

let app, div;
describe('Carousel tests', () => {
  it('renders without crashing', () => {
      div = document.createElement('div');
      ReactDOM.render(<Carousel posts={mockJson.data.children} index={0}/>, div);
  });

  it('carousel has correct data after render', () => {
      div = document.createElement('div');
      let index = 1;
      let carousel = shallow(<Carousel posts={mockJson.data.children} index={index}/>, div);
      let author = carousel.find('#carouselDiv .author');
      let score = carousel.find('#carouselDiv .score');

      expect(author.text()).toBe(mockJson.data.children[index].data.author)
      expect(Number(score.text())).toBe(mockJson.data.children[index].data.score)

  })
});
