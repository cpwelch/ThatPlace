import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import moment from "moment";
import { validateEmail, validatePhone } from "./Validation";
import InlineError from "./InlineError";
import axios from "axios";

const ContactForm = () => {
  let minimumDate = moment().format().slice(0, 10);

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState();
  const [phone, setPhone] = useState();
  const [phoneError, setPhoneError] = useState();
  const [noOfPeople, setNoOfPeople] = useState();
  const [date, setDate] = useState();
  const [message, setMessage] = useState("");

  const [sent, setSent] = useState(false);

  useEffect(() => {
    validateEmail({ email, setEmailError });
    validatePhone({ phone, setPhoneError });
  }, [email, phone]);

  const formHandler = async (e) => {
    e.preventDefault();
    setSent(true);
    try {
      await axios.post("https://thatplacebackend.herokuapp.com/send_mail", {
        fullname,
        email,
        phone,
        noOfPeople,
        date,
        message,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {!sent ? (
        <StyledForm onSubmit={formHandler}>
          <InputContainer>
            <input
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              required
            />
            {emailError && (
              <InlineError error={emailError} attachedTo="email" />
            )}
            <input
              value={phone || ""}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Contact Number"
              required
            />
            {phoneError && (
              <InlineError error={phoneError} attachedTo="phone" />
            )}
            <input
              value={noOfPeople || ""}
              onChange={(e) => setNoOfPeople(e.target.value)}
              type="number"
              placeholder="Number of Guests"
              required
              min="1"
            />
            <label htmlFor="date">Please choose a date:</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              placeholder="DD-MM-YYY"
              min={minimumDate}
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              cols="10"
              rows="5"
              placeholder="Any additional requirements?"
            />
          </InputContainer>
          <ButtonContainer>
            <Disclaimer>
              *Please note: all booking requests will be confirmed via
              email/phone.
            </Disclaimer>
            <FormButton type="submit">Send Booking Request</FormButton>
          </ButtonContainer>
        </StyledForm>
      ) : (
        <RequestMade>
          <h1>Thanks for making a booking request.</h1>
          <p>
            We will confirm your booking via email or phone within 48 hours.
          </p>
        </RequestMade>
      )}
    </div>
  );
};

const StyledForm = styled(motion.form)`
  width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputContainer = styled(motion.div)`
  width: 100%;
  max-height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-family: "Inter", sans-serif;
  input {
    font-family: "Inter", sans-serif;
    height: 2rem;
    width: 40%;
    padding: 1.5rem 1rem;
    margin: 2rem 1rem;
    border: none;
    border-radius: 1rem;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
  }
  input[type="date"] {
    background-color: white;
    @media (max-width: 860px) {
      height: 2rem;
      padding: 1.5rem 1rem;
    }
  }

  textarea {
    font-family: "Inter", sans-serif;
    resize: none;
    width: 40%;
    padding: 1.5rem 1rem;
    margin: 1rem;
    border: none;
    border-radius: 1rem;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 860px) {
    flex-direction: column;
    max-height: none;
    input {
      width: 100%;
      margin: 2rem 0rem;
    }

    textarea {
      width: 100%;
      margin: 1.5rem 0rem;
    }
  }
`;

const ButtonContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 18%;
  padding: 1.5rem 1rem;
  flex-wrap: wrap;
  @media (max-width: 860px) {
    padding: 0rem;
  }
`;

const FormButton = styled(motion.button)`
  background-color: #f2d388;
  color: black;
  font-weight: lighter;
  border: 3px solid #f2d388;
  font-size: 1rem;
  cursor: pointer;
  padding: 1rem;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  align-self: center;
`;

const Disclaimer = styled(motion.p)``;

const RequestMade = styled(motion.div)`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #a7d2cb;
  @media (max-width: 860px) {
    padding: 2rem 1rem;
  }
`;

export default ContactForm;
