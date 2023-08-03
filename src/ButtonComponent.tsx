import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components';
import { Theme } from './theme/themes';

export const StyledButton = styled.button<ButtonProps>`
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
    /* color: ${(props: { theme: { buttonText: string } }) =>
      props.theme.buttonText}; */
    color: white;
    background-color: ${props =>
      props.theme.buttonBackground};
    border: none;
    background-color: ${({ active }) => (active ? "#01AFEE" : "green")};

    &:hover{
      scale: 1.1;
    }
    &:active{
      scale: 0.9;
      color: white
    }
`

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  theme?: Theme;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  active?: boolean;
};
const ButtonComponent = ({active, type, children, id, onClick }: ButtonProps) => {

  // const theme = useSelector((state: any) => state.theme.theme);

  return (
    <>
      <StyledButton
        type={type ? type: "button"}
        id={id}
        onClick={onClick}
        className="button" 
        active={active}
      >
        {children}
      </StyledButton>
    </>
  )
}

export default ButtonComponent;