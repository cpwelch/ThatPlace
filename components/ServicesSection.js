import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import food from "../img/Modern-Australian-Restaurant.jpeg";

import styled from "styled-components";

import {
  StyledLayout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";
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
              <img src={clock} alt="" />
              <h3>Great Service</h3>
            </div>
            <p>Lorem ipsum ipsa abLorem ipsum ipsa ab</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Local Partners</h3>
            </div>
            <p>Lorem ipsum ipsa abLorem ipsum ipsa ab</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Quality Food</h3>
            </div>
            <p>Lorem ipsum ipsa Lorem ipsum ipsa ab</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Great Value</h3>
            </div>
            <p>Lorem ipsum ipsa Lorem ipsum ipsa ab</p>
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
    margin-top: 10vh;
    display: block;
    margin: 0 auto;
  }
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
    @media (max-width: 860px) {
      padding: 2rem 0rem 3rem 0rem;
    }
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 860px) {
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 0.5rem;
      padding: 1rem;
      @media (max-width: 860px) {
        margin-left: 0.1rem;
        padding: 0.5rem;
      }
    }
  }
`;

export default ServicesSection;
