import React, { Component } from 'react';

import { getUsersWithPagination } from '../api'

export default class Pagination extends Component {
  state = {
    isLoading: false,
    error: null,
  }

  handleOnClickPaginate = link => {
    this.setState({ isLoading: true });
    getUsersWithPagination(link).then(response => {
      this.props.handleSuccess(response)
      this.setState({
        error: null,
        isLoading: false,
      })
    }).catch(err => {
      this.setState({ error: err, isLoading: false });
    })
  };

  render() {
    const { first, last, next, previous } = this.props.links
    return (
      <div className="column is-three-fifths is-offset-one-fifth is-expanded">
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
          <a className="pagination-link" aria-label="Goto page 1">First</a>
          <a className="pagination-link" aria-label="Goto page 45">Last</a>
          <ul className="pagination-list">
            <li>
              <a className="pagination-previous">Previous</a>
            </li>
            <li>
              <a onClick={() => this.handleOnClickPaginate(next)} className="pagination-next">Next page</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}