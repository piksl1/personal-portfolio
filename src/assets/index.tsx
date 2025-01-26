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
