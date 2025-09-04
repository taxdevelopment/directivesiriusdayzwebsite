import { Config } from './src/lib/config.types';

export const config: Config & { features: Record<string, boolean> } = {
  runtime: 'nodejs',
  themeColor: "#3e7979",
  logoURL: "/images/logo.png",

  // Feature-Toggles
  features: {
    hero: true,
    aboutSection: true,
    servers: true,
    cftools: true,
    contactSection: true,
    leaderboard: true,
  },

  site: {
    url: "https://dayz-community-template-olive.vercel.app/",
    title: "Directive Sirius Community",
    twitter: {
      site: "@site",
      creator: "@creator",
      card: "summary_large_image",
      images: [{ url: "/images/marketing/banner.png", alt: "Marketing Banner" }],
    },
  },

  pages: {
    home: {
      title: "Home | Directive Sirius Community",
      description: "Welcome to the Directive Sirius Community!",
      sections: {
        network: { title: "Server Network", description: "Our DayZ servers are hosted by [PROVIDER]." },
        about: {
          title: "About Us",
          description: "We are a DayZ community...",
          rows: {
            1: { title: "Events", description: "We host events.", image: { url: "/images/about/events.jpg", alt: "Events" } },
            2: { title: "Community", description: "We foster community.", image: { url: "/images/about/community.jpg", alt: "Community" } },
            3: { title: "Development", description: "Our team improves the server.", image: { url: "/images/about/development.png", alt: "Development" } },
          },
        },
        leaderboard: { title: "Leaderboard", description: "Top players overview" },
        contact: { title: "Contact Us", description: "Reach us via Discord or Email.", links: { Discord: "N/A", Email: "N/A" } },
      },
    },
  },

  hero: {
    title: "Survive the wasteland!",
    description: "Your actions dictate your rise.",
    background: { color: 'rgb(62, 121, 121)', image: { url: "/images/hero.jpg", alt: "Hero Image" } },
    cta: { label: "Join our Discord!", href: "https://discord.gg/CYx965keUH" },
  },

  servers: [
    { name: 'Directive Sirius US1', ipv4: '172.96.164.35', gamePort: 2332, steamQueryPort: 27016, cftoolsApiId: '' },
    { name: 'Directive Sirius US2', ipv4: '', gamePort: 2302, steamQueryPort: 27016, cftoolsApiId: '40dfcdf1-2e38-4a86-8b36-f02e4c868bf5' },
    { name: 'Directive Sirius US3', ipv4: '', gamePort: 2402, steamQueryPort: 27017, cftoolsApiId: '16c3c8d1-9e15-4729-a541-8a578288e43d' },
  ],

  cftools: {
    leaderboard: {
      enabled: true,
      defaultSortValue: 'kills',
      allowedSortValues: ['kills', 'deaths', 'kdratio', 'longest_kill', 'longest_shot', 'playtime', 'suicides'],
      blacklistedCFToolsIds: [],
      showAmount: 100,
    },
  },

  footer: {
    trademarkNotice: "Directive Sirius is not affiliated with Bohemia Interactive.",
    brandingName: "Directive Sirius Community",
    brandingURL: '/',
    initialCopyrightYear: 2021,
    copyrightBrandName: "Directive Sirius",
    copyrightBrandUrl: '/',
    links: [{ url: '#', label: 'About' }],
  },
};

// Auth Konfiguration
export const authConfig = {
  loginButtonText: "Login with Discord",
  logoutButtonText: "Logout",
  redirectAfterLogin: "/", // Immer zur Startseite
};
