import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CometChat - Full Stack AI Agent Platform | Chat SDK & API" },
      {
        name: "description",
        content:
          "Build production-ready AI agents with CometChat's full-stack platform. Chat UI, notifications, analytics, and moderation — modular, scalable, and ready to ship.",
      },

      // Open Graph — controls how links appear when shared on Facebook, LinkedIn, Discord, etc.
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CometChat" },
      {
        property: "og:title",
        content: "CometChat - Full Stack AI Agent Platform",
      },
      {
        property: "og:description",
        content:
          "Ship AI agents faster with CometChat's full-stack platform. Production-ready chat UI, notifications, moderation, and analytics — all in one.",
      },
      { property: "og:url", content: "https://web-practices.vercel.app" },
      {
        property: "og:image",
        content: "https://web-practices.vercel.app/og-image.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "CometChat - Full Stack AI Agent Platform" },
      { property: "og:locale", content: "en_US" },

      // Twitter Card — controls how links appear when shared on Twitter/X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@CometChat" },
      {
        name: "twitter:title",
        content: "CometChat - Full Stack AI Agent Platform",
      },
      {
        name: "twitter:description",
        content:
          "Ship AI agents faster with CometChat. Production-ready chat UI, notifications, and analytics — full stack and modular.",
      },
      {
        name: "twitter:image",
        content: "https://web-practices.vercel.app/og-image.png",
      },

      // Additional SEO meta tags
      { name: "theme-color", content: "#0B0A14" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "CometChat" },
    ],
    links: [
      // Canonical URL — tells search engines this is the primary URL to index, preventing duplicate content issues
      { rel: "canonical", href: "https://web-practices.vercel.app" },
      // Favicon links for various devices
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/logo192.png", type: "image/png", sizes: "192x192" },
      { rel: "apple-touch-icon", href: "/logo192.png" },
      // Web App Manifest for PWA support
      { rel: "manifest", href: "/manifest.json" },
      // Font preload — loads the font early to prevent layout shifts (improves CLS score)
      {
        rel: "preload",
        href: "/fonts/Satoshi-Variable.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "CometChat",
              url: "https://web-practices.vercel.app",
              logo: "https://web-practices.vercel.app/logo512.png",
              description:
                "CometChat is a full-stack AI agent platform that provides chat UI, notifications, analytics, and moderation for production-ready AI agents.",
              foundingDate: "2019-01-15",
              sameAs: [
                "https://www.facebook.com/CometChat",
                "https://www.linkedin.com/company/cometchat",
                "https://www.instagram.com/cometchat",
                "https://twitter.com/CometChat",
                "https://github.com/cometchat",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://web-practices.vercel.app",
              },
            },
            {
              "@type": "WebSite",
              name: "CometChat",
              url: "https://web-practices.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://web-practices.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "SoftwareApplication",
              name: "CometChat AI Agent Platform",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Web",
              description:
                "Full-stack platform for building production-ready AI agents with chat UI, notifications, analytics, and moderation.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free trial available",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-satoshi">
        <Navbar />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
