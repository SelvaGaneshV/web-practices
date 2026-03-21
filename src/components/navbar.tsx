import { routes } from "~/utils/constants";
import { buttonVariants } from "./ui/button";
import { cn } from "~/utils/utils";
import { CometChatLogo } from "~/assets/comet-chat-logo";

const Navbar = () => {
  return (
    <header className="flex h-15 justify-between px-4 py-3 md:h-17 md:px-8 md:py-4">
      <nav className="flex w-full items-center justify-between">
        <CometChatLogo />
        <div className="flex gap-12">
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
        <div className="flex items-center gap-4">
          <a href="#">Login</a>
          <a
            href="#"
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "px-3 py-2 text-sm font-semibold text-secondary",
            )}
          >
            Schedule a demo
          </a>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
