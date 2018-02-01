import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { mockFilm } from '../mockData'

jest.mock('../api')


describe( 'App Component', () => {
  let url 
  let getScroll

  beforeAll(() => {
    url = 'https://swapi.co/api/films/1'

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({
          scroll: mockFilm
        })
      })
    })

    getScroll = jest.fn().mockImplementation( async () => {
      const scroll = await window.fetch(url)
      return scroll;
    })
  })

  test('renders without crashing', async () => {
    const renderedComp = await shallow(<App />);
    await renderedComp.update()

    console.log(renderedComp.state())

    expect(renderedComp.state('scroll')).toEqual({})
  });
});