import React, { Component } from 'react';

import GitUserDetails from "./GitUserDetails";
import GitUserFooter from "./GitUserFooter"
import { getUserDetails } from '../api';


export default class GitUserCard extends Component {
  state = {
    error: null,
    isLoading: false,
    user: {}
  }
  componentDidMount() {
    this.setState({ isLoading: true })
    getUserDetails(this.props.user.login).then(response => {
      this.setState({
        isLoading: false,
        user: response.json
      })
    }).catch(err => this.setState({ error: err.message }))
  }

  render() {
    const { isLoading } = this.state;
    const { name, bio, login, avatar_url } = this.state.user;
    return (

      <div className="card">
        <div className="card-content">
          {isLoading ? <div className="media"><div className="lds-ellipsis"><div></div><div></div><div></div></div></div> : <GitUserDetails user={this.state.user} isLoading={isLoading} />}
        </div>
        {!isLoading && <GitUserFooter user={this.state.user} />}
      </div>
    )
  }
}