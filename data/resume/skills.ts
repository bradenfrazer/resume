import { Section } from "../types";

const skills: Section = {
  title: "SKILLS",
  subsections: [
    {
      title: "Web Development",
      description: "Languages & Tech",
      body: [
        {
          type: "pills",
          items: ["CSS / SCSS", "TypeScript", "React", "Vue", "Git"],
        },
      ],
    },
    {
      title: "",
      description: "UI/UX",
      body: [
        {
          type: "pills",
          items: [
            "Tailwind CSS",
            "Storybook",
            "Figma",
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
          items: ["Photoshop / Illustrator", "Photography", "Video Editing"],
        },
      ],
    },
  ],
};

export default skills;
