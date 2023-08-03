import * as React from "react";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { Theme } from "./theme/themes";
// import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";
import Card from "./components/Card";
// import BirdsList from "./components/BirdsList/BirdsList";
import { useEffect, useState } from "react";
import { Movie, IMovies } from "./components/Movie";
import BirdsList from "./components/BirdsList/BirdsList";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


const Main = styled.div`
  position: relative;
  width: calc(100%-70px);
  background: rgba(255,255,255,0.5);
  box-shadow: 0 15px 35px rgba()
`;


export default function App() {
  const theme = useSelector((state: any) => state.theme.theme);
  // const modal = useSelector((state: any) => state.modal.modal);

  return (
    <>
      <GlobalStyle />
      <Header/>
      <Hero/>
      <Main>
      
          {/* <source src={video} type='video/mp4'/> */}
          <div className="App">
            {/* <BirdsList/> */}
          </div>
      </Main>

      {/* <AnimatePresence */}
        {/* // mode="popLayout"
        // initial={false}
        // onExitComplete={() => console.log("EXIT COMPLETE")}> */}

        {/* {modal && <Modal text='Login' />} */}


      {/* </AnimatePresence> */}

      {/* <Footer /> */}
    </>
  );
}
