export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "kanban",
    techs: ["Typescript", "PostgreSQL", "NextJS"],
    link: "https://github.com/VyTrg/kanban",
    isComingSoon: true,
  },
  {
    title: "ecommserse",
    techs: ["Typescript", "SQLServer", "Keycloak", "ExpressJS", "ReactJS"],
    link: "https://github.com/VyTrg/ecommerse",
    isComingSoon: false,
  },
  {
    title: "Chatroom",
    techs: ["Java", "SQLServer", "Spring Boot"],
    link: "https://github.com/VyTrg/Chatroom",
    isComingSoon: false,
  },
];

export default projects;
