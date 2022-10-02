import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
}

const AnimateOnScreenLoad = ({ children }: Props) => {
  const variants = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="show" variants={variants}>
      {children}
    </motion.div>
  );
};

export default AnimateOnScreenLoad;
