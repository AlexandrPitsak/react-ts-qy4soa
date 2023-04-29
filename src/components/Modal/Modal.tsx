import React, { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import { motion } from "framer-motion";
import styled from "styled-components";
import ButtonComponent from "../Header/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import { createPortal } from "react-dom";

const StyledModal = styled(motion.div)`
  align-items: center;
  width: 400px;
  height: 400px;
  border-radius: 12px;
  z-index: 10;
  /* background: rgb(221,216,93);
  background: linear-gradient(0deg, rgba(221,216,93,1) 0%, rgba(45,138,253,1) 100%); */
  background-color: #a3a3a3;
`;

const Input = styled.input`
  width: 70%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 12px;
  border: none;
  outline: none;  

`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Button = styled.div`
  padding: 50px;
  border: none;
`
const Text = styled.p`
  align-items: center;
  padding: 40px;
  text-align: center;
  font-size: 40px;
`
const CloseButton = styled.div`
  width: 100%;
  text-align: right;
`

const dropIn = {
  hidden: {
    y: "-100vw",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 0.9,
    transition: {
      type: "spring",
      // duration: 1
      damping: 10,
      stiffness: 80,
    },
  },
  exit: {
    y: "100vw",
    opacity: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 80
    },
  },
};

const Modal = ({ text }: any) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.theme);

  const modalClose = () => {
    dispatch(closeModal());
  };
  // if (!modal) return null;

  return createPortal(
    <>
      <Backdrop onClick={modalClose}>
        <StyledModal
          theme={theme}
          key="modal"
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit">
          <CloseButton>
            <ButtonComponent type="submit" name="x" onClick={modalClose}/>
          </CloseButton>

          <Text>{text}</Text>

          <Form >
              <Input type="text" autoComplete="false" placeholder="Email" />
              <Input type="password" autoComplete="off" placeholder="Password" />
              <Button>
                <ButtonComponent type="submit" name="Log in" />
              </Button>
          </Form>
        </StyledModal>
      </Backdrop>
    </>,
    document.getElementById("modal") as Element
  );
};

export default Modal;
