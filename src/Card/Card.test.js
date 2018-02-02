import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './Card';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Card Component', () => {
  test('that it renders without crashing', () => {
    const renderedComp = shallow(<Card />)

    expect(renderedComp).toMatchSnapshot()
  })

  test('that it should receive and render props', () => {
    const renderedComp = shallow(<Card name="Luke Skywalker" />)

    expect(renderedComp).toMatchSnapshot()
  })
})