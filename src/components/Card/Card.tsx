import React from 'react'
import styled from 'styled-components'
import { Theme } from '../../styles/themes'
import img from '../../assets/123.jpg'
import ButtonComponent from '../../ButtonComponent'

const Container = styled.div`
    max-width: 120rem;
    /* padding-inline: 1.5rem; */
    margin-inline: auto;
    border: 1px solid grey;
    border-radius: 20px;

    @media screen  and (max-width: 56.25em){
        
    }
`
const CardItem = styled.article`
    display: flex;
    background-color: ${(props: { theme: Theme }) =>
        props.theme.headerBackground};
    color: ${(props: { theme: Theme }) => props.theme.text};
    box-shadow: 0.5 rem 0.5 rem 1 rem rgba(0, 0, 0, 0.05);
    transition: background-color 0.25s;

    @media screen  and (max-width: 56.25em){
        flex-direction: column;
    }

`
const CardImage = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: normal;
    border-radius: 20px 0px 0px 20px;

`
const CardBody = styled.div`
    flex: 1;
    padding: 5rem;

    @media screen  and (max-width: 56.25em){
        padding: 2.5rem;
    }
`
const CardTitle = styled.h2`
    font-family: 'Playfair Display', sans-serif;
    font-size: clamp(3rem, 5vw, 5rem);
`
const CardSubtitle = styled.h3`
    font-size: 1.4rem;
    font-weight: normal;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
`
const Descriptions = styled.p`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
}
`
const CardButton = styled(ButtonComponent)`
    display: inline-block;
    text-decoration: none;
    color: ${(props: { theme: Theme }) => props.theme.text};
    padding: 1rem 2.5rem;
    margin-top: 2.5rem;
    border: 2px solid ${(props: { theme: Theme }) => props.theme.buttonBackground};
`

// const Span = styled.span`
//     display: inline-block;
//     transition: transform 0.25s;

//     &:hover{
//         transform: translateX(0.75rem);
//     }
// `

const Card = (props: any) => {

  return (
    <>
        <Container>
            <CardItem> 
                <CardImage> 
                    <Image src={props.img} alt="bird" />
                </CardImage>
                <CardBody> 
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>Subtitle</CardSubtitle>
                    <Descriptions>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati dolore doloremque hic optio deleniti, rerum expedita quibusdam minus sint! Reiciendis, vitae? Quia, possimus consequuntur officiis dignissimos eveniet dicta illum?
                    </Descriptions>
                    <CardButton children="Read More"/>
                    {/* </CardButton> */}
                </CardBody>
            </CardItem>
        </Container>
        
    </>
   

  )
}

export default Card
