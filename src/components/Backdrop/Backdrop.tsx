import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const BackdropStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #468b44e1;
  /* backdrop-filter: blur(10px); */
`;

const Backdrop = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: any;
}) => {
  return (
    <BackdropStyle
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {children}
    </BackdropStyle>
  );
};

export default Backdrop;
