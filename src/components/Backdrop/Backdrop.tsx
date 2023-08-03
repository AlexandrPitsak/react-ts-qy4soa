import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Theme } from "../../theme/themes";

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center; 
  justify-content: center;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.background};
  
  /* background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 5px solid rgba(255, 255, 255, 0.18);   /////////////////// */

`;

const Backdrop = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: any;
}) => {
  // const theme = useSelector((state: any) => state.theme.theme);

  return (
    <BackdropStyle
      // theme={theme}
      key="backdrop"
      onClick={onClick}
      >
      {children}
    </BackdropStyle>
  );
};

export default Backdrop;
