import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import heroBanner from "~/assets/images/hero-banner.png?url";
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
        content: "https://a.storyblok.com/f/231922/1200x630/d639d0748b/open-graph-image.png",
      },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "CometChat - Full Stack AI Agent Platform" },

      { property: "og:locale", content: "en_US" },
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
        content: "https://a.storyblok.com/f/231922/1200x630/d639d0748b/open-graph-image.png",
      },

      { name: "theme-color", content: "#0B0A14" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "CometChat" },
    ],
    links: [
      { rel: "canonical", href: "https://web-practices.vercel.app" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/logo192.png", type: "image/png", sizes: "192x192" },
      { rel: "apple-touch-icon", href: "/logo192.png" },
      { rel: "manifest", href: "/manifest.json" },
      {
        rel: "preload",
        href: "/fonts/Satoshi-Variable.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "preload", href: heroBanner, as: "image" },
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
