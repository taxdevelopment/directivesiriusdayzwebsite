import { NavItem } from '@/lib/types';

export type Config = {
  runtime: 'nodejs' | 'edge';
  themeColor: string;
  logoURL: string;
  site: {
    url: string;
    title: string;
    titleTemplate?: string;
    twitter?: {
      site?: string;
      creator?: string;
      card?: 'summary' | 'summary_large_image' | 'app' | 'player';
      images?: { url: string; alt: string }[];
    };
  };
  pages: {
    home: {
      title: string;
      description: string;
      sections: {
        network: { title: string; description: string };
        about: {
          title: string;
          description: string;
          rows: {
            1: { title: string; description: string; image: { url: string; alt: string } };
            2: { title: string; description: string; image: { url: string; alt: string } };
            3: { title: string; description: string; image: { url: string; alt: string } };
          };
        };
        leaderboard: { title: string; description: string };
        contact: { title: string; description: string; links: { [key: string]: string } };
      };
    };
  };
  navigation?: { items: NavItem[] };
  hero: {
    title: string;
    description: string;
    background: { color: string; image: { url: string; alt: string } };
    cta: { label: string; href: string };
  };
  servers: {
    name: string;
    ipv4: string;
    gamePort: number;
    steamQueryPort: number;
    cftoolsApiId?: string;
  }[];
  cftools: {
    leaderboard: {
      enabled: boolean;
      defaultSortValue: LeaderboardSortValues;
      allowedSortValues: LeaderboardSortValues[];
      blacklistedCFToolsIds: string[];
      showAmount: number;
    };
  };
  footer: {
    trademarkNotice: string;
    brandingName?: string;
    brandingURL?: string;
    initialCopyrightYear?: number;
    copyrightBrandName?: string;
    copyrightBrandUrl?: string;
    links?: { url: string; label: string; openInNewTab?: boolean }[];
  };
  // Neue Sektion für Feature-Toggles
  features: {
    hero: boolean;
    aboutSection: boolean;
    servers: boolean;
    cftools: boolean;
    contactSection: boolean;
  };
};

export type LeaderboardSortValues =
  | 'kills'
  | 'deaths'
  | 'suicides'
  | 'playtime'
  | 'longest_kill'
  | 'longest_shot'
  | 'kdratio';
