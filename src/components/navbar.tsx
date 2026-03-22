import { routes } from "~/utils/constants";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "~/utils/utils";
import { CometChatLogo } from "~/assets/comet-chat-logo";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex h-15 justify-between px-4 py-3 sm:px-6 md:h-17 md:px-8 md:py-4 2xl:px-12">
      <nav className="flex w-full items-center justify-between" aria-label="Main navigation">
        <a href="/" aria-label="CometChat Home">
          <CometChatLogo className="h-3.5 w-22.5 md:h-5 md:w-32.25" />
        </a>
        <div className="hidden gap-6 md:flex lg:gap-10 xl:gap-12">
          {routes.map((route) => (
            <a
              key={route}
              className="text-[14px] leading-[140%] font-semibold tracking-[0.02em] hover:text-accent-primary"
              href={`#`}
            >
              {route}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <a href="#" className="text-sm">
            Login
          </a>
          <a
            href="#"
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "hidden px-3 py-2 text-sm font-semibold text-secondary md:inline-flex",
            )}
          >
            Schedule a demo
          </a>
          <Button variant={"secondary"} className="static px-3 py-2.5 md:hidden" size={"sm"} aria-label="Open menu">
            <Menu size={16} />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
