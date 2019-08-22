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
          <button onClick={() => this.handleOnClickPaginate(first)} className="pagination-link" aria-label="Goto first">First</button>
          <button onClick={() => this.handleOnClickPaginate(last)} className="pagination-link" aria-label="Goto page last">Last</button>
          <ul className="pagination-list">
            <li>
              <button onClick={() => this.handleOnClickPaginate(previous)} className="pagination-previous">Previous</button>
            </li>
            <li>
              <button onClick={() => this.handleOnClickPaginate(next)} className="pagination-next">Next page</button>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}