import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MenuState } from "../MenuState";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MenuDetails = () => {
  const url = useLocation();
  const [menus, setMenus] = useState(MenuState);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const currentMenu = menus.filter(
      (stateMenu) => stateMenu.url === url.pathname
    );
    setMenu(currentMenu[0]);
  }, [menus, url]);

  return (
    <>
      {menu && (
        <StyledDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <StyledHeadlines>
            <h2>{menu.title}</h2>
            <img src={menu.secondaryImg} alt="menu" />
          </StyledHeadlines>

          <StyledItems>
            {menu.menuItems.map((item) => (
              <Item
                title={item.dish}
                description={item.description}
                key={item.dish}
              />
            ))}
          </StyledItems>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled(motion.div)`
  color: white;
`;

const StyledHeadlines = styled.div`
  min-height: 90vh;
  padding-top: 10vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    position: relative;
    padding-bottom: 10vh;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledItems = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 1.5rem 10rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 860px) {
    display: block;
    margin: 2rem;
    margin-top: 5rem;
  }
`;

const StyledMenuItem = styled.div`
  padding: 2.5rem 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #a7d2cb;
    height: 0.3rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
`;

const Item = ({ title, description }) => {
  return (
    <StyledMenuItem>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledMenuItem>
  );
};

export default MenuDetails;
