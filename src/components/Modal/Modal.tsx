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
  color: #000;
  background: rgb(221,216,93);
  background: linear-gradient(0deg, rgba(221,216,93,1) 0%, rgba(45,138,253,1) 100%);
`;

const Input = styled.input`
height: 40px;
width: 250px;
font-size: large;
padding: 0.5rem;
border: none;
border-radius: 0.5rem;
margin-right: 1rem;
outline: none;
border: ${(props) =>
  props.theme === 'lightTheme' ? '2px solid #D0D5D0' : 'none'};
backdrop-filter: blur(5px);
`
const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const Form = styled.form`
    /* padding-top: 25%; */
    margin: auto;
    width: 400px;
    height: 300px;
    /* border: 2px solid red; */
    font-size: large;
    flex-direction: column;
    align-items: center;

`
const FormButtonsStyle = styled.div`
    margin-top: 100px;
    padding-left: 30%;
`

const dropIn = {
  hidden: {
    y: "-100vw",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      // when: "beforeChildren"
    },
  },
  exit: {
    y: "100vw",
    opacity: 0,
    transition: {
      duration: 0.9
    }
  },
};

const Modal = ({ text }: any) => {
  const dispatch = useDispatch();
  const modal = useSelector((state: any) => state.modal.modal);
  const theme = useSelector((state: any) => state.theme.theme);


  const modalClose = () => {
    dispatch(closeModal());
  };

  if (!modal) return null;

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
          
          <p>{text}</p>

          <Form >
            <Label>
              Email:
              <Input type="text" />
            </Label>

            <Label>
              Password:
              <Input type="password" />
            </Label>

            <FormButtonsStyle>
              <ButtonComponent onClick={modalClose} name="Close" />
              <ButtonComponent type="submit" name="Submit" />

            </FormButtonsStyle>

            
          </Form>


          

        </StyledModal>
      </Backdrop>
    </>,
    document.getElementById("modal") as Element
  );
};

export default Modal;
