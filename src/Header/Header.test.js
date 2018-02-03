import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Header Component', () => {
  test('that it should mount with crashing', () => {
    const renderedComp = shallow(<Header />)

    expect(renderedComp).toMatchSnapshot()
  })

  test('that it should contain a navLink to the home page', () => {
    const renderedComp = shallow(<Header />)

    expect(renderedComp.find('NavLink').first().props().to).toEqual('/')
  })

  test('that it should contain 5 NavLinks', () => {
    const renderedComp = shallow(<Header />)

    expect(renderedComp.find('NavLink').length).toEqual(5)
  })
})