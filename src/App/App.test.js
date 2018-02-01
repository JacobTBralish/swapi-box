import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import api from '../api'
jest.mock(api)

describe( 'App Component', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({
          scroll: {
              "title": "A New Hope",
              "episode_id": 4,
              "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
              "release_date": "1977-05-25"
          }
        })
      })
    })
   _api.getScroll = () => ({scroll: 'whytho'})
  })

  test('renders without crashing', async () => {
    const renderedComp = await shallow(<App />);
    debugger;
    await renderedComp.update()
    console.log(renderedComp.state())
  });
});