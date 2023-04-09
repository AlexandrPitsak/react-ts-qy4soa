import * as React from 'react';
import Header from './components/Header';
import './style.css';
import BirdCard from './components/BirdCard/BirdCard';
import { useSelector } from 'react-redux';
import { RootState, Theme } from './types';
import styled from 'styled-components';

export default function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);


const Main = styled.div`
  font-size: 1.5rem;
  padding: 100px 30%;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.headerBackground};
  color: ${(props: { theme: Theme }) => props.theme.text};
  height: 200vh;
  `;

  return(
    <>
    <Header/>
    <Main theme={theme}>
      <BirdCard />
    </Main>
    </>

  )
}
