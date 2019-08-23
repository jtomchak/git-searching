import React, { Fragment } from 'react';

export default function ({ user }) {
  const { name, bio, login, avatar_url } = user;
  return (
    <Fragment>
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img className="is-rounded" src={avatar_url} alt="Avatar" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">@{login}</p>
        </div>
      </div>

      <div className="content">
        {bio}
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </Fragment>
  )
}