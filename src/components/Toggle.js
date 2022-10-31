import { motion } from "framer-motion";
import React, { useState } from "react";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = (e) => {
    e.stopPropagation();
    setToggle(!toggle);
  };
  return (
    <motion.div layout className="question">
      <motion.h4 layout="position" onClick={toggleHandler}>
        {title}
      </motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
