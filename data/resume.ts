import { Resume } from "./types";

import education from "./resume/education";
import experiences from "./resume/experiences";
import projects from "./resume/projects";
import skills from "./resume/skills";
import about from "./resume/about";

const resume: Resume = {
  name: "Braden Frazer",
  image: "/logo.png",
  title: "UX Engineer, Design Engineer",
  sections: [about, experiences, education, projects, skills],
};

export default resume;
