// ENDPOINTS
const ENDPOINT = 'http://localhost:3000'
const MONSTERS_ENDPOINT = ENDPOINT + `/monsters`

// constants
const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

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
  console.log("Fetching monster page")
  return fetch(`${MONSTERS_ENDPOINT}?_page=${options && options.page || 1}&_limit=${options && options.limit || 10}`)
  .then(parseJSON)
  .catch(catchError)
}

// post monster
const postMonster = monster => {
  return fetch(MONSTERS_ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify(monster)
  })
  .then(parseJSON)
  .catch(catchError)
}

const fetchService = {
  allMonsters,
  monster,
  monsterPage,
  postMonster
}

export default fetchService
