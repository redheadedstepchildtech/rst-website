export const DREAM_FUNNEL_URL = "https://dreamfunnel.net";
export const PHONE = "(406) 437-2008";
export const EMAIL = "admin@redheadedstepchildtech.com";
export const LOCATION = "Montana";

export const IMG = {
  earthNight:
    "https://images.unsplash.com/photo-1769251971680-005dfa536f07?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920",
  nebulaBlue:
    "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920",
  galaxy:
    "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920",
  milkyway:
    "https://images.unsplash.com/photo-1519810755548-39cd217da494?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920",
  earthDay:
    "https://images.unsplash.com/photo-1764768467248-6ec6b6c5101c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
};

export type SystemItem = {
  code: string;
  name: string;
  icon: string;
  blurb: string;
  status: "LIVE" | "IN BUILD" | "PLANNED";
  href?: string;
  external?: boolean;
};

export const SYSTEMS: SystemItem[] = [
  {
    code: "RST-01",
    name: "Dream Funnel",
    icon: "Rocket",
    blurb:
      "Our flagship dignity-first donation and support platform. It helps people in crisis tell their story, get help fast, and keep their dignity intact.",
    status: "LIVE",
    href: DREAM_FUNNEL_URL,
    external: true,
  },
  {
    code: "RST-02",
    name: "Swapmeet",
    icon: "Boxes",
    blurb:
      "A clean, structured community exchange that replaces messy classifieds and chaotic Facebook groups with something trustworthy.",
    status: "IN BUILD",
  },
  {
    code: "RST-03",
    name: "MORES",
    icon: "ShieldCheck",
    blurb:
      "A modern purchasing and resource system replacing outdated government and corporate procurement tools with clean, auditable workflows.",
    status: "IN BUILD",
  },
  {
    code: "RST-04",
    name: "Myrna Stories",
    icon: "BookOpen",
    blurb:
      "A narrative-first platform giving people a place to share journeys and moments that matter — authenticity over algorithms.",
    status: "LIVE",
    href: "https://myrnastories.com",
    external: true,
  },
  {
    code: "RST-05",
    name: "Flying Magnetometer",
    icon: "Radar",
    blurb:
      "Custom hardware + drone integration + geophysical software mapping subsurface magnetic anomalies. Field-ready, rugged, affordable.",
    status: "IN BUILD",
  },
];
