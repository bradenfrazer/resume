import { Section } from "../types";

const experiences: Section = {
  title: "EXPERIENCE",
  subsections: [
    {
      title: "Baylor Scott & White Health (Contract)",
      description: "Front End Developer (Brand) • January 2024 - Present",
      body: [
        {
          type: "list",
          items: [
            "Ensured adherence to brand standards and the internal design system across BSWH public-facing websites.",
            "Analyzed and improved UI/UX across public websites after the migration from Sharepoint to Sitecore.",
            "Established best practices for development within the Brand organization, such as Git source control and project management tooling. ",
          ],
        },
      ],
    },
    {
      title: "Dropps",
      titleHref: "https://www.bradenfrazer.com/DroppsUXBrief.pdf",
      description: "UX Engineer • April 2022 - August 2023",
      body: [
        {
          type: "list",
          items: [
            "Systematized the design pattern library in code using Tailwind CSS and configured design tools.",
            "Ensured consistency between Figma and React components using Storybook.",
            "Backed design and 50+ A/B test initiatives with formal UX studies from Baymard and Nielsen Norman Group.",
            "Converted low-fidelity designs into production code for new website features as the lead frontend engineer.",
            "Implemented WCAG (accessibility) best practices including ARIA roles and color contrast.",
            "Led the migration from Material UI to Radix headless components to improve theming, accessibility, and enable server-side rendering.",
            "Pioneered efforts to move website code from Shopify's liquid engine over to React for greater interactivity.",
          ],
        },
      ],
    },
    {
      title: "Proton.ai",
      description: "Frontend Engineer • May 2021 - March 2022",
      body: [
        {
          type: "list",
          items: [
            "Collaborated with designers to conduct user research and build features to fit client needs on an AI-powered SaaS sales platform for distributors.",
          ],
        },
      ],
    },
    {
      title: "Gannett | USA TODAY NETWORK",
      description: "Web Developer • March 2018 – May 2021",
      body: [
        {
          type: "list",
          items: ["Built and maintained 1,000+ templated WordPress sites."],
        },
      ],
    },
  ],
};

export default experiences;
