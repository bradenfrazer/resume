import { Section } from "../types";

const projects: Section = {
  title: "PROJECTS",
  subsections: [
    {
      title: "Nintendle",
      titleHref: "https://nintendle.bradenfrazer.com",
      description: "Word Guessing Game | React, Tailwind, Vite, Zustand",
      body: [
        {
          type: "paragraph",
          items: [
            "Nintendle is a Wordle clone with an emphasis on Nintendo-themed solutions. The dictionary of solutions was curated by hand and includes a variety of Nintendo characters, themes, locations, and concepts.",
          ],
        },
      ],
    },
    {
      title: "Pokedex",
      titleHref: "/projects/pokedex/",
      description: "Pokemon Encyclopedia | React, Tailwind, APIs",
      body: [
        {
          type: "paragraph",
          items: [
            "Pokedex app based on the Pokemon series games, built in React, and sourced by the awesome PokeAPI.",
          ],
        },
      ],
    },
    {
      title: "National Parks",
      titleHref: "/projects/nationalparks/",
      description: "Travel Informational App | Vue, SCSS, APIs",
      body: [
        {
          type: "paragraph",
          items: [
            "A listing of national parks located in the United States pulled from the National Park Service API.",
          ],
        },
      ],
    },
    {
      title: "Weathrr",
      titleHref: "/projects/weathrr/",
      description: "Simple Weather App | React, Bootstrap, APIs",
      body: [
        {
          type: "paragraph",
          items: [
            "Weather conditions app built in React. The location name, current temperature, humidity, and conditions are pulled and displayed from OpenWeatherMap's API.",
          ],
        },
      ],
    },
  ],
};

export default projects;
