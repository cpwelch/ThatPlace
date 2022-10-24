import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import moment from "moment";

const ContactForm = () => {
  let minimumDate = moment().format().slice(0, 10);
  return (
    <StyledForm>
      <input type="text" id="name" placeholder=" Full Name" required />
      <input type="email" id="email" placeholder=" Email Address" required />
      <input
        type="number"
        id="contactNo"
        placeholder=" Contact Number"
        required
      />
      <input
        type="numberOfPeople"
        id="noOfPeople"
        placeholder=" Number of Guests"
        required
      />
      <input type="date" id="date" min={minimumDate} />

      <textarea
        name="message"
        id="message"
        cols="10"
        rows="5"
        placeholder="Any additional requirements?"
      />
      <ButtonContainer>
        <Disclaimer>
          *Please note that all booking requests will be confirmed via email or
          phone.
        </Disclaimer>
        <FormButton type="submit">Send Booking Request</FormButton>
      </ButtonContainer>
    </StyledForm>
  );
};

const StyledForm = styled(motion.form)`
  display: flex;
  align-items: flex-start;
  direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: "Inter", sans-serif;

  input {
    font-family: "Inter", sans-serif;
    height: 2rem;
    width: 35%;
    padding: 1.5rem 1rem;
    margin: 1rem;
    border: none;
    border-radius: 1rem;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
  }
  textarea {
    font-family: "Inter", sans-serif;
    resize: none;
    width: 35%;
    padding: 1.5rem 1rem;
    margin: 1rem;
    border: none;
    border-radius: 1rem;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 860px) {
    flex-direction: column;
    input {
      width: 100%;
    }
    textarea {
      width: 100%;
    }
  }
`;
const ButtonContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FormButton = styled(motion.div)`
  background-color: #a7d2cb;
  color: black;
  font-weight: medium;
  border: 3px solid #a7d2cb;
  font-size: 1rem;
  cursor: pointer;
  padding: 1rem;
  margin: 1rem;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Disclaimer = styled(motion.p)``;

export default ContactForm;
