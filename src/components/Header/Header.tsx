import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../SearchBar";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import { Theme } from "../../styles/themes";
import { setDarkTheme, setLightTheme } from "../../store/themeSlice";
import { openModal } from "../../store/modalSlice";

const HeaderContainer = styled.header<{ hasShadow: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
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

  /* button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: bold;
    color: ${(props: { theme: { buttonText: string } }) =>
      props.theme.buttonText};
    background-color: ${(props: { theme: { buttonBackground: any } }) =>
      props.theme.buttonBackground};
    border: none;
  } */
`;

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.theme);

  const modalOpen = () => {
    dispatch(openModal());
  };

  const themeSwitch = () => {
    if (theme.state) {
      dispatch(setDarkTheme());
    } else {
      dispatch(setLightTheme());
    }
  };

  const [hasShadow, setHasShadow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

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
            <ButtonComponent
              name={theme.state ? "Dark" : "Light"}
              onClick={themeSwitch}
            />
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
            <div>
              <ButtonComponent onClick={modalOpen} name="Login" />
            </div>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
