import React from "react";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";
import { StyledImage, StyledDescription } from "../styles";
import partners from "../img/partnersinwine.jpg";
import sapling from "../img/saplingyard.jpg";
import { photoAnimation, lineAnimation } from "../animation";
function Experience() {
  return (
    <motion.div
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
              Lorem Epsum asalsd kamsdn ajnjan sdjasi dkasd hashuda uihsdij a sd
              j asjid ji ansdiu nasdjaijs dja sda siund nasudi nasd anusd
              uiasduasiduasd h hasfnsdgjiasdf asbd asdfbh hbf ainsfnasfnabsf ba
              suifd. Lorem Epsum asalsd kamsdn ajnjan sdjasi dkasd hashuda
              uihsdij a sd j asjid ji ansdiu nasdjaijs dja sda siund nasudi nasd
              anusd uiasduasiduasd h hasfnsdgjiasdf asbd asdfbh hbf
              ainsfnasfnabsf ba suifd.
            </motion.p>
            <motion.p>
              Lorem Epsum asalsd kamsdn ajnjan sdjasi dkasd hashuda uihsdij a sd
              j asjid ji ansdiu nasdjaijs dja sda siund nasudi nasd anusd
              uiasduasiduasd h hasfnsdgjiasdf asbd asdfbh hbf ainsfnasfnabsf ba
              suifd. Lorem Epsum asalsd kamsdn ajnjan sdjasi dkasd hashuda
              uihsdij a sd j asjid ji ansdiu nasdjaijs dja sda siund nasudi nasd
              anusd uiasduasiduasd h hasfnsdgjiasdf asbd asdfbh hbf
              ainsfnasfnabsf ba suifd.
            </motion.p>
          </StyledDescription>
          <StyledImage>
            <motion.img variants={photoAnimation} src={partners} alt="" />
          </StyledImage>
        </StyledBox>
      </StyledLayout>
    </motion.div>
  );
}

const StyledLayout = styled(motion.div)`
  min-height: 100vh;
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
  @media (max-width: 860px) {
    display: block;
    text-align: center;
  }
`;

export default Experience;
