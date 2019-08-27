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
      <div className="column is-three-fifths is-offset-one-fifth">
        <div className="columns" aria-label="pagination">
          <button onClick={() => this.handleOnClickPaginate(first)} className="pagination-link column is-narrow is-1" aria-label="Goto first">First</button>
          <button onClick={() => this.handleOnClickPaginate(last)} className="pagination-link column is-narrow" aria-label="Goto page last">Last</button>
          <div className="column"></div>
          <button onClick={() => this.handleOnClickPaginate(previous)} className="pagination-link column is-narrow" aria-label="Goto previous">Previous</button>
          <button onClick={() => this.handleOnClickPaginate(next)} className="pagination-link column is-narow is-2" aria-label="Goto next">Next page</button>
        </div>
      </div>
    )
  }
}