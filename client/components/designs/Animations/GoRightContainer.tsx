import React from 'react';
import { motion } from 'framer-motion';
import { motionDiv } from '../BlackScreen/type';

const GoRight = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
  },
  exit: {
    x: '-100vw',
  },
};

const GoRightContainer: React.FC<motionDiv> = ({ children, ...props }) => {
  return (
    <motion.div
      variants={GoRight}
      initial="hidden"
      animate="visible"
      exit="exit"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GoRightContainer;
