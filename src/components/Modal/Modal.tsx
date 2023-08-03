// import React, { useEffect, useState } from "react";
// import Backdrop from "../Backdrop/Backdrop";
// import { motion } from "framer-motion";
// import styled from "styled-components";
// import ButtonComponent from "../../ButtonComponent";
// import { useDispatch, useSelector } from "react-redux";
// import { closeModal } from "../../store/modalSlice";
// import { createPortal } from "react-dom";
// import ShowCloseIcon from "../ShowCloseIcon";
// import { Theme } from "../../styles/themes";


// const StyledModal = styled(motion.div)`
//   align-items: center;
//   width: 400px;
//   height: 400px;
//   border-radius: 12px;
//   /* background-color: #a0a0a0; */
//   background: linear-gradient(135deg, rgb(19, 49, 246), rgba(255, 255, 255));
//   /* backdrop-filter: blur(10px); */
//   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
//   /* border: 5px solid rgba(255, 255, 255, 0.18); */
// `;

// const Input = styled.input`
//   width: 70%;
//   padding: 10px;
//   margin-bottom: 10px;
//   box-sizing: border-box;
//   border-radius: 12px;
//   border: none;
//   outline: none;  
//   /* opacity: 1; */

// `
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

// `
// const Text = styled.p`

//   align-items: center;
//   padding: 30 0 90 0;
//   text-align: center;
//   font-size: 25px;
//   font-family: Gill Sans;
//   color: ${(props: { theme: Theme }) =>
//     props.theme.text};
// `

// const CloseButton = styled.div`
//   position: absolute;
//   left: 0;
//   text-align: right;
//   padding: 10px;
//   cursor: pointer;
//   fill: ${(props: { theme: Theme }) =>
//     props.theme.text};
// `
// const Svg = styled(ShowCloseIcon)`
//   width: 20px;
//   height: 20px;
//   &:hover{
//     fill: red;
//   }
// `

// const dropIn = {
//   hidden: {
//     y: "-100vw",
//     opacity: 0,
//   },
//   visible: {
//     y: "0",
//     opacity: 1,
//     transition: {
//       type: "spring",
//       // duration: 1
//       damping: 40,
//       stiffness: 380,
//     },
//   },
//   exit: {
//     y: "100vw",
//     opacity: 0,
//     transition: {
//       type: "spring",
//       damping: 20,
//       stiffness: 80
//     },
//   },
// };

// const Modal = ({ text }: any) => {
//   const dispatch = useDispatch();
//   const theme = useSelector((state: any) => state.theme.theme);
//   const modal = useSelector((state: any) => state.modal.modal);

//   const modalClose = () => {
//     dispatch(closeModal());
//   };

//   modal?document.body.style.overflow = 'hidden':document.body.style.overflow = 'unset'

//   return createPortal(
//     <>
//       <Backdrop onClick={modalClose}>
//         <StyledModal
//           theme={theme}
//           key="modal"
//           onClick={(e) => {
//             e.stopPropagation()
//             // e.preventDefault()
//           }}
//           variants={dropIn}
//           initial="hidden"
//           animate="visible"
//           exit="exit">
//           <CloseButton theme={theme}>
//             <Svg onClick={modalClose}/>
//           </CloseButton>

//           <Text theme={theme}>{text}</Text>

//           <Form>
//               <Input type="text" autoComplete="false" placeholder="Email" />
//               <Input type="password" autoComplete="off" placeholder="Password" />
//               <ButtonComponent width="70%" type="submit" children="Log in"/>
//           </Form>
//         </StyledModal>
//       </Backdrop>
//     </>,

//     document.getElementById("modal") as Element
//   );
// };

// export default Modal;
