import { MailIcon } from "lucide-react"

import { Icons } from "@/components/icons"
import type { SocialLink } from "@/features/portfolio/types/social-links-v2"

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "github",
    icon: <Icons.github />,
    title: "GitHub",
    handle: "Ishaan2510",
    href: "https://github.com/Ishaan2510",
  },
  {
    name: "linkedin",
    icon: <Icons.linkedin />,
    title: "LinkedIn",
    handle: "ishaan-goswami-io",
    href: "https://www.linkedin.com/in/ishaan-goswami-io/",
  },
  {
    name: "email",
    icon: <MailIcon />,
    title: "Email",
    handle: "ishaangoswami735",
    href: "mailto:ishaangoswami735@gmail.com",
  },
]

export function getSocialLinkByName(name: string) {
  return SOCIAL_LINKS.find((link) => link.name === name)
}
