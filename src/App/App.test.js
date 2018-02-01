import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { mockFilm } from '../mockData'

import * as api from '../api'

describe( 'App Component', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({
          scroll: mockFilm 
        })
      })
    })
   api.getScroll = () => (mockFilm)
  })

  test('componentDidMount should set the proper state', async () => {
    const expectedState = mockFilm
    const renderedComp = await shallow(<App />);

    await renderedComp.update()

    expect(renderedComp.state('scroll')).toEqual(mockFilm)
  });
});