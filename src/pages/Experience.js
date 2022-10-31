import React from "react";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";
import { StyledImage, StyledDescription } from "../styles";
import partners from "../img/partnersinwine.jpg";
import { photoAnimation, lineAnimation } from "../animation";
function Experience() {
  return (
    <Container
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledLayout>
        <motion.h2>Partners in Wine</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <StyledBox>
          <StyledDescription>
            <motion.p>
              We partner with our neighbours and friends at Sapling Yard.
              Saplying Yard is ran by Carla Rodeghiero and Malcolm Burdett and
              has won an array of awards since inception. Grown in these
              inspiring cool climate surroundings, Sapling Yard produces wines
              of great flavor and elegance which reflect the natural beauty of
              the land. Our wines are made with dedication, precision,
              authenticity and passion, which is clearly displayed in the
              quality of the wine. We love what we do, and it shows across our
              range of wines, all with character and of superior quality.
            </motion.p>
            <motion.p>
              We are ideally located next door to the Sapling Yards Cellar Door,
              and aim to deliver an experience combining our tasty food, and
              their delicious award winning wines.
            </motion.p>
            <motion.p>
              For more information on Sapling Yards please follow this link:{" "}
              <a href="https://www.saplingyard.com.au/">
                https://www.saplingyard.com.au/
              </a>
            </motion.p>
          </StyledDescription>
        </StyledBox>
      </StyledLayout>
      <StyledImage>
        <motion.img variants={photoAnimation} src={partners} alt="" />
      </StyledImage>
    </Container>
  );
}

const StyledLayout = styled(motion.div)`
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 860px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
  .line {
    height: 0.5rem;
    background: #a7d2cb;
    margin-bottom: 3rem;
  }
`;

const StyledBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  p {
    text-align: left;
  }
  a {
    color: black;
  }
  @media (max-width: 860px) {
    display: block;
    text-align: center;
  }
`;
const Container = styled(motion.div)`
  margin-bottom: 5vh;
`;

export default Experience;
