// https://developer.github.com/v3/#pagination

const baseURL = "https://api.github.com/search/";

const getUserBy = searchTerm => {
  return fetch(`${baseURL}users?q=${searchTerm}`)
    .then(result => result.json())
    .then(json => json)
    .catch(err => err.message);
};

export { getUserBy };
