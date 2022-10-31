import React from "react";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { StyledHide } from "../styles";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <StyledHide>
        <ServicesSection />
      </StyledHide>
      <StyledHide>
        <FaqSection />
      </StyledHide>
    </motion.div>
  );
};

export default AboutUs;
