// https://developer.github.com/v3/#pagination
// default per_page is 30
// https://developer.github.com/v3/guides/traversing-with-pagination/
// Always rely on these link relations provided to you. Don't try to guess or construct your own URL. 

const baseURL = "https://api.github.com/search/";


const getUserBy = searchTerm => {
  return fetch(`${baseURL}users?q=${searchTerm}`)
    .then(result => result.json().then(json => {
      if (result.status !== 200) throw new Error(result)
      return {
        headers: result.headers,
        status: result.status,
        json
      }
    }))
};

export { getUserBy };
