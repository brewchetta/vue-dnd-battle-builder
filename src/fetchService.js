// ENDPOINTS
const ENDPOINT = 'http://localhost:3000'
const MONSTERS_ENDPOINT = ENDPOINT + `/monsters`

// PARSERS and CATCHES
const parseJSON = res => res.json()
const catchError = error => console.warn(error)

// get all monsters
const allMonsters = () => {
  return fetch(MONSTERS_ENDPOINT)
  .then(parseJSON)
  .catch(catchError)
}

// get single monster
const monster = id => {
  return fetch(`${MONSTERS_ENDPOINT}/${id}`)
  .then(parseJSON)
  .catch(catchError)
}

// get monsters through pagination
const monsterPage = options => {
  return fetch(`${MONSTERS_ENDPOINT}?_page=${options && options.page || 1}&_limit=${options && options.limit || 10}`)
}

export default const fetchService = {
  allMonsters,
  monster,
  monsterPage
}
