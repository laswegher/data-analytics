import React from 'react';
import { motion } from 'framer-motion';

const Button = (props) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400 }}
      onClick={props.onClick}
      type={`${props.type || 'button'}`}
      className={`${props.className} font-semibold py-2 px-4 rounded-md`}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
