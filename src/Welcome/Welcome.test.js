/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { mockFilm } from '../mockData'

describe('Welcome component', () => {

  test('that it renders without crashing', () => {
    
    const renderedComp = shallow(<Welcome scroll={mockFilm}/>)

    expect(renderedComp).toMatchSnapshot()
  })
})