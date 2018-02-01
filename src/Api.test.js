import {fetchApi, getPeople, getPlanets, getVehicles } from './api'
import { mockPeople } from './mockData'

describe('api', () => {
  let url

  beforeAll(() => {
    url = 'https://swapi.co/api'
  })

  describe('fetchApi', () => {

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

    test('that it throws an error when status is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
          status: 404,
        })
      })

      expect(fetchApi(url)).rejects.toEqual(Error('Error retrieving sick Star Wars Data'))
    })

    test('that it returns an object when status is okay', () => {
       window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve({
            people: mockPeople
          })
        })
      })

      expect(fetchApi(url)).resolves.toEqual({ people: mockPeople })
    })
  })

  describe('getPeople', () => {
    test('that it returns an array of cleaned people objects where the deeper endpoints are undefined (tested in other functions)', async () => {
      const expectedPeople = [
      { Name: "Luke Skywalker",
        Homeworld: undefined,
        Population: undefined,
        Species: undefined }
      ]

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve({
            results: mockPeople
          })
        })
      })
      const cleanedPeople = await getPeople()

      expect(cleanedPeople).toEqual(expectedPeople)
    })

    test('that it calls fetchApi with the correct parameters', () => {
      const cleanedPeople = getPeople()
      const expectedUrl = 'https://swapi.co/api/people'

      expect(window.fetch).toHaveBeenCalledWith(expectedUrl)
    })

    
  })
})

