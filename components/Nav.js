import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import useScrollPosition from "../components/useScrollPosition";

const Nav = () => {
  const { pathname } = useLocation();

  const [isShrunk, setIsShrunk] = useState(false);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const scrollPositionHandler = () => {
      if (scrollPosition >= 80) {
        setIsShrunk(true);
        console.log(scrollPosition);
      } else if (scrollPosition < 80) {
        setIsShrunk(false);
      }
    };
    scrollPositionHandler();
  }, [scrollPosition]);

  return (
    <StyledNav id="navbar" isShrunk={isShrunk}>
      <Link to="/">
        <img src={Logo} alt="Logo" id="logo" />
      </Link>

      <ul>
        <li>
          <Link to="/menu">OUR MENU</Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/menu" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/experience">THE EXPERIENCE</Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/experience" ? "100%" : "0%" }}
          />{" "}
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #1a1710;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
    font-size: ${(props) => (!props.isShrunk ? "1rem" : ".8rem")};
    transition: all 0.75s ease;
  }
  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }
  li {
    margin-left: 5rem;
    position: relative;
  }

  img {
    padding: 0;
    height: ${(props) => (!props.isShrunk ? "6rem" : "3.5rem")};
    transition: all 0.75s ease;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 1.5rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
      margin: 0;
    }
  }
`;

const StyledLine = styled(motion.div)`
  height: 0.175rem;
  width: 5%;
  position: absolute;
  background-color: #f2d388;
  bottom: -80%;
  left: 0%;
`;

export default Nav;
