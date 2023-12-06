import { Section } from "../types";

const skills: Section = {
  title: "SKILLS",
  subsections: [
    {
      title: "UI/UX",
      description: "",
      body: [
        {
          type: "pills",
          items: [
            "Figma",
            "Design Systems",
            "A/B Testing",
            "Storybook",
            "Component Libraries",
            "WCAG / Accessibility",
          ],
        },
      ],
    },
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
