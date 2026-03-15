// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Enzo Muñoz - Portfolio";
export const SITE_DESCRIPTION = "Little portfolio hoping to get hired some day";

export interface NavLink {
  title: string;
  id?: string;
  url?: string;
  redirect?: string;
  tooltip?: string;
}

export const NAV_LINKS: NavLink[] = [
  {
    title: "index.html",
    id: "home",
    url: "/",
    tooltip: "Home",
  },
  {
    title: "blog.sql",
    id: "blog",
    url: "/blog",
    tooltip: "Posts and stuff",
  },
  {
    title: "projects.md",
    url: "/projects",
    tooltip: "Showcase of my projects",
  },
];

export type SocialPlatform = "twitter" | "github" | "instagram" | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/enzomdev/",
    label: "X",
  },
  {
    platform: "github",
    url: "https://github.com/enzom-uy/",
    label: "Github",
  },
];
