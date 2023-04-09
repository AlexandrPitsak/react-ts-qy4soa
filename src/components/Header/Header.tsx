import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
// import { logout } from '../../store/actions/authActions';
import {
  ThemeActionTypes,
  toggleTheme,
} from "../../store/actions/themeActions";
import { lightTheme } from "../../styles/themes";
import SearchBar from "../SearchBar";
import styled from "styled-components";
import { Theme } from "../../types";

const HeaderContainer = styled.header<{ hasShadow: boolean }>`
  position: fixed;
  width: 100%;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.headerBackground};
  color: ${(props: { theme: Theme }) => props.theme.text};
  transition: box-shadow 0.2s ease-in-out;
  ${({ hasShadow }) =>
    hasShadow &&
    `
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    `}
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
    font-size: 1rem;

    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: bold;
    color: ${(props: { theme: { buttonText: any } }) => props.theme.buttonText};
    background-color: ${(props: { theme: { buttonBackground: any } }) =>
      props.theme.buttonBackground};
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
  // const toggleHandler = () => dispatch(toggleTheme());

    // const handleLogout = () => {
    //   dispatch(logout());
    // };

  const toggleHandler = () => {
    dispatch(toggleTheme() as unknown as ThemeActionTypes);
  };
  /*
  This code sets up an event listener on the window object to listen for scroll events.
  When the user scrolls down the page, it checks the current vertical scroll position
   using window.pageYOffset.
  If the position is greater than 0, it sets the hasShadow state variable to true,
  indicating that the Header should display a shadow. If the position is 0,
  it sets the hasShadow state variable to false.
   */
  const [hasShadow, setHasShadow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };
  /*
  The useEffect hook is used to add and remove the event listener.
  It is only called once when the component is mounted, thanks to the empty
  dependency array [] passed as the second argument. When the component is unmounted,
  the returned cleanup function removes the event listener to avoid memory leaks.
  */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer theme={theme} hasShadow={hasShadow}>
      <Logo>BirdWatcher</Logo>

      <Nav theme={theme}>
        <ul>
          <li>
            <SearchBar
              onSearch={function (query: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          </li>
          <li>
            <button onClick={toggleHandler}>
              {theme === lightTheme ? "Dark" : "Light"} Theme
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
