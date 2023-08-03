import React, { useRef } from 'react'
import styled from 'styled-components'
import img from "../../assets/color.jpg"
import Navbar from '../Navbar'
import video from '../../assets/rain.mp4'


const ImgBack = styled.div`
  background-image: url(${img});
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
`

const Cover = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.1px);
  -webkit-backdrop-filter: blur(9.1px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`
const Card = styled.p`
  position: absolute;
  left: 50px;
  right: 50px;
  top: 150px;
  bottom: 50px;
  background: rgba(13, 13, 7, 0.663);
  border-radius: 16px;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.804);
  backdrop-filter: blur(9.1px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 5% 25%;
  font-size: 20px;
`


const Hero: React.FC = () => {


  return (
    <>
      <div>
        <ImgBack>
        <Cover>
        <Card>
          <h1>
            Hello
          </h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolores nulla modi, minus ea impedit
          neque libero, deleniti, ipsam ratione provident laboriosam! Quos illum odit qui vitae asperiores? Quasi,
          voluptatem.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur repellat magnam ipsam corrupti animi molestias architecto qui dolorum placeat deserunt sunt aut tenetur, similique adipisci quis, expedita cupiditate? Est, fugiat!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quasi dolore, maxime deserunt modi labore. Quae molestias tempora quisquam commodi ipsam voluptatem, vero rem eos soluta dicta, quia veritatis corrupti.
        </Card>
        
        </Cover>
        </ImgBack>
        
      </div>
    </>
  );
};
export default Hero
