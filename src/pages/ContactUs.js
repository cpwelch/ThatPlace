import React from "react";

import { LayoutGroup, motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import FacebookLogo from "../img/facebook.png";
import InstagramLogo from "../img/instagram.png";
import TripadvisorLogo from "../img/tripadvisor.png";
import phone from "../img/phone.png";
import email from "../img/email.png";

import styled from "styled-components";
import Toggle from "../components/Toggle";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Toggle title="Book A Table">
              <LayoutGroup id="a">
                <ToggleDiv>
                  <ContactForm layout />
                </ToggleDiv>
              </LayoutGroup>
            </Toggle>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Toggle title="Contact Us">
              <LayoutGroup id="b">
                <ToggleDiv>
                  <p>
                    <img src={phone} alt="" />
                    You can contact us on phone by calling: +61 404 456 456.
                  </p>
                  <p>
                    <span>
                      <img src={email} alt="" />
                    </span>
                    Alternatively you can email us on contact@thatplace.com.au.
                  </p>
                </ToggleDiv>
              </LayoutGroup>
            </Toggle>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <div className="social">
              <h2>Follow us on: </h2>
              <img src={FacebookLogo} alt="" />
              <img src={InstagramLogo} alt="" />
              <img src={TripadvisorLogo} alt="" />
            </div>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  h4 {
    font-weight: lighter;
    font-size: 4rem;
    margin: 2rem;
    cursor: pointer;
  }
  @media (max-width: 860px) {
    padding: 2rem 1rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
    @media (max-width: 860px) {
      font-size: 3rem;
    }
  }
  h4 {
    @media (max-width: 860px) {
      font-size: 3rem;
    }
  }
  p {
    padding: 1rem 0rem;
  }

  img {
    width: 4rem;
    margin: 0rem 0rem 0rem 2rem;
    @media (max-width: 860px) {
      margin: 0;
    }
  }
  .social {
    margin-bottom: 10vh;
    img {
      margin: 0rem 0rem 0rem 2rem;
    }
  }
`;

const ToggleDiv = styled(motion.div)`
  display: block;
  padding: 1rem 4rem;
  img {
    width: 2.2rem;
    padding: 0rem 0.8rem 0rem 0rem;
  }
  @media (max-width: 860px) {
    padding: 1rem 3rem;
  }
`;

export default ContactUs;
