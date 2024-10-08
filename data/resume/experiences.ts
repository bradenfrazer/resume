import { Section } from "../types";

const experiences: Section = {
  title: "EXPERIENCE",
  subsections: [
    {
      title: "Thesis",
      titleHref: "https://www.takethesis.com",
      description: "UX Engineer • April 2024 - Present",
      body: [
        {
          type: "list",
          items: [
            "Orchestrated the website redesign, implementing a refreshed design system and style guide sitewide.",
            "Generated $1M+ in revenue through building 4-5 conversion rate optimization (CRO) A/B tests monthly.",
          ],
        },
      ],
    },
    {
      title: "Baylor Scott & White Health (Contract)",
      titleHref: "https://www.bswhealth.com",
      description: "Front End Developer (Brand) • January 2024 - April 2024",
      body: [
        {
          type: "list",
          items: [
            "Ensured adherence to brand standards and the internal design system across BSWH public-facing websites.",
            "Analyzed and improved UI/UX across public websites after the migration from Sharepoint to Sitecore.",
          ],
        },
      ],
    },
    {
      title: "Dropps",
      titleHref: "https://www.dropps.com/",
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
            "Pioneered efforts to move website code from Shopify's liquid engine over to React for greater interactivity.",
          ],
        },
      ],
    },
    {
      title: "Proton.ai",
      titleHref: "https://www.proton.ai",
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
