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
    const { query } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <SearchInfo query={query} />
      </>
    );
  }
}
export default App;

// const Container = styled.div`
//   margin: 0 auto;

//   @media screen and (min-width: 320px) {
//     width: 320px;
//   }
//   @media screen and (min-width: 768px) {
//     width: 768px;
//   }
//   @media screen and (min-width: 1280px) {
//     width: 1280px;
//   }
// `;
