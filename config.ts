import { Config } from './src/lib/config.types';

export const config: Config & { features: Record<string, boolean> } = {
  runtime: 'nodejs',
  themeColor: "#3e7979",
  logoURL: "/images/logo.png",
  site: {
    url: "https://dayz-community-template-olive.vercel.app/",
    title: "Directive Sirius Community",
    twitter: {
      site: "@site",
      creator: "@creator",
      card: "summary_large_image",
      images: [
        {
          url: "/images/marketing/banner.png",
          alt: "Marketing Banner for Directive Sirius Community",
        },
      ],
    },
  },
  pages: {
    home: {
      title: "Home | Directive Sirius Community",
      description: "Welcome to the Directive Sirius Community! We are a DayZ community that is dedicated to providing the best experience for our players. Join us today!",
      sections: {
        network: {
          title: "Server Network",
          description: "Our DayZ servers are hosted by [PROVIDER].",
        },
        about: {
          title: "About Us",
          description: "We are a community of DayZ players who are passionate about the game and the experiences it provides. We strive to provide a safe and enjoyable environment for all players.",
          rows: {
            1: {
              title: "Events",
              description: "We host regular events and competitions for our players to participate in. These events are a great way to meet new people and have fun in the game.",
              image: {
                url: "/images/about/events.jpg",
                alt: "Events Image",
              },
            },
            2: {
              title: "Community",
              description: "We believe that a strong community is the key to a successful server. We work hard to foster a positive and inclusive community for all players.",
              image: {
                url: "/images/about/community.jpg",
                alt: "Community Image",
              },
            },
            3: {
              title: "Development",
              description: "Our team of developers are constantly working to improve the server and add new features. We welcome feedback and suggestions from our players.",
              image: {
                url: "/images/about/development.png",
                alt: "Development Image",
              },
            },
          },
        },
        leaderboard: {
          title: "Leaderboard",
          description: "Check out the top players on our servers and see how you compare. Can you make it to the top of the leaderboard?",
        },
        contact: {
          title: "Contact Us",
          description: "If you have any questions or concerns, please don't hesitate to contact us through the following channels.",
          links: {
            'Discord': "N/A",
            'Email': "N/A",
          },
        },
      },
    },
  },
  hero: {
    title: "Survive the wasteland!",
    description: "Your actions dictate your rise. Whether you become an Adherent, Acolyte, or Herald, the path begins here",
    background: {
      color: 'rgb(62, 121, 121)',
      image: {
        url: "/images/hero.jpg",
        alt: "Hero Image",
      },
    },
    cta: {
      label: "Join our Discord!",
      href: "https://discord.gg/CYx965keUH",
    },
  },
  servers: [
    {
      name: 'Directive Sirius US1',
      ipv4: '172.96.164.35',
      gamePort: 2332,
      steamQueryPort: 27016,
      cftoolsApiId: '',
    },
    {
      name: 'Directive Sirius US2',
      ipv4: '',
      gamePort: 2302,
      steamQueryPort: 27016,
      cftoolsApiId: '40dfcdf1-2e38-4a86-8b36-f02e4c868bf5',
    },
    {
      name: 'Directive Sirius US3',
      ipv4: '',
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
    trademarkNotice: "The DayZ logo is a registered trademark of Bohemia Interactive a.s. Directive Sirius is not affiliated with Bohemia Interactive a.s. or DayZ. All other trademarks are the property of their respective owners.",
    brandingName: "Directive Sirius Community",
    brandingURL: '/',
    initialCopyrightYear: 2021,
    copyrightBrandName: "Directive Sirius",
    copyrightBrandUrl: '/',
    links: [
      {
        url: '#',
        label: 'About',
      },
    ],
  },

  // Feature toggles: Enable or disable sections easily
  features: {
    hero: true,
    servers: false,
    cftools: false,
    leaderboard: false,
    aboutSection: true,
    contactSection: false,
  },
};

export const authConfig = {
  loginButtonText: "Login with Discord",
  logoutButtonText: "Logout",
  redirectAfterLogin: "/", // immer Startseite
};
