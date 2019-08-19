const baseURL = "https://api.github.com/search/";

const getUserBy = searchTerm =>
  fetch(`${baseURL}users?q=${searchTerm}`)
    .then(result => result.json())
    .then(json => json)
    .catch(err => err.message);

export { getUserBy };