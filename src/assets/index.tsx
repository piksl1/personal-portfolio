import GithubLineIcon from "remixicon-react/GithubLineIcon";
import LinkedinLineIcon from "remixicon-react/LinkedinLineIcon";

export const firstpIcons = [
  <GithubLineIcon key="github" />,
  <LinkedinLineIcon key="linkedin" />,
];

//About me
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import AwardFillIcon from "remixicon-react/AwardFillIcon";

export const aboutData = [
  {
    title: "Github Repos",
    amount: 348,
    icon: <GithubFillIcon />,
  },
  {
    title: "Successful Projects",
    amount: 227,
    icon: <Projector2LineIcon />,
  },
  {
    title: "Satisfied clients",
    amount: 176,
    icon: <GroupLineIcon />,
  },
  {
    title: "Awards and Recognition",
    amount: 12,
    icon: <AwardFillIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText = `Passionate about building responsive, user-centric web applications with clean, maintainable code. Proficient in modern development stacks including React.js and Next.js, with strong foundations in semantic HTML, CSS,JavaScript, and TypeScript. I leverage Tailwind CSS to streamline styling while maintaining design consistency, and utilize GitHub for version control and collaborative workflows. Committed to implementing pixel-perfect UIs that balance technical excellence with exceptional user experiences.`;

//End of About me

//Experience
export const experienceData = [
  {
    year: 1,
    title: "Foundation and Basics",
    education: "High school diploma",
    experience: [
      "Basic HTML/CSS: Learned through tutorials and online courses",
      "Personal projects: Built and deployed static websites using GitHub Pages",
    ],
  },
  {
    year: 2,
    title: "Frontend Specialization",
    education: "Online certifications (Udemy, Coursera)",
    experience: [
      "Advanced CSS: Mastered Flexbox, Grid, and responsive design principles",
      "JavaScript ES6+: Developed interactive web components and DOM manipulation",
      "React fundamentals: Built SPA projects with React.js and React Router",
    ],
  },
  {
    year: 3,
    title: "Professional Development",
    education: "Bachelor's in Computer Science",
    experience: [
      "Production-ready projects: Implemented TypeScript and Next.js frameworks",
      "State management: Gained experience with Context API and Zustand",
      "Collaboration: Worked with UI/UX designers on client projects",
    ],
  },
  {
    year: 4,
    title: "Advanced Implementation",
    education: "Professional workshops & conferences",
    experience: [
      "Full-stack exposure: Integrated REST APIs with frontend applications",
      "Performance optimization: Implemented code splitting and lazy loading",
      "Mentorship: Guided junior developers in code reviews and best practices",
    ],
  },
];
