import React from "react";

import { LayoutGroup, motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
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
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
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
                    You can contact us on phone by calling: +61 404 456 456.
                  </p>
                  <p>
                    Alternatively you can email us on contact@thatplace.com.au.
                  </p>
                </ToggleDiv>
              </LayoutGroup>
            </Toggle>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <h2>Follow us on: </h2>
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
    padding: 2rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 860px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    @media (max-width: 860px) {
      font-size: 2rem;
    }
  }
`;

const ToggleDiv = styled(motion.div)`
  display: block;
  padding: 2rem;
`;

export default ContactUs;
