const url = 'https://swapi.co/api';

export const fetchApi = async (url) => {
  const fetched = await fetch(url)
  const jsonFetch = await fetched.json()
    
  return jsonFetch;
}

export const getFilmNum = () => {
  return Math.floor(Math.random() * 7 + 1)
}

export const getScroll = async () => {
  const random = getFilmNum()
  const {title, opening_crawl, release_date} = await fetchApi(`${url}/films/${random}`)
   
  return { title, opening_crawl, release_date }
}

export const getPeople = async () => {
  const { results } = await fetchApi(`${url}/people`)
  const completePeople = getMorePeopleData(results)

  return completePeople
}

const getMorePeopleData = (people) => {
  const completePeople = people.map( async ({ name, homeworld, species }) => {
    homeworld = await fetchApi(homeworld)
    species = await fetchApi(species[0])
    return { 
      Name: name , 
      Homeworld: homeworld.name,
      Population: homeworld.population, 
      Species: species.name}
  })

  return Promise.all(completePeople)
}

export const getPlanets = async () => {
  const { results } = await fetchApi(`${url}/planets`);
  const completePlanets = getMorePlanetData(results);

  return completePlanets;
}

const getMorePlanetData = (planets) => {
  const completePlanets = planets.map( async ({ name, residents, terrain, population}) => {
    const retrievedResidents = await getResidents(residents)

    return {
      Name: name, 
      Residents: retrievedResidents, 
      Terrain: terrain, 
      Population: population
    }
  })

  return Promise.all(completePlanets)
}

const getResidents = (residents) => {
  const retrievedResidents = residents.map( async resident => {
    const { name } = await fetchApi(resident)
    return name; 
  })

  return Promise.all(retrievedResidents)
}

export const getVehicles = async () => {
  const { results } = await fetchApi(`${url}/vehicles`)
  const vehicleArray = results.map( ({name, model, vehicle_class, passengers}) => {
    return {
      Name: name, 
      Model: model, 
      Class : vehicle_class, 
      Passengers: passengers
    }
  })

  return vehicleArray;
}
