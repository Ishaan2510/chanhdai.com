import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "cortex",
    title: "Cortex",
    period: {
      start: "2026",
    },
    link: "https://cortex-ai-task-platform.vercel.app/",
    skills: [
      "React",
      "Node.js",
      "Express",
      "Python",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "Argo CD",
      "GitHub Actions",
    ],
    description: `Multi-provider LLM orchestration platform deployed on Kubernetes. / [Live](https://cortex-ai-task-platform.vercel.app/) · [Source](https://github.com/Ishaan2510/ai-task-platform)
- Task-aware routing layer across 4 LLM providers (Groq, Cerebras, Gemini, OpenRouter) with rate-limit-aware automatic fallback and full attempted-chain persistence
- Stateless Python worker tier consuming via Redis BRPOP on Kubernetes, decoupling PyMuPDF file processing (up to 80K chars) from the synchronous API
- GitOps pipeline across two repos using GitHub Actions, Docker Hub, and Argo CD (auto-sync, prune, self-heal) with an automated LLM regression eval in CI
- Cloudinary file storage, JWT auth, non-root Docker containers, Kubernetes Secrets
`,
    isExpanded: true,
  },
  {
    id: "dentalbooks",
    title: "DentalBooks",
    period: {
      start: "2026",
    },
    link: "https://dental-books.vercel.app/",
    skills: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Lucide React",
      "localStorage",
      "Service Worker",
      "PWA",
    ],
    description: `Free offline dental clinic invoice & prescription manager built for a real practice. / [Live](https://dental-books.vercel.app/) · [Source](https://github.com/Ishaan2510/dental-books)
- Invoice generation with 23 pre-loaded dental procedures, itemized totals, and print-optimized A4 templates
- Prescription writing over a 15-medicine database with dosage, frequency, and duration; patient directory with search and repeat-visit auto-suggest
- Income dashboard tracking daily, monthly, and lifetime earnings
- Fully offline via localStorage with JSON backup/restore; installable PWA with service worker and mobile-first bottom-tab navigation
`,
  },
  {
    id: "pitlane",
    title: "Pitlane Live",
    period: {
      start: "2025",
    },
    link: "https://pitlane-live-three.vercel.app/",
    skills: [
      "Vue.js",
      "Flask",
      "FastF1",
      "PostgreSQL",
      "Render",
      "Supabase",
      "Vercel",
    ],
    description: `F1 race analytics platform with telemetry pipeline and live race feed. / [Live](https://pitlane-live-three.vercel.app/)
- RESTful Flask backend serving telemetry across 23 F1 circuits to a Vue.js frontend with animated race replay
- Configurable telemetry pipeline parsing raw positional streams with piecewise linear interpolation for sub-second trajectory reconstruction
- SSE-based live race feed with polling fallback; prediction scoring engine with ±2 lap window and confidence multiplier
- Migrated from Azure VM (Nginx/Gunicorn/gevent) to Render + Supabase, resolving PyJWT/urllib3 SSL conflicts via gevent → gthread worker swap
`,
  },
  {
    id: "techreg",
    title: "TechReg Analyst",
    period: {
      start: "2026",
    },
    link: "https://f1-regulations-rag-system.streamlit.app/",
    skills: [
      "Python",
      "LangChain",
      "FAISS",
      "Sentence-Transformers",
      "Groq API",
      "Streamlit",
      "PyMuPDF",
    ],
    description: `Retrieval-augmented analyst over the FIA F1 Technical Regulations with citation-grounded answers. / [Live](https://f1-regulations-rag-system.streamlit.app/) · [Source](https://github.com/Ishaan2510/f1-regulations-rag-system)
- Ingests the 200+ page FIA F1 Technical Regulations rulebook, chunks by article semantics, and answers natural-language queries with cited source paragraphs
- FAISS vector index over sentence-transformer embeddings with score-thresholded retrieval and a re-ranking pass
- LLM responses constrained to retrieved context; PyMuPDF ingestion preserves article numbering so citations point to exact regulation sections
`,
  },
]
