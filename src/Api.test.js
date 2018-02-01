import {fetchApi, getPeople, getPlanets, getVehicles } from './api'
import { mockPeople } from './mockData'


describe('fetchApi', () => {
  let url

  beforeAll(() => {
    url = 'https://swapi.co/api/people'
  })

  test('fetch is called with the correct params', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({
          people: mockPeople
        })
      })
    })

    fetchApi(url)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

})


// describe('getPeople', () => {
//   let mockPerson
//   let mockPeople
//   let url
//   let getMorePeopleData

//   beforeAll(() => {
//     getMorePeopleData = jest.fn()

//     mockPerson = {
//       Name: 'Luke Skywalker',
//       Homeworld: 'Tatooine',
//       Population: 200000,
//       Species: 'Human'
//     }

//     url = 'https://swapi.co/api/'

//     mockPeople = [
//       {Name: 'Luke Skywalker',
//       Homeworld: 'Tatooine',
//       Population: 200000,
//       Species: 'Human'},
//       {Name: 'C-3P0',
//       Homeworld: 'Tatooine',
//       Population: 200000,
//       Species: 'Droid'}
//     ]
//   })

//   test('fetch is called with the correct params', () => {
//     const expectedParams = url

//     window.fetch = jest.fn().mockImplementation(() => {
//       return Promise.resolve({
//         ok: true,
//         status: 200,
//         json: () => Promise.resolve({
//           people: mockPeople
//         })
//       })
//     })

//     getPeople()
//     expect(window.fetch).toHaveBeenCalledWith(expectedParams)

//   })
// })