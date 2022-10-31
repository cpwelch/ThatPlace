import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade } from "../animation";
import { UseScroll } from "./UseScroll";
import FacebookLogo from "../img/facebook.png";
import InstagramLogo from "../img/instagram.png";
import TripadvisorLogo from "../img/tripadvisor.png";
import moment from "moment";
import { Link } from "react-router-dom";

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
        <Container>
          <ul>
            <h3>Navigate</h3>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/menu">
              <li>Our Menu</li>
            </Link>
            <Link to="/experience">
              <li>The Experience</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </Container>
        <Container>
          <h3>Follow us</h3>
          <img src={FacebookLogo} alt="" />
          <img src={InstagramLogo} alt="" />
          <img src={TripadvisorLogo} alt="" />
        </Container>
        <Container>
          <ul>
            <h3>Find us at</h3>
            <li>That Place on Kings,</li>
            <li>Kings Road,</li>
            <li>Bungendore,</li>
            <li>NSW</li>
          </ul>
        </Container>
        <Container>
          <Link to="/contact">
            <BookingButton>Make Booking</BookingButton>
          </Link>
        </Container>
      </StyledWrapper>
      <p>ⓒ That Place on Kings {moment().year()}</p>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.footer)`
  overflow: hidden;
  min-height: 10vh;
  position: relative;
  padding: 1rem 10rem;
  background-color: #f2d388;
  p {
    color: #1a1710;
    text-align: center;
    padding: 2rem 0rem 1rem 0rem;
  }
  @media (max-width: 860px) {
    padding: 4rem 2rem 0rem 2rem;
  }
`;

const StyledWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;
  @media (max-width: 860px) {
    max-height: 30vh;
    flex-direction: column;
    justify-content: center;
    gap: 3.5vw;
    flex-wrap: wrap;
  }
`;

const Container = styled(motion.div)`
  position: relative;
  color: #1a1710;
  ul {
    list-style-type: none;
  }
  h3 {
    color: #1a1710;
    margin-bottom: 1rem;
    font-weight: lighter;
    text-decoration: underline;
    line-height: 1rem;
  }
  img {
    width: 2rem;
    margin: 0.5rem;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #1a1710;
  }
`;

const BookingButton = styled(motion.button)`
  background-color: #1a1710;
  border: solid 3px #1a1710;
  color: white;
  @media (max-width: 860px) {
    padding: 0.5rem 1rem;
  }
`;

export default Footer;
