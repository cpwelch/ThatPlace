import React from "react";
import handshake from "../img/handshake.png";
import grow from "../img/grow.png";
import eat from "../img/eat.png";
import love from "../img/love.png";

import food from "../img/Modern-Australian-Restaurant.jpeg";

import styled from "styled-components";

import { StyledLayout, StyledDescription, StyledImage } from "../styles";
import { scrollReveal } from "../animation";
import { UseScroll } from "./UseScroll";

const ServicesSection = () => {
  const [element, controls] = UseScroll();
  return (
    <StyledServices variants={scrollReveal} animate={controls} ref={element}>
      <StyledDescription>
        <h2>
          <span>Quality</span> dining
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={love} alt="" />
            </div>
            <p>
              True service with a smile. We aim to deliver on every aspect when
              it comes to customer service. Without you, we have no business!
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={handshake} alt="" />
            </div>
            <p>
              We partner with local companies to ensure that we can help to
              create a sustainable future for our community to grow into.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={grow} alt="" />
            </div>
            <p>
              Locally sourced ingredients and organic as possible, where
              possible. Ethically produced and extra tasty!
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={eat} alt="" />
            </div>
            <p>
              Eat in our main cafe room, book a room out and dine infront of the
              chef, eat in the cellar door - we've got all angles covered!
            </p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={food} alt="" />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledLayout)`
  @media (max-width: 860px) {
    padding-top: 10vh;
    display: block;
    margin: 0 auto;
    padding: 2rem 0rem;
  }
  h2 {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  p {
    width: 90%;
    padding: 1rem 0rem 4rem 0rem;
    @media (max-width: 860px) {
      padding: 2rem 0rem 3rem 0rem;
      width: 100%;
    }
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 860px) {
    justify-content: center;
    width: 100%;
  }
`;

const StyledCard = styled.div`
  flex-basis: 15rem;
  img {
    width: 3rem;
  }
  @media (max-width: 860px) {
    flex-basis: none;
  }
  .icon {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 860px) {
      justify-content: center;
    }
  }
`;

export default ServicesSection;
