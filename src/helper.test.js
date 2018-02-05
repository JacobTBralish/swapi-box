/* eslint-disable */

import { addFavoriteProp, makeNewState } from './helper'

describe('favorite helper functions', () => {
  test('that addFavoriteProp takes in an object and returns that object with a style property of favorite', () => {
    const mockCard = { name: 'Luke Skywalker' }
    const expectedCard = {...mockCard, style:'favorite'}

    const newCard = addFavoriteProp(mockCard)

    expect(newCard).toEqual(expectedCard)
  })

  test('that makeNewState returns a new state array, adding a favorite prop to the found item', () => {
    const mockState = [
    {Homeworld: "Tatooine",
     Name: "Luke Skywalker",
     Population: "200000",
     Species: "Human"}]

    const expectedState = [
    {Homeworld: "Tatooine",
     Name: "Luke Skywalker",
     Population: "200000",
     Species: "Human",
     style: 'favorite'}]
    const e1 = {target: {id: 'Luke Skywalker'} }
    const newState = makeNewState(mockState, e1)

    expect(newState).toEqual(expectedState)
  })
})