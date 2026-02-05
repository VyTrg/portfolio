export type Certificate = {
  name: string;
  issueDate: Date;
};

const certificates: Certificate[] = [
  {
    name: "Claude Code in Action",
    issueDate: new Date("2026-02-05"),
  },
];

export default certificates;
