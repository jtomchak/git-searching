import React from 'react';

export default function ({ users }) {
  if (users === null) return null; //return early if users is null
  return (
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        <span>Found {users}</span>
      </div>
    </div>
  )
}