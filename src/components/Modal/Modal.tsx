import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import { motion } from "framer-motion";
import styled from "styled-components";
import ButtonComponent from "../Header/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import { createPortal } from "react-dom";

const StyledModal = styled(motion.div)`
  width: clamp(25%, 700px, 90%);
  height: min(50%, 700px);
  border: 2px solid black;
  background: rgba(111, 34, 255, 0.563);
  margin: auto;
  padding: 0px 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

`;
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ text }: any) => {
  const dispatch = useDispatch();
  const modal = useSelector((state: any) => state.modal.modal);

  const modalClose = () => {
    dispatch(closeModal());
  };

  if (!modal) return null;

  return createPortal(
    <>

      <Backdrop onClick={modalClose}>
        <StyledModal
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit">
          <p>{text}</p>
          <ButtonComponent onClick={modalClose} name="Close" />
        </StyledModal>
      </Backdrop>
    </>,
    document.getElementById("modal") as Element
  );
};

export default Modal;
