import React from 'react';
import GitUserCard from "./GitUserCard"

export default ({ gitUsers }) => (
  <div className="columns">
    <div className="column is-three-fifths is-offset-one-fifth">
      {gitUsers.map(user => (
        <GitUserCard user={user} key={user.id} />
      ))}
    </div>
  </div>
)