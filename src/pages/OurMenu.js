import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import alacarte from "../img/alacarte.jpg";
import roast from "../img/roast.jpg";
import plantbased from "../img/plantbased.jpg";

import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "../animation";
import { UseScroll } from "../components/UseScroll";

const OurMenu = () => {
  const [element, controls] = UseScroll();
  const [element2, controls2] = UseScroll();

  return (
    <StyledMenu
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyledDish>
        <motion.h2 variants={fade}>A la Carte</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="a-la-carte">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={alacarte}
              alt="Healthy athlete"
            />
          </Hide>
        </Link>
      </StyledDish>
      <StyledDish
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>Roasts</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="roasts">
          <img src={roast} alt="Healthy racer" />
        </Link>
      </StyledDish>
      <StyledDish
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Plantbased</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="plantbased">
          <img src={plantbased} alt="goodTimes" />
        </Link>
      </StyledDish>
    </StyledMenu>
  );
};

const StyledMenu = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 860px) {
    padding: 2rem 0rem;
  }
  h2 {
    padding: 1rem 0rem;
    @media (max-width: 860px) {
      padding: 2rem 2rem;
    }
  }
`;

const StyledDish = styled(motion.div)`
  h2 {
    color: #1a1710;
  }
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #a7d2cb;
    margin-bottom: 3rem;
    @media (max-width: 860px) {
      transform: scaleX(90%);
    }
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 19%;
  width: 100vw;
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

export default OurMenu;
