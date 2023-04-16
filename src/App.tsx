import * as React from "react";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { Theme } from "./styles/themes";

const Main = styled.div`
  // flex: 1;
  padding-top: 70px;
  margin: auto;
  font-size: 1.5rem;
  padding: 20%x;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.headerBackground};
  color: ${(props: { theme: Theme }) => props.theme.text};
  height: 100vh;
`;

export default function App() {
  const theme = useSelector((state: any) => state.theme.theme);

  return (
    <>
      <GlobalStyle />
      <Header />

      <Main theme={theme}></Main>

      {/* <Footer /> */}
    </>
  );
}
