import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  outline: none;
  border: ${(props) =>
    props.theme ? '1px solid #b3b7b3' : 'none'};
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const theme = useSelector((state:any) => state.theme.theme);

  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchContainer>
        <SearchInput
          theme={theme}
          type="text"
          placeholder="Search for birds"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </SearchContainer>
    </form>
  );
};

export default SearchBar;
