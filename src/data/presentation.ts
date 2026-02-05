type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "tuongvy03.it@gmail.com",
  title: "Hi, I’m Vy👋",
  description: `I'm a **backend developer**.
  I'm researching about **HIPAA** topic, personal information protection in healthcare system. I want to reach some archivements in not only industry but also in research field.`,
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/vy-truong-95119a257/",
    },
    {
      label: "Github",
      link: "https://github.com/VyTrg",
    },
  ],
  // profile:
  //   "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export default presentation;
