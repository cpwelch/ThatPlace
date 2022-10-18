import { motion } from "framer-motion";
import React, { useState } from "react";
const ContactToggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h3 layout>{title}</motion.h3>
      {toggle ? children : ""}
    </motion.div>
  );
};

export default ContactToggle;
