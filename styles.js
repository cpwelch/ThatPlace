import styled from "styled-components";

import { motion } from "framer-motion";

export const StyledLayout = styled(motion.div)`
  width: 100vw;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 860px) {
    display: block;
    padding: 2rem 1rem;
    text-align: center;
    justify-content: center;
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 2.5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 860px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    @media (max-width: 860px) {
      height: 50vh;
    }
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
  overflow-x: hidden;
`;
