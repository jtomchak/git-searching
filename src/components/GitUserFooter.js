import React from 'react'

export default ({ user }) => {
  const { public_gists, following, public_repos, login } = user;

  return (
    <footer className="card-footer">
      <a href={`https://github.com/${login}/repositories`} className="card-footer-item"> Repos {public_repos}</a>
      <a href={`https://gist.github.com/${login}`} className="card-footer-item"> Gists {public_gists}</a>
      <a href={`https://github.com/${login}/following`} className="card-footer-item"> Following {following}</a>
    </footer>
  )
}