import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const InlineError = ({ error, attachedTo }) => {
  return <ErrorMessage htmlFor={attachedTo}>{error}</ErrorMessage>;
};

const ErrorMessage = styled(motion.p)`
  color: red;
  padding: 0rem 1rem;
  margin: 0rem 1rem;
  font-size: 1rem;
  text-align: left;
`;

export default InlineError;
