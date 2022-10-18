import React from "react";

import styled from "styled-components";
import { StyledLayout, StyledHide } from "../styles";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";
import { UseScroll } from "./UseScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = UseScroll();
  return (
    <StyledFaq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="What are your opening hours?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam corporis, incidunt veniam quibusdam cupiditate laborum
              praesentium minus, nesciunt quam error quas nam minima odit?
            </p>
          </div>
        </Toggle>
        <Toggle title="Where are you located?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam corporis, incidunt veniam quibusdam cupiditate laborum
              praesentium minus, nesciunt quam error quas nam minima odit?
            </p>
          </div>
        </Toggle>
        <Toggle title="Can you advise on allergy info?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam corporis, incidunt veniam quibusdam cupiditate laborum
              praesentium minus, nesciunt quam error quas nam minima odit?
            </p>
          </div>
        </Toggle>
        <Toggle title="Can I Book online?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam corporis, incidunt veniam quibusdam cupiditate laborum
              praesentium minus, nesciunt quam error quas nam minima odit?
            </p>
          </div>
        </Toggle>
      </LayoutGroup>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledLayout)`
  display: block;
  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #1a1710;
    height: 0.15rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
