import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../../ButtonComponent'
import { Theme } from '../../theme/themes'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3% 10%;

`
const Nav = styled.div`
    display: flex;
    gap: 5rem;
    background-color: ${(props: { theme: Theme }) =>
    props.theme.background};
`
const Links = styled.div`
    /* color: ${(props: { theme: Theme }) =>
    props.theme.textBackground}; */
    color: white;
    font-size: 1.2rem;

`
const Logo = styled.div`
    font-size: 2rem;
    color: white;

`
const Login = styled(StyledButton)`
    color: ${(props: { theme: Theme }) =>
        props.theme.textBackground};
    background-color: ${(props: { theme: Theme }) =>
    props.theme.onPrimary};
`

const Navbar = () => {

  const menu = [
    {title: 'Home'},
    {title: 'About'},
    {title: 'Birds'},
  ]

  return (
    <>
    <Wrapper>
        <Logo>
            Logo
        </Logo>
        <Nav>
            {menu.map((item)=>(<Links>{item.title}</Links>))}
        </Nav>
        <Login children='Login'></Login>
    </Wrapper>
    </>
  )
}

export default Navbar
