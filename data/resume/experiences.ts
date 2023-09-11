import { Section } from "../types";

const experiences: Section = {
  title: "EXPERIENCE",
  subsections: [
    {
      title: "Dropps",
      titleHref: "/uploads/content/DroppsUXBrief.pdf",
      description: "Software Engineer (UX) | April 2022 - August 2023",
      body: [
        {
          type: "list",
          items: [
            "Pioneered efforts to move website code from Shopify's liquid engine over to React for greater interactivity.",
            "Led the migration from Material UI to Radix headless components to improve theming, accessibility, and enable server-side rendering.",
            "Converted low-fidelity designs into high-fidelity production code.",
            "Systematized the design pattern library using Tailwind and configured design tools.",
            "Ensured consistency between Figma and React components using Storybook.",
            "Backed design and A/B test initiatives with formal UX studies from Baymard and Nielsen Norman Group.",
            "Implemented WCAG (accessibility) best practices including ARIA roles and color contrast.",
            "Facilitated collaboration of engineering and design.",
            "Established consistent styling and user experience across the website.",
          ],
        },
      ],
    },
    {
      title: "Proton.ai",
      description: "Frontend Engineer | May 2021 - March 2022",
      body: [
        {
          type: "list",
          items: [
            "Developed new features and maintained existing functionality in Vue/Nuxt on an AI-powered SaaS sales platform for distributors.",
            "Collaborated with designers to conduct user research and build features to fit client needs.",
            "Refined best practices and code standards as Proton's second frontend engineer.",
          ],
        },
      ],
    },
    {
      title: "Gannett",
      description: "Web Developer | March 2018 – May 2021",
      body: [
        {
          type: "list",
          items: ["Built and maintained reusable WordPress websites."],
        },
      ],
    },
  ],
};

export default experiences;
