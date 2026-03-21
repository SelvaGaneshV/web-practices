import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "CometChat - Full Stack AI Agent Platform",
      },
      {
        name: "description",
        content:
          "CometChat gives you the entire frontend and infrastructure layer for AI agents. Full stack, modular, and production-ready.",
      },
    ],
    links: [
      {
        rel: "preload",
        href: "/fonts/Satoshi-Variable.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: appCss,
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
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
