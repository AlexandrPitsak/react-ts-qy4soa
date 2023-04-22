import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledButton = styled(motion.button)`
   font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: bold;
    color: ${(props: { theme: { buttonText: string } }) =>
      props.theme.buttonText};
    background-color: ${(props: { theme: { buttonBackground: any } }) =>
      props.theme.buttonBackground};
    border: none;
`

const ButtonComponent = ({name, onClick}: any) => {
  const theme = useSelector((state: any) => state.theme.theme);

    return (
      <>
      <StyledButton theme={theme} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={onClick}>
        {name}
      </StyledButton>
      </>
      
     
    )
  }

  export default ButtonComponent;