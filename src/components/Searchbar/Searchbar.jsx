import { Component } from 'react';
import styled from 'styled-components';
import { Notify } from 'notiflix';
export default class Form extends Component {
  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      Notify.failure('please enter any query');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="search-form">
        <input
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Search images..."
          value={this.state.query}
          onChange={this.handleQueryChange}
        />

        <button type="submit">search</button>
      </form>
    );
  }
}
