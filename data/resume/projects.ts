import { Section } from "../types";

const projects: Section = {
  title: "PROJECTS",
  subsections: [
    {
      title: "Nintendle",
      titleHref: "https://nintendle.bradenfrazer.com",
      description: "Word Guessing Game | React, Tailwind CSS, Zustand",
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
      titleHref: "https://www.bradenfrazer.com/projects/pokedex/",
      description: "Pokemon Encyclopedia | React, Tailwind CSS, PokeAPI",
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
      title: "Weathrr",
      titleHref: "https://weathrr.bradenfrazer.com",
      description: "Weather App | React, Tailwind CSS, OpenWeatherMap API",
      body: [
        {
          type: "paragraph",
          items: [
            "Weather conditions app built in React. The current temperature, humidity, pressure, wind speed, and conditions are pulled from OpenWeatherMap's API.",
          ],
        },
      ],
    },
    {
      title: "National Parks",
      titleHref: "https://www.bradenfrazer.com/projects/nationalparks/",
      description: "Travel Info App | Vue, SCSS, National Park Service API",
      body: [
        {
          type: "paragraph",
          items: [
            "A listing of national parks located in the United States pulled from the National Park Service API.",
          ],
        },
      ],
    },
  ],
};

export default projects;
