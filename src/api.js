const url = 'https://swapi.co/api';

const fetchApi = async (url) => {
  const fetched = await fetch(url)
  const jsonFetch = await fetched.json()
    
  return jsonFetch;
}

const getFilmNum = () => {
  return Math.floor(Math.random() * 7 + 1)
}

export const getScroll = async () => {
  const random = getFilmNum()
  const scrollToClean = await fetchApi(`${url}/films/${random}`)
   
  return cleanScroll(scrollToClean);
}

const cleanScroll = ({title, opening_crawl, release_date}) => {
  return {title, opening_crawl, release_date}
}

export const getPeople = async () => {
  const unresolvedPromise = await fetchApi(`${url}/people`)
  const arrayToMap = unresolvedPromise.results
  const completePeople = getMorePeopleData(arrayToMap)

  return completePeople
}

const getMorePeopleData = (people) => {
  const completePeople = people.map( async person => {
    const homeworld = await fetchApi(person.homeworld)
    const species = await fetchApi(person.species[0])
    return {...cleanPeopleData(person), 
      homeworld: homeworld.name,
      population: homeworld.population, 
      species: species.name}
  })

  return Promise.all(completePeople)
}

const cleanPeopleData = ({ name }) => {
  return { name }
}