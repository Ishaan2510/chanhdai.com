import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Ishaan",
  lastName: "Goswami",
  displayName: "Ishaan Goswami",
  username: "ishaan2510",
  gender: "male",
  pronouns: "he/him",
  bio: "Backend & systems engineer. Building distributed systems with care, precision, and a stubborn dislike of 3am pages.",
  flipSentences: [
    "Backend & systems engineer.",
    "Distributed systems builder.",
    "Container-native deployments.",
  ],
  address: "Ahmedabad, India",
  email: "aXNoYWFuZ29zd2FtaTczNUBnbWFpbC5jb20=", // base64 encoded
  website: "https://github.com/Ishaan2510",
  jobTitle: "Computer Science Undergraduate",
  jobs: [
    {
      title: "B.Tech CSE",
      company: "PDEU",
      website: "https://www.pdpu.ac.in/",
      experienceId: "pdeu",
    },
    {
      title: "B.S. Data Science",
      company: "IIT Madras",
      website: "https://study.iitm.ac.in/",
      experienceId: "iitm",
    },
  ],
  about: `
- I'm Ishaan, a third-year CS undergrad at PDEU Ahmedabad, concurrently pursuing a B.S. in Data Science from IIT Madras.
- My focus is on the parts of software that decide whether a system stays up under real load. Distributed systems, LLM orchestration, container-native deployments, GitOps pipelines.
- Shipped three real projects end to end: [Cortex](https://cortex-ai-task-platform.vercel.app/) (multi-provider LLM orchestration on Kubernetes), [Pitlane Live](https://pitlane-live-three.vercel.app/) (F1 race analytics with telemetry pipeline), and [TechReg Analyst](https://github.com/Ishaan2510/f1-regulations-rag-system) (retrieval-augmented analyst over the FIA F1 Technical Regulations).
- Open to opportunities. If you think I can help, feel free to reach out by email.
`,
  avatar: "/ishaan.jpeg",
  avatarVariants: {
    lightOff: "/ishaan.jpeg",
    lightOn: "/ishaan.jpeg",
    darkOff: "/ishaan.jpeg",
    darkOn: "/ishaan.jpeg",
  },
  ogImage: "/og-image.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "Ishaan Goswami",
    "backend engineer",
    "distributed systems",
    "Kubernetes",
    "Next.js",
    "portfolio",
  ],
  dateCreated: "2026-06-01", // YYYY-MM-DD
}
