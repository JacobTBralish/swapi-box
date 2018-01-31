const url = 'https://swapi.co/api/';

const fetchApi = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(console.log)
}


const getRandomNum = () => {
  return Math.floor(Math.random() * 7)
}

export const getScroll = () => {
  const random = getRandomNum()
  fetchApi(`${url}films/${random}`)
}