import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import endeavor from "~/assets/endeavor.png?url";
import haleon from "~/assets/haleon-seeklogo.com.png?url";
import kahoot from "~/assets/kahoot-seeklogo.com.png?url";
import trans from "~/assets/nb_logo_new_trans.png?url";
import shaadi from "~/assets/shaadi-seeklogo.com.png?url";
import feature02 from "~/assets/feature-02.png?url";
import feature03 from "~/assets/feature-03.png?url";
import feature04 from "~/assets/feature-04.png?url";
import section3 from "~/assets/section-3.png?url";
import Banner from "~/assets/Banner images.png?url";
import {
  type Column,
  type FeatureBlockData,
  type HeroData,
  type PlatformSectionData,
  type SocialLink,
} from "./types";

export const routes = ["Platform", "Solutions", "Developers", "Resources", "Pricing"];

export const heroData: HeroData = {
  badge: "Full Stack AI Agent Platform",
  headlines: [
    { text: "Ship the", highlight: "agent." },
    { text: "Skip the", highlight: "plumbing." },
  ],
  descriptions: [
    "Why are you still stitching together chat UIs, retries, moderation, notifications, and analytics - just to get your agent into users' hands?",
    "CometChat gives you the entire frontend + infra layer.",
    "Full stack. Modular. Production-ready.",
  ],
  ctas: [
    { label: "Schedule a Demo", href: "/register", variant: "secondary" },
    { label: "Try the Agent Builder", href: "#", variant: "primary" },
  ],
  image: Banner,
  imageAlt: "CometChat banner",
};

export const customerLogo = [haleon, kahoot, endeavor, shaadi, trans];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "GitHub", href: "#", icon: Github },
];

export const platformSectionData: PlatformSectionData = {
  heading: [
    { text: "Everything your agent needs to go from prototype to product - fixed.", highlight: "" },
  ],
  description: "Modular when you want control. All-in-one when you just need to launch.",
  image: section3,
  imageAlt: "CometChat agent",
};

export const introductionBullets = [
  "A complete frontend and system layer for AI agents. Plug in your LLM backend or build the brain with ours.",
  "CometChat is the only full stack agent platform that combines logic, UI, moderation, notifications, and insights - without glue code.",
  "Each of these is battle-tested, used and trusted in production by real companies, across real user scenarios.",
];

export const featureBlocks: FeatureBlockData[] = [
  {
    tag: "Production-ready chat UI",
    heading: [
      {
        text: "The UX layer your agent deserves. Built for LLM-native interactions, out of the box.",
        highlight: "",
      },
      { text: "out of the box.", highlight: "" },
    ],
    description:
      "Forget cobbling together buttons and hoping users 'get it'. Our chat layer is purpose-built for how agents think - and how humans expect them to respond.",
    bullets: [
      'Token streaming with dynamic "thinking…" states',
      "Retry/stop buttons with full control logic",
      "Memory pills, prompt banners, and agent selectors",
      "Structured tool replies with inline citations",
      "Slash commands, modals, and frontend triggers",
      "Low/No-code Chat Builder, or more control via UI Kits and SDKs",
      "Fully AG-UI protocol compatible - including tool call rendering, memory markers, and fallback patterns",
    ],
    footnote:
      "It's not just a pretty shell. It's UX that teaches trust, guides behavior, and makes your agent feel alive.",
    image: feature02,
    imageAlt: "Production-ready chat UI",
  },
  {
    tag: "Multichannel notifications engine",
    heading: [
      { text: "Your agent is only helpful if people come back to talk to it.", highlight: "" },
    ],
    description: "Most agents get ghosted. Yours won't.",
    bullets: [
      "Native push, email, and SMS support",
      "Retry logic, delivery throttling, and batching",
      "Trigger-based delivery rules - unread X mins, fallback triggered, user went silent",
      "Threaded email replies (yes, replies go back to chat!)",
      "Integrates with SendGrid, Twilio, or your custom providers",
      "User-level frequency + preference settings",
    ],
    footnote:
      "Notifications aren't a growth hack. They're UX glue. And we built them so you wouldn't have to.",
    image: feature04,
    imageAlt: "Multichannel notifications engine",
  },
  {
    tag: "Insights dashboard",
    heading: [
      { text: "Ship the agent. Then make it better.", highlight: "Without needing Mixpanel," },
      { text: "", highlight: "Segment, or BI setups." },
    ],
    description:
      "From day one, you get built-in visibility into what your agent is doing - and how people are responding.",
    bullets: [
      "Resolution rates, fallback frequency, retry counts, latency",
      "Tool usage breakdowns, prompt paths, knowledge base hits",
      "Conversation-level analytics: drop-off points, re-engagement, success outcomes",
      "Sentiment markers and feedback loops",
      "Exportable, filterable, and privacy-respectful",
    ],
    footnote: "You can't improve what you can't see. With us, you never ship blind.",
    image: feature03,
    imageAlt: "Insights dashboard",
  },
];

export const footerColumns: Column[] = [
  {
    title: "Platform",
    minWidth: "min-w-40",
    sections: [
      {
        links: [
          { label: "Chat & Messaging", href: "#" },
          { label: "Voice & Video Calls", href: "#" },
        ],
      },
      {
        heading: "Features",
        links: [
          { label: "Chat & Messaging", href: "#" },
          { label: "Voice & Video Calls", href: "#" },
          { label: "Notifocations", href: "#" },
          { label: "Analytics & Insights", href: "#" },
          { label: "Multi-Tenant Chat", href: "#" },
        ],
      },
      {
        heading: "Integration Methods",
        links: [
          { label: "UI Kits", href: "#" },
          { label: "SDKs & APIs", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    minWidth: "min-w-40",
    sections: [
      {
        heading: "By Use cases",
        links: [
          { label: "On-demand", href: "#" },
          { label: "Online Marketplaces", href: "#" },
          { label: "SaaS Businesses", href: "#" },
          { label: "Healthcare & Telehealth", href: "#" },
          { label: "Community & Social", href: "#" },
          { label: "Dating", href: "#" },
        ],
      },
      {
        heading: "Comparison",
        links: [
          { label: "CometChat vs Sendbird", href: "#" },
          { label: "Compare Top Chat SDKs", href: "#" },
          { label: "Sendbird Alternatives", href: "#" },
          { label: "Stream Chat Alternatives", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Developers",
    minWidth: "min-w-35",
    sections: [
      {
        links: [
          { label: "Docs", href: "#" },
          { label: "Sample Apps", href: "#" },
          { label: "APIs", href: "#" },
          { label: "Product Updates", href: "#" },
          { label: "Feature Requests", href: "#" },
          { label: "System Status", href: "#" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Community", href: "#" },
          { label: "Help Center", href: "#" },
          { label: "Office Hours", href: "#" },
          { label: "Report an issue", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Resources",
    minWidth: "min-w-40",
    sections: [
      {
        links: [
          { label: "Templates", href: "#" },
          { label: "Tutorials", href: "#" },
          { label: "Blog", href: "#" },
        ],
      },
      {
        heading: "Chat UI Kits",
        links: [
          { label: "React Chat UI Kit", href: "#" },
          { label: "Flutter Chat UI Kit", href: "#" },
          { label: "Android Chat UI Kit", href: "#" },
          { label: "React Native Chat UI Kit", href: "#" },
          { label: "iOS Chat UI Kit", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Company",
    minWidth: "min-w-45",
    sections: [
      {
        links: [
          { label: "Careers", href: "#" },
          { label: "Partners", href: "#" },
          { label: "Pricing", href: "#" },
          { label: "Implementation Services", href: "#" },
          { label: "Chat with us", href: "#" },
        ],
      },
      {
        heading: "Terms and Legal",
        links: [
          { label: "Terms of Service", href: "#" },
          { label: "Privacy Policy", href: "#" },
          { label: "Sub-processors List", href: "#" },
          { label: "Data Processing Addendum", href: "#" },
          { label: "Vulnerability Disclosure Program", href: "#" },
        ],
      },
    ],
  },
];
