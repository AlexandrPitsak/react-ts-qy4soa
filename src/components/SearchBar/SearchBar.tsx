import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { lightTheme } from '../../styles/themes';
import { RootState, Theme } from '../../types';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  margin-right: 1rem;
  border: ${(props) =>
    props.theme === lightTheme ? '2px solid #D0D5D0' : 'none'};
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props: { theme: Theme }) => props.theme.buttonBackground};
  color: ${(props: { theme: Theme }) => props.theme.buttonText};
  font-weight: bold;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

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
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton theme={theme} type="submit">
          Search
        </SearchButton>
      </SearchContainer>
    </form>
  );
};

export default SearchBar;
