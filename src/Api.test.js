import { fetchApi, getScroll, getPeople, getPlanets, getVehicles, getFilmNum } from './api'
import { 
  mockPeople, 
  mockPlanets, 
  mockVehicles, 
  mockFilm, 
  cleanPlanetsMock, 
  cleanPeopleMock,
  cleanVehiclesMock 
} from './mockData'

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
    test('that it returns an array of cleaned people objects where the deeper endpoints are undefined', async () => {

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

      expect(cleanedPeople).toEqual(cleanPeopleMock)
    })

    test('that it calls fetch three times with the correct parameters', async () => {
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

      let fetchPeople = "https://swapi.co/api/people"
      expect(window.fetch).toHaveBeenCalledWith(fetchPeople)

      let fetchPersonPlanet = "https://swapi.co/api/species/1/"
      expect(window.fetch).toHaveBeenCalledWith(fetchPersonPlanet)

      let fetchPersonSpecies= "https://swapi.co/api/planets/1/"
      expect(window.fetch).toHaveBeenCalledWith(fetchPersonSpecies)

    })    
  })
  describe('getPlanets', () => {
    test('that it returns an array of cleaned planet objects where the deeper endpoints are undefined', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve({
            results: mockPlanets
          })
        })
      })
      const cleanedPlanets = await getPlanets()

      expect(cleanedPlanets).toEqual(cleanPlanetsMock)
    })

    test('that it calls fetch two additional times to get the remaining endpoints with the correct parameters', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve({
            results: mockPlanets
          })
        })
      })

      const cleanedPlanets = await getPlanets()

      let fetchPlanetResident2 = "https://swapi.co/api/people/2/"
      expect(window.fetch).toHaveBeenCalledWith(fetchPlanetResident2)

      let fetchPlanetResident1 = "https://swapi.co/api/people/1/"
      expect(window.fetch).toHaveBeenCalledWith(fetchPlanetResident1)
      
      let fetchPlanets = "https://swapi.co/api/planets"
      expect(window.fetch).toHaveBeenCalledWith(fetchPlanets)
    })
  })

    describe('getVehicles', () => {
      test('that it returns an array of cleaned vehicle objects', async () => {

        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve({
              results: mockVehicles
            })
          })
        })
      const cleanedVehicles = await getVehicles()

      expect(cleanedVehicles).toEqual(cleanVehiclesMock)
    })
  })

   describe('getScroll and getFilmNum', () => {
      test('that getFilmNum generates a random number', () => {
        const num = getFilmNum()
        expect(num).toBeLessThanOrEqual(7)
      })

      test('that getScroll is called with the correct endpoint', async () => {
        const expectedFilm = "https://swapi.co/api/films/1"

        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve({
              results: mockFilm
            })
          })
        })

        const getFilmNum = jest.fn().mockImplementation(() => {
          return 1;
        })

        const scroll = await getScroll(getFilmNum())

        expect(window.fetch).toHaveBeenCalledWith(expectedFilm)
      })
    })

})
