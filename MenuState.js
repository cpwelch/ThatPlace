import React from "react";

import athlete from "./img/athlete-small.png";
import racer from "./img/theracer-small.png";
import goodtimes from "./img/goodtimes-small.png";

export const MenuState = () => {
  return [
    {
      title: "A La Carte",
      mainImg: athlete,
      secondaryImg: athlete,
      url: "/menu/a-la-carte",
      menuItems: [
        {
          dish: "Pizza & Chips",
          description:
            "Homemade Sourdough pizza with the finest local ingredients.",
        },
        {
          dish: "Burger & Sweet Potato Fries",
          description:
            "Homemade Beef patty with the finest artisan Mayonaise, finished with locally grown pickles and relish.",
        },
      ],
    },
    {
      title: "Roasts",
      mainImg: racer,
      secondaryImg: racer,
      url: "/menu/roasts",
      menuItems: [
        {
          dish: "Chicken Roast",
          description:
            "Rosemary & Thyme Chicken, roasted vegetables, onion gravy and mashed Potato.",
        },
        {
          dish: "Beef Roast",
          description:
            "Salted Roast Beed, roasted vegetables, onion gravy and mashed Potato..",
        },
      ],
    },
    {
      title: "Plantbased",
      mainImg: goodtimes,
      secondaryImg: goodtimes,
      url: "/menu/plantbased",
      menuItems: [
        {
          dish: "Carbonara Pasta",
          description:
            "Cashew Cream pasta served with tempeh bacon bits, rocket and freshly cracked black pepper",
        },
        {
          dish: "Tofu Pad Thai",
          description:
            "Marinated Chili Tofu, pak choi, green vegetables, rice noodles, peanut sauce and crispy shallots.",
        },
      ],
    },
  ];
};
