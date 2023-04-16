import React from 'react'
import { motion } from "framer-motion";

const ButtonComponent = ({name, onClick}: any) => {
    return (
      <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={onClick}>
        {name}
      </motion.button>
    )
  }

  export default ButtonComponent;