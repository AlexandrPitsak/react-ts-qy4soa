import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { logout } from '../../store/actions/authActions';
import { toggleTheme } from '../../store/actions/themeActions';
import styled from 'styled-components/native/dist';
// import SearchBar from '../SearchBar/SearchBar';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.headerText};
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
    color: ${(props) => props.theme.buttonText};
    background-color: ${(props) => props.theme.buttonBackground};
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const theme = useSelector((state: RootState) => state.theme.theme);
  const toggleHandler = () => dispatch(toggleTheme());

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <Logo>BirdWatcher</Logo>
      {/* <SearchBar /> */}
      <Nav>
        <ul>
          <li>
            <button onClick={toggleHandler}>
              {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
          </li>
          {isAuthenticated ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <button>Login</button>
            </li>
          )}
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
