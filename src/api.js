// https://developer.github.com/v3/#pagination
// default per_page is 30
// https://developer.github.com/v3/guides/traversing-with-pagination/
// Always rely on these link relations provided to you. Don't try to guess or construct your own URL. 

const baseURL = "https://api.github.com/search/";


const getUsersBySearchTerm = searchTerm => {
  return getUsersBy(`${baseURL}users?q=${searchTerm}`)
};

const getUsersWithPagination = url => {
  return getUsersBy(url)
}

const getUsersBy = url => {
  return fetch(url)
    .then(result => result.json().then(json => {
      if (result.status !== 200) throw new Error(result.statusText)
      return {
        headers: result.headers,
        status: result.status,
        json
      }
    }))
}

export { getUsersBySearchTerm, getUsersWithPagination };
