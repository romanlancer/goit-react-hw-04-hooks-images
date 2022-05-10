import { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Form, Input, Button } from './Searchbar.styled';
import { Notify } from 'notiflix';
import { BsSearch } from 'react-icons/bs';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      Notify.failure('please enter any query');
      return;
    }

    onSubmit(query.trim());
    setQuery('');
  };

  return (
    <header>
      <Wrapper>
        <Form onSubmit={handleSubmit} id="search-form">
          <Input
            type="text"
            name="searchQuery"
            autoComplete="off"
            placeholder="Search images..."
            value={query}
            onChange={handleQueryChange}
          />

          <Button type="submit">
            <BsSearch size={27} />
          </Button>
        </Form>
      </Wrapper>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
