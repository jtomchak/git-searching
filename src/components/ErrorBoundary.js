import React, { Component, Fragment } from 'react';

export default class ErrorBoundary extends Component {
  state = { error: null, info: null };

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    this.setState({
      error,
      info
    });
  }
  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return (
        <Fragment>
          <h1>Oh noes. Something went wrong. <span role='img' aria-label='kitten_crying'>😿</span></h1>
          <p>{this.state.info}</p>
        </Fragment>)
    }
    return this.props.children;
  }
}