export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Scroll A Game Wiki",
  shortName: "Scroll A Game",
  logoText: "SG",
  tagline: "Guides, Items & Gameplay",
  description: "Complete Scroll A Game Wiki with detailed guides, gameplay tips, item information, progression strategies, and updates to help players master the adventure.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://scroll-a-game.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://scroll-a-game.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/",
  heroVideoId: "HsVAGOgJFtE", // Scroll a Game gameplay video
  social: {
    youtube: "https://www.youtube.com/watch?v=HsVAGOgJFtE",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
