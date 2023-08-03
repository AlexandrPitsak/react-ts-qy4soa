import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ButtonComponent from "../../ButtonComponent";
import { Theme } from "../../theme/themes";
import { setDarkTheme, setLightTheme } from "../../store/themeSlice";
import { openModal } from "../../store/modalSlice";
import ShowLogo from "../ShowLogo";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.background};
    background-color: black;
  color: ${(props: { theme: Theme }) => props.theme.textBackground};
  transition: box-shadow 0.2s ease-in-out;
  border: solid 2px grey;
  z-index: 999;
`;

const Logo = styled(ShowLogo)`
  fill: ${(props: { theme: Theme }) => props.theme.textBackground};
  fill: red;
  /* position: absolute; */
  /* position: relative; */
  left: 100px;
  /* width: 100%; */
  align-items: left;

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
`;

const Header = () => {
  // const dispatch = useDispatch();
  // const theme = useSelector((state: any) => state.theme.theme);
  // const modal = useSelector((state: any) => state.modal.modal);

//   useEffect(() => {
//     modal && document.body.style.overflow === 'hidden';
//     !modal && document.body.style.overflow === 'unset';
//  }, [modal ]);
 
  // const modalOpen = () => {
  //   dispatch(openModal());
  // };

  // const themeSwitch = () => {
  //   if (theme.state) {
  //     dispatch(setDarkTheme());
  //   } else {
  //     dispatch(setLightTheme());
  //   }
  // };

  // const [hasShadow, setHasShadow] = useState(false);

  // const handleScroll = () => {
  //   if (window.pageYOffset > 0) {
  //     setHasShadow(true);
  //   } else {
  //     setHasShadow(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    // <HeaderContainer theme={theme}>
          <HeaderContainer>

      {/* <Logo theme={theme}/> */}
      <Logo/>

      {/* <Nav theme={theme} > */}
      <Nav>

        <ul>
          <li>
            {/* <ButtonComponent
              children={theme.state ? "Dark" : "Light"}
              onClick={themeSwitch}
            /> */}
            {/* <ButtonComponent
              children={theme.state ? "Dark" : "Light"}
              onClick={themeSwitch}
            /> */}
          </li>
          <li>
            <ButtonComponent
              children="Birds"
            />
          </li>
          <li>
            <div>
              {/* <ButtonComponent onClick={modalOpen} children="Login" /> */}
              <ButtonComponent children="Login" />

            </div>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
