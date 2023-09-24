import { Section } from "../types";

const skills: Section = {
  title: "SKILLS",
  subsections: [
    {
      title: "Languages & Tech",
      description: "",
      body: [
        {
          type: "pills",
          items: [
            "HTML",
            "CSS",
            "SCSS",
            "Tailwind CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "REST APIs",
            "Git",
          ],
        },
      ],
    },
    {
      title: "UI/UX",
      description: "",
      body: [
        {
          type: "pills",
          items: [
            "Figma",
            "Storybook",
            "A/B Testing",
            "Design Systems",
            "MUI",
            "Headless Components",
            "WCAG / Accessibility",
          ],
        },
      ],
    },
    {
      title: "Other",
      description: "",
      body: [
        {
          type: "pills",
          items: ["Photoshop", "Illustrator", "Photography", "Video Editing"],
        },
      ],
    },
  ],
};

export default skills;
