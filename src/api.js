// https://developer.github.com/v3/#pagination
// default per_page is 30
// https://developer.github.com/v3/guides/traversing-with-pagination/
// Always rely on these link relations provided to you. Don't try to guess or construct your own URL. 

const baseURL = "https://api.github.com/";
const searchURL = `${baseURL}search/`
const userDetailsURL = `${baseURL}users/`


// github rate limiting on the api can be rough
// when you are making lots of calls in dev
// create a .env with a git auth token labeled 'REACT_APP_GIT_TOKEN' 
// to easy your pain. 
const options = process.env.NODE_ENV === 'development' ? {
  headers: {
    Authorization: `token ${process.env.REACT_APP_GIT_TOKEN}`
  }
} : {}


const getUsersBySearchTerm = searchTerm => {
  return parsePayload(`${searchURL}users?q=${searchTerm}`)
};

const getUsersWithPagination = url => {
  return parsePayload(url)
}

const getUserDetails = userLogin => {
  return parsePayload(userDetailsURL + userLogin)
}

const parsePayload = url => {
  return fetch(url, options)
    .then(result => result.json().then(json => {
      if (result.status !== 200) throw new Error(result.statusText)
      return {
        headers: result.headers,
        status: result.status,
        json
      }
    }))
}

export { getUsersBySearchTerm, getUsersWithPagination, getUserDetails };
