import { CodeXmlIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "lawbot-express",
    companyName: "LawBot Express",
    positions: [
      {
        id: "1",
        title: "Software Engineering Intern",
        employmentPeriod: {
          start: "05.2026",
          end: "07.2026",
        },
        // employmentType: "Industrial Training",
        icon: <CodeXmlIcon />,
        description: `- Industrial training internship at a legal-tech startup.
- Backend feature development on a legal automation platform.
- Location: Remote / Ahmedabad.`,
        skills: ["Backend", "API Development", "Legal Tech"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
]
