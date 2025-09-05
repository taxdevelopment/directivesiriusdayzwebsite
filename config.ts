import { Config } from './src/lib/config.types';

export const config: Config & { features: Record<string, boolean> } = {
  runtime: 'nodejs',
  themeColor: "#6800cc",
  logoURL: "/images/logo.png",

  // Feature-Toggles
  features: {
    hero: true,
    aboutSection: true,
    servers: false,
    cftools: false,
    contactSection: false,
    leaderboard: false,
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
            1: { title: "Events", description: "Our server hosts a wide variety of events to keep the gameplay exciting and engaging. From server-driven activities like King of the Hill (KOTH) and dynamic airdrops to special events organized by our admins, such as Bandit Camps and community challenges, there’s always something happening to test your skills and bring players together.", image: { url: "/images/about/events.jpg", alt: "Events" } },
            2: { title: "Community", description: "Our community is made up of passionate DayZ players who share a love for survival, teamwork, and adventure. We strive to create a friendly, inclusive, and engaging environment where both new and veteran players can enjoy the game, participate in events, and connect with like-minded survivors.", image: { url: "/images/about/community.jpg", alt: "Community" } },
            3: { title: "Development", description: "Our dev team is always improving the server, adding new features, and responding to player feedback to keep the world dynamic and immersive.", image: { url: "/images/about/development.png", alt: "Development" } },
          },
        },
        leaderboard: { title: "Leaderboard", description: "Top players overview" },
        contact: { title: "Contact Us", description: "Reach us via Discord or Email.", links: { Discord: "N/A", Email: "N/A" } },
      },
    },
  },

  hero: {
    title: "Survive the wasteland!",
    description: "",
    background: { color: 'rgb(104, 0, 204)', image: { url: "/images/hero.jpg", alt: "Hero Image" } },
    cta: { label: "Join our Discord!", href: "https://discord.gg/CYx965keUH" },
  },

  servers: [
    {
      name: 'SKVAD EU1',
      ipv4: '193.25.252.92',
      gamePort: 2302,
      steamQueryPort: 27016,
      cftoolsApiId: '7732f152-3b6b-4da5-9356-b43ebfef2012',
    },
    {
      name: 'SKVAD EU2',
      ipv4: '193.25.252.24',
      gamePort: 2302,
      steamQueryPort: 27016,
      cftoolsApiId: '40dfcdf1-2e38-4a86-8b36-f02e4c868bf5',
    },
    {
      name: 'SKVAD EU3',
      ipv4: '193.25.252.24',
      gamePort: 2402,
      steamQueryPort: 27017,
      cftoolsApiId: '16c3c8d1-9e15-4729-a541-8a578288e43d',
    },
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
  initialCopyrightYear: 2025,
  copyrightBrandName: "Directive Sirius",
  copyrightBrandUrl: '/',
  links: [
    { url: '/', label: 'Home' }, // bestehender Link bleibt
    { url: '/legal/terms', label: 'Terms of Service' },
    { url: '/legal/privacy', label: 'Privacy Policy' },
    { url: '/legal/fulfillment', label: 'Fulfillment Policy' },
  ],
  },
};

// Auth Konfiguration
export const authConfig = {
  loginButtonText: "Login with Discord",
  logoutButtonText: "Logout",
  redirectAfterLogin: "/", // Immer zur Startseite
};
