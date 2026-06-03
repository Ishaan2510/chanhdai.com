import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  // Languages
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Languages"],
  },
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Languages"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Languages"],
  },
  {
    key: "sql",
    title: "SQL",
    href: "https://en.wikipedia.org/wiki/SQL",
    categories: ["Languages"],
  },
  {
    key: "cpp",
    title: "C++",
    href: "https://isocpp.org/",
    categories: ["Languages"],
  },

  // Backend
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Backend"],
  },
  {
    key: "express",
    title: "Express",
    href: "https://expressjs.com/",
    categories: ["Backend"],
  },
  {
    key: "flask",
    title: "Flask",
    href: "https://flask.palletsprojects.com/",
    categories: ["Backend"],
  },
  {
    key: "fastapi",
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    categories: ["Backend"],
  },

  // Frontend
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Frontend"],
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Frontend"],
  },
  {
    key: "vue",
    title: "Vue.js",
    href: "https://vuejs.org/",
    categories: ["Frontend"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Frontend"],
  },

  // Databases
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Databases"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Databases"],
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Databases"],
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Databases"],
  },

  // DevOps
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["DevOps"],
  },
  {
    key: "kubernetes",
    title: "Kubernetes",
    href: "https://kubernetes.io/",
    categories: ["DevOps"],
  },
  {
    key: "githubactions",
    title: "GitHub Actions",
    href: "https://github.com/features/actions",
    categories: ["DevOps"],
  },
  {
    key: "azure",
    title: "Azure",
    href: "https://azure.microsoft.com/",
    categories: ["DevOps"],
  },
  {
    key: "nginx",
    title: "Nginx",
    href: "https://nginx.org/",
    categories: ["DevOps"],
  },

  // Machine Learning
  {
    key: "langchain",
    title: "LangChain",
    href: "https://www.langchain.com/",
    categories: ["ML"],
  },
  {
    key: "faiss",
    title: "FAISS",
    href: "https://faiss.ai/",
    categories: ["ML"],
  },
  {
    key: "scikitlearn",
    title: "scikit-learn",
    href: "https://scikit-learn.org/",
    categories: ["ML"],
  },
]
