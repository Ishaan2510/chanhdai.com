import { TECH_STACK } from "../data/tech-stack"

const CATEGORY_ORDER = [
  "Languages",
  "Backend",
  "Frontend",
  "Databases",
  "DevOps",
  "ML",
]

export function TechStack() {
  return (
    <div>
      <h3 className="sr-only">Tech Stack</h3>

      <div className="p-4">
        <ul className="flex flex-wrap gap-2">
          {TECH_STACK.slice()
            .sort(
              (a, b) =>
                CATEGORY_ORDER.indexOf(a.categories[0]) -
                CATEGORY_ORDER.indexOf(b.categories[0])
            )
            .map((tech) => (
              <li key={tech.key} className="flex">
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={tech.title}
                  className="flex items-center gap-1.5 rounded-full bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-foreground ring-1 ring-border/80 select-none dark:bg-zinc-900"
                >
                  <span
                    aria-hidden
                    className="size-3.5 shrink-0 bg-current"
                    style={{
                      maskImage: `url(/tech-stack-icons/${tech.key}.svg)`,
                      WebkitMaskImage: `url(/tech-stack-icons/${tech.key}.svg)`,
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                  />
                  {tech.title}
                </a>
              </li>
            ))}
        </ul>
      </div>

      <div className="flex h-px" />
    </div>
  )
}
