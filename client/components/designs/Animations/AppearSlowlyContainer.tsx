import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { motionDiv } from '../BlackScreen/type';

const appearSlowly = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const AppearSlowlyContainer: FC<motionDiv> = ({ children, ...props }) => {
  return (
    <motion.div
      variants={appearSlowly}
      initial="hidden"
      animate="visible"
      exit="exit"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AppearSlowlyContainer;
