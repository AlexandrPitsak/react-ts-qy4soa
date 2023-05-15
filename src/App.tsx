import * as React from "react";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { Theme } from "./styles/themes";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";
import Card from "./components/Card";
import BirdsList from "./components/BirdsList/BirdsList";
import { useEffect } from "react";

const Main = styled.div`
  padding: 70px 0 0 0;
  display: grid;
  
  grid-template-columns: repeat(1, 1fr);
  text-align: center;
  align-items: center;

  color: ${(props: { theme: Theme }) => props.theme.text};
  background-color: ${(props: { theme: Theme }) =>
  props.theme.headerBackground};

  @media (min-width: 760px) {
    flex-direction: grid;
  }
`;

export default function App() {
  const theme = useSelector((state: any) => state.theme.theme);
  const modal = useSelector((state: any) => state.modal.modal);
  
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Main theme={theme}>
        <BirdsList />
      </Main>

      <AnimatePresence
        // mode="popLayout"
        // initial={false}
        onExitComplete={() => console.log("EXIT COMPLETE")}>

        {modal && <Modal text='Login' />}


      </AnimatePresence>

      {/* <Footer /> */}
    </>
  );
}
