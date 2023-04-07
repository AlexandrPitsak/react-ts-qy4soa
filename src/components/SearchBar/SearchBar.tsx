// import React from 'react';
// import styled from 'styled-components';

// const SearchInput = styled.input`
//   padding: 0.5rem;
//   border: none;
//   border-radius: 0.5rem;
//   margin-right: 1rem;
// `;

// const SearchButton = styled.button`
//   padding: 0.5rem 1rem;
//   border: none;
//   border-radius: 0.5rem;
//   background-color: ${(props) => props.theme.buttonBackground};
//   color: ${(props) => props.theme.buttonText};
//   font-weight: bold;
//   cursor: pointer;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// interface Props {
//   onSearch: (query: string) => void;
// }

// const SearchBar: React.FC<Props> = ({ onSearch }) => {
//   const [query, setQuery] = React.useState('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <SearchContainer>
//         <SearchInput
//           type="text"
//           placeholder="Search for birds"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <SearchButton type="submit">Search</SearchButton>
//       </SearchContainer>
//     </form>
//   );
// };

// export default SearchBar;
