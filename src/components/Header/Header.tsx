import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
// import { logout } from '../../store/actions/authActions';
import { ThemeActionTypes, toggleTheme } from '../../store/actions/themeActions';
import { lightTheme } from '../../styles/themes';
import SearchBar from '../SearchBar';
import styled from 'styled-components';
import { Theme } from '../../types';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props: { theme: Theme }) => props.theme.headerBackground};
  color: ${(props: { theme: Theme}) => props.theme.headerText};
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  li:not(:last-child) {
    margin-right: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: bold;
    color: ${(props: { theme: { buttonText: any; }; }) => props.theme.buttonText};
    background-color: ${(props: { theme: { buttonBackground: any; }; }) => props.theme.buttonBackground};
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Header = () => {
  const dispatch = useDispatch();

  // const isAuthenticated = useSelector(
  //   (state: RootState) => state.auth.isAuthenticated
  // );
  const theme = useSelector((state: RootState) => state.theme.theme);

  const toggleHandler = () => {
    dispatch(toggleTheme() as unknown as ThemeActionTypes);
  };
  // const toggleHandler = () => dispatch(toggleTheme());

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <HeaderContainer theme={theme}>
      <Logo>BirdWatcher</Logo>
      <SearchBar theme={theme} onSearch={function (query: string): void {
        throw new Error('Function not implemented.');
      } }/>
      <Nav theme={theme}>
        <ul>
          <li>
            <button onClick={toggleHandler}>
              {theme === lightTheme ? 'Dark' : 'Light'} Theme
            </button>
          </li>
          {/* {isAuthenticated ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <button>Login</button>
            </li>
          )} */}
           <li>
              <button>Login</button>
            </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
