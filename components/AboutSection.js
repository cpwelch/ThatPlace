import React from "react";
import logo from "../img/cafe.jpeg";
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
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledLayout>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>Welcome to</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              <span>That Place</span>.
            </motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any booking related queries
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnimation} src={logo} alt="" />
      </StyledImage>
      <Wave />
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

export default AboutSection;
