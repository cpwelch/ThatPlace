import alacarte from "./img/alacarte.jpg";
import roast from "./img/roast.jpg";
import plantbased from "./img/plantbased.jpg";

export const MenuState = () => {
  return [
    {
      title: "A La Carte",
      mainImg: alacarte,
      secondaryImg: alacarte,
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
      mainImg: roast,
      secondaryImg: roast,
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
      mainImg: plantbased,
      secondaryImg: plantbased,
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
