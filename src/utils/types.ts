import { type FC, type FunctionComponent, type SVGProps } from "react";

export type Link = { label: string; href: string };
export type Section = { heading?: string; links: Link[] };
export type Column = { title: string; minWidth: string; sections: Section[] };

export type FeatureBlockData = {
  tag: string;
  heading: HeroHeadline[];
  description: string;
  bullets: string[];
  footnote: string;
  image: string;
  imageAlt: string;
};

export type SocialLink = { label: string; href: string; icon: FunctionComponent };

export type HeroHeadline = { text: string; highlight: string };

export type PlatformSectionData = {
  heading: HeroHeadline[];
  description: string;
  image: string;
  imageAlt: string;
};

export type HeroCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type HeroData = {
  badge: string;
  headlines: HeroHeadline[];
  descriptions: string[];
  ctas: HeroCta[];
  image: string;
  imageAlt: string;
};

export type BuildCardData = {
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

export type ChatIntegrationCardData = {
  icon: FC<SVGProps<SVGSVGElement>>;
  iconId: string;
  title: string;
  description: string;
  bullets: string[];
  linkText: string;
  href?: string;
};
