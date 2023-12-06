import { Section } from "../types";

const projects: Section = {
  title: "PROJECTS",
  subsections: [
    {
      title: "Wonder Design System",
      titleHref:
        "https://www.figma.com/file/m2Wy4Noptp6XkxBIG9ZGGj/Wonder-Design-System?type=design&node-id=182%3A6921&mode=design&t=rCMZUlKCNIHOfs7R-1",
      description: "Design System • Figma",
      body: [
        {
          type: "paragraph",
          items: [
            "A colorful, comic-like design system, inspired by Nintendo's hit 2023 video game 'Super Mario Wonder', and tailored to my own personal portfolio and brand.",
          ],
        },
      ],
    },
    {
      title: "Dropps UX Brief",
      titleHref: "https://www.bradenfrazer.com/DroppsUXBrief.pdf",
      description: "UX Documentation • React, Tailwind CSS, Figma",
      body: [
        {
          type: "paragraph",
          items: [
            "A brief that highlights UX work I performed during my time at Dropps. It covers design system work, some components built, A/B tests ran, and other UI improvements.",
          ],
        },
      ],
    },
    {
      title: "Nintendle",
      titleHref: "https://nintendle.bradenfrazer.com",
      description: "Word Guessing Game • React, Tailwind CSS, Zustand",
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
      title: "Weathrr",
      titleHref: "https://weathrr.bradenfrazer.com",
      description: "Weather App • React, Tailwind CSS, OpenWeatherMap API",
      body: [
        {
          type: "paragraph",
          items: [
            "Weather conditions app built in React. The current temperature, humidity, pressure, wind speed, and conditions are pulled from OpenWeatherMap's API.",
          ],
        },
      ],
    },
  ],
};

export default projects;
