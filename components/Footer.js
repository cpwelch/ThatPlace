import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade } from "../animation";
import { UseScroll } from "./UseScroll";

const Footer = () => {
  const [element, controls] = UseScroll();

  return (
    <StyledFooter
      ref={element}
      variants={fade}
      animate={controls}
      initial="hidden"
    >
      <StyledWrapper>
        <ul>
          <li>Home</li>
          <li>Our Menu</li>
          <li>The Experience</li>
          <li>Contact</li>
        </ul>
        <div className="copyright">
          <p>Copyright That Place Restaurants 2022</p>
        </div>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Trip Advisor</li>
        </ul>
        {/* <BackToTopButton>Back To Top</BackToTopButton> */}
      </StyledWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.footer)`
  min-height: 10vh;
  position: relative;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #c98474;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.5s ease;
  }
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    flex-direction: column;
  }
  li {
    font-size: small;
    position: relative;
    color: white;
    cursor: pointer;
    padding: 0rem 0rem 1rem 0rem;
  }

  @media (max-width: 860px) {
    padding: 2rem;
    ul {
      padding: 2rem;
      width: 100%;
    }
    li {
      padding: 0;
      margin: 0;
    }
  }
`;

const StyledWrapper = styled(motion.div)`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .copyright {
    display: flex;
    flex-direction: column;

    p {
      vertical-align: bottom;
      margin-top: 30%;
      font-size: small;
      color: white;
      text-decoration: none;
      padding: 0;
      text-align: center;
    }
  }
`;

const BackToTopButton = styled(motion.button)`
  padding: 1rem;
  position: absolute;
  top: 50%;
  right: 1%;
  background-color: #f2d388;
  box-shadow: 0px 0px 10px 1px #313131;
`;

export default Footer;
