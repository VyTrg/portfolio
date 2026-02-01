export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
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
