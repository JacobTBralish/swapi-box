import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import * as api from '../api'
import { mockPeople, mockVehicles, mockPlanets, cleanPeopleMock, cleanPlanetsMock, cleanVehiclesMock } from '../mockData'

describe('CardContainer Component', () => {
  beforeAll(() => {


    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({
          scroll: mockPeople
        })
      })
    })
   api.getPeople = () => api.getMorePeopleData(mockPeople)
   api.getMorePeopleData = () => (cleanPeopleMock)
   api.getPlanets = () => api.getMorePlanetData(mockPlanets)
   api.getMorePlanetData = () => (cleanPlanetsMock)
   api.getVehicles = () => (mockVehicles)
  })


  test('that it renders without crashing', () => {
    const renderedComp = shallow(<CardContainer name='people' fetch={api.getPeople} />)

    expect(renderedComp).toMatchSnapshot()
  })

  test('that it should update state when it gets mounted', () => {
    const renderedComp = shallow(<CardContainer name='people' fetch={api.getPeople} />)

    expect(renderedComp.state('people')).toEqual(cleanPeopleMock)
  })

  test('that local storage gets set upon mounting', () => {
    const renderedComp = shallow(<CardContainer name='people' fetch={api.getPeople} />)

    expect(localStorage.__STORE__.length).toBe(1);
  })

  test('that local storage gets set with the new props on component updating', async () => {
    const renderedComp = shallow(<CardContainer name='people' fetch={api.getPeople} />)

    await renderedComp.setProps({ name: 'planets', fetch: api.getPlanets });
    renderedComp.update()

    expect(localStorage.__STORE__.length).toBe(2)
  })

  test('that state updates when new props get passed down', async () => {
    const renderedComp = shallow(<CardContainer name='people' fetch={api.getPeople} />)

    await renderedComp.setProps({ name: 'planets', fetch: api.getPlanets });
    renderedComp.update()

    expect(renderedComp.state('planets')).toEqual(cleanPlanetsMock)
  })

  test('that the cards render accordingly when state changes/new props are received', async () => {
    const renderedComp = shallow(<CardContainer name='people' fetch={api.getPeople} />)
    expect(renderedComp).toMatchSnapshot()

    await renderedComp.setProps({ name: 'planets', fetch: api.getPlanets });
    renderedComp.update()
    expect(renderedComp).toMatchSnapshot()

  })

  test('that if new props are passed twice, local storage should have 3 key/value pairs', async () => {
    const renderedComp = shallow(<CardContainer name='people' fetch={api.getPeople} />)

    await renderedComp.setProps({ name: 'planets', fetch: api.getPlanets });
    renderedComp.update()

    await renderedComp.setProps({ name: 'vehicles', fetch: api.getVehicles });
    renderedComp.update()

    expect(localStorage.__STORE__.length).toBe(3)
  })

})