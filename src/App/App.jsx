import { Component } from 'react';
import styled from 'styled-components';
import Searchbar from '../components/Searchbar';
import SearchInfo from '../Services/SearchInfo';
class App extends Component {
  state = {
    query: '',
  };
  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <SearchInfo query={this.state.query} />
      </div>
    );
  }
}
export default App;
