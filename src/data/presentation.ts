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
};

export default presentation;
