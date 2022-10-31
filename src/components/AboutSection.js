import React from "react";
import cafe from "../img/cafe.jpeg";

import { Link } from "react-router-dom";

import styled from "styled-components";
import {
  StyledLayout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";
import { motion } from "framer-motion";
import {
  titleAnimation,
  fade,
  photoAnimation,
  slider,
  sliderContainer,
} from "../animation";

const AboutSection = () => {
  return (
    <StyledLayout>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyledAboutDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              <span>That Place</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>on Kings.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Passing through? Book a table for That Place on Kings!
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Book Now</motion.button>
        </Link>
      </StyledAboutDescription>
      <StyledImage>
        <motion.img variants={photoAnimation} src={cafe} alt="" />
      </StyledImage>
    </StyledLayout>
  );
};

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 19%;
  width: 100%;
  height: 100vh;
  background: #a7d2cb;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #f2d388;
`;
const Frame3 = styled(Frame1)`
  background: #c98474;
`;
const Frame4 = styled(Frame1)`
  background: #874c62;
`;

const StyledAboutDescription = styled(StyledDescription)`
  margin-top: 10rem;
  button {
    margin: 2rem 0rem 5rem 0rem;
  }
`;

export default AboutSection;
