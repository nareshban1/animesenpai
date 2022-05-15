import React from "react";
import { motion } from "framer-motion";

const PageTransitions = (props) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeOut", duration: 0.5 }}
      exit="hidden"
    >
      {props.children}
    </motion.div>
  );
};

export default PageTransitions;
