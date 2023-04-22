import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Theme } from "../../styles/themes";

const BackdropStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center; 
  justify-content: center;
  opacity: 0.5;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.bodyBackground};
    `;

const Backdrop = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: any;
}) => {
  const theme = useSelector((state: any) => state.theme.theme);

  return (
    <BackdropStyle
      theme={theme}
      key="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {children}
    </BackdropStyle>
  );
};

export default Backdrop;
