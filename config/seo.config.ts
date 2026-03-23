import { siteConfig } from "./site.config";

export type SeoPageKey =
  | "home"
  | "about"
  | "capabilities"
  | "infrastructure"
  | "industries"
  | "gallery"
  | "leadership"
  | "quality"
  | "careers"
  | "news"
  | "contact"
  | "units"
  | "unitDetail"
  | "notFound";

export type SeoEntry = {
  title: string;
  description: string;
  path: string;
};

const primaryKeywords = [
  "CNC machining Bangalore",
  "Precision components India",
  "CNC turning",
  "CNC milling",
  "Manufacturing company Bangalore",
];

export const defaultSeoConfig = {
  siteName: siteConfig.shortName,
  titleTemplate: `%s | ${siteConfig.shortName}`,
  description:
    "UNNATHI CNC is a manufacturing company in Bangalore delivering CNC machining, CNC turning, CNC milling, and precision components for global OEMs.",
  keywords: primaryKeywords,
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  twitterCard: "summary_large_image",
} as const;

export const seoConfig: Record<SeoPageKey, SeoEntry> = {
  home: {
    title: "UNNATHI CNC Technologies | Precision CNC Machining & Manufacturing",
    description: "UNNATHI CNC Technologies Pvt. Ltd. is a precision engineering and CNC machining company specializing in high-precision components, advanced manufacturing infrastructure, and certified quality processes.",
    path: "/",
  },
  about: {
    title: "About Our Precision Manufacturing Company in Bangalore",
    description: "Learn about UNNATHI CNC, a trusted manufacturing company Bangalore with world-class CNC machining and quality systems.",
    path: "/about",
  },
  capabilities: {
    title: "CNC Turning and CNC Milling Capabilities",
    description: "Explore advanced CNC turning, CNC milling, and precision machining capabilities for aerospace, automotive, and medical components.",
    path: "/capabilities",
  },
  infrastructure: {
    title: "Infrastructure for Precision Components India",
    description: "State-of-the-art manufacturing infrastructure supporting precision components India and high-volume CNC machining in Bangalore.",
    path: "/infrastructure",
  },
  industries: {
    title: "Industries Served by CNC Machining Bangalore Experts",
    description: "UNNATHI CNC serves aerospace, automotive, medical, and industrial sectors with precision components and CNC machining solutions.",
    path: "/industries",
  },
  gallery: {
    title: "Gallery of CNC Turning and CNC Milling Operations",
    description: "View CNC turning, CNC milling, and quality inspection visuals from UNNATHI CNC manufacturing facilities.",
    path: "/gallery",
  },
  leadership: {
    title: "Leadership Team | UNNATHI CNC Bangalore",
    description: "Meet the leadership team driving precision manufacturing excellence and CNC machining innovation at UNNATHI CNC.",
    path: "/leadership",
  },
  quality: {
    title: "Quality and Certifications for Precision Manufacturing",
    description: "AS9100D and ISO-certified quality management for precision components, CNC turning, and CNC milling production.",
    path: "/quality",
  },
  careers: {
    title: "Careers in CNC Machining and Precision Manufacturing",
    description: "Build your career with a leading manufacturing company Bangalore specializing in CNC machining and precision engineering.",
    path: "/careers",
  },
  news: {
    title: "News and Events | Unnathi CNC",
    description: "Read updates, milestones, and industry participation from UNNATHI CNC's precision manufacturing operations.",
    path: "/news",
  },
  contact: {
    title: "Contact UNNATHI CNC for CNC Machining Bangalore",
    description: "Contact UNNATHI CNC for RFQs on CNC machining Bangalore projects, precision components India, CNC turning, and milling.",
    path: "/contact",
  },
  units: {
    title: "Our Manufacturing Units in Bangalore and Tumakuru",
    description: "Discover all UNNATHI CNC production units for CNC turning, CNC milling, and scalable precision component manufacturing.",
    path: "/units",
  },
  unitDetail: {
    title: "Manufacturing Unit Details",
    description: "Detailed facility information for UNNATHI CNC units, including specializations in CNC turning and CNC milling.",
    path: "/units",
  },
  notFound: {
    title: "Page Not Found",
    description: "The requested page could not be found on UNNATHI CNC.",
    path: "/404",
  },
};
