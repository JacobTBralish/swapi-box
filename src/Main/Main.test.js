/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Main Component', () => {
  test('it should render without crashing', () => {
    const renderedComp = shallow(<Main />)

    expect(renderedComp).toMatchSnapshot()
  })
})