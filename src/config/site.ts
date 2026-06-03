import type { NavItem } from "@/types/nav"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://ishandev.vercel.app",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = []

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
]

export const X_HANDLE = ""
export const GITHUB_USERNAME = "Ishaan2510"
export const SOURCE_CODE_GITHUB_REPO = "Ishaan2510/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Ishaan2510/portfolio"

export const UTM_PARAMS = {
  utm_source: "ishaan-goswami-portfolio",
}
