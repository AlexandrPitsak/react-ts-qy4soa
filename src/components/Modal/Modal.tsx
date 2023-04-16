import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import { motion} from 'framer-motion'
import styled from 'styled-components'
import ButtonComponent from '../Header/ButtonComponent'

const StyledModal = styled(motion.div)`
    width: clamp(50%, 700px, 90%);
    height: min(50%, 300px);

    margin: auto;
    padding: 0px 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 0,
            stiffness: 500
        }
    },
    exit: {
        y: "100vh",

    }
}


const Modal = ({handleClose, text}: any) => {
  return (
    <Backdrop onClick={handleClose}>
       <StyledModal
        onClick={ (e) => e.stopPropagation() }
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
       >
        <p>{text}</p>
        <ButtonComponent onClick={handleClose} name="Close"/>
       </StyledModal>
    </Backdrop>
  )
}

export default Modal