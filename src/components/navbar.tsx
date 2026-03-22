import { routes } from "~/utils/constants";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "~/utils/utils";
import { CometChatLogo } from "~/assets/comet-chat-logo";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex h-15 justify-between px-4 py-3 md:h-17 md:px-8 md:py-4">
      <nav className="flex w-full items-center justify-between">
        <CometChatLogo className="h-3.5 w-22.5 md:h-5 md:w-32.25" />
        <div className="hidden gap-12 md:flex">
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
              "px-3 py-2 text-sm font-semibold text-secondary md:static hidden",
            )}
          >
            Schedule a demo
          </a>
          <Button variant={"secondary"} className="static px-3 py-2.5 md:hidden" size={"sm"}>
            <Menu size={16} />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
