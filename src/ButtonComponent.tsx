import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Theme } from './styles/themes';

const StyledButton = styled(motion.button)<ButtonProps>`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    user-select: none;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: bold;
    color: ${(props: { theme: { buttonText: string } }) =>
      props.theme.buttonText};
    background-color: ${(props: { theme: { buttonBackground: any } }) =>
      props.theme.buttonBackground};
    border: none;
    height: ${({ height }) => height || 'auto'};
    width: ${({ width }) => width || 'auto'};
`

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  theme?: Theme;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  height?: string;
  width?: string;
};
const ButtonComponent = ({type, width, id, children, onClick }: ButtonProps) => {

  const theme = useSelector((state: any) => state.theme.theme);

  return (
    <>
      <StyledButton
        width={width}
        type={type ? type: "button"}
        id={id}
        theme={theme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="button" 
      >
        {children}
      </StyledButton>
    </>
  )
}

export default ButtonComponent;