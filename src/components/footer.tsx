import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { CometChatBgLogo } from "~/assets/comet-chat-bg-logo";
import { CometChatLogo } from "~/assets/comet-chat-logo";
import { footerColumns, socialLinks } from "~/utils/constants";
import { type Column, type Section } from "~/utils/types";
import { cn } from "~/utils/utils";
import { GradientDivider } from "./ui/gradient-divider";

const linkClass =
  "text-[14px] leading-[140%] tracking-[2%] text-primary/80 hover:text-primary transition-colors";
const sectionLabelClass = "text-[14px] leading-[140%] tracking-[2%] font-semibold text-primary/40";
const columnHeadingClass =
  "text-[16px] leading-[112%] tracking-[0.5%] font-semibold text-accent-primary";

const FooterSection = ({ heading, links }: Section) => (
  <div className="flex flex-col gap-4">
    {heading && <p className={sectionLabelClass}>{heading}</p>}
    <div className="flex flex-col gap-2">
      {links.map((l) => (
        <a key={l.label} href={l.href} className={linkClass}>
          {l.label}
        </a>
      ))}
    </div>
  </div>
);

const FooterColumn = ({ title, minWidth, sections }: Column) => (
  <div className={`flex ${minWidth} flex-col gap-4`}>
    <p className={columnHeadingClass}>{title}</p>
    <div className="flex flex-col justify-between gap-8">
      {sections.map((s, i) => (
        <FooterSection key={i} {...s} />
      ))}
    </div>
  </div>
);

const MobileFooterColumn = ({ title, sections }: Column) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4"
      >
        <p className={columnHeadingClass}>{title}</p>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "minus" : "plus"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? (
              <Minus size={18} className="text-accent-primary" />
            ) : (
              <Plus size={18} className="text-accent-primary" />
            )}
          </motion.span>
        </AnimatePresence>
      </button>
      <div className={cn("overflow-hidden transition-all", open ? "max-h-125 pb-4" : "max-h-0")}>
        <div className="flex flex-col gap-6">
          {sections.map((s, i) => (
            <FooterSection key={i} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 pt-14 pb-10 md:gap-14">
      <div className="min-w-35 px-3 md:px-16">
        <CometChatLogo className="h-4" />
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="hidden w-full justify-between gap-20 px-16 md:flex">
          {footerColumns.map((col) => (
            <FooterColumn key={col.title} {...col} />
          ))}
        </div>
        <div className="flex w-full flex-col px-6 md:hidden">
          {footerColumns.map((col) => (
            <MobileFooterColumn key={col.title} {...col} />
          ))}
        </div>

        <CometChatBgLogo className="h-15.75 w-full md:h-58.5" />
        <GradientDivider />
        <div className="flex w-full flex-col items-center justify-between gap-5 px-5 md:flex-row md:px-8 md:py-5">
          <div className="order-2 flex md:items-center   gap-6 text-[13px] text-primary/50 md:order-1">
            <span>2025 © CometChat</span>
            <a href="#" className="transition-colors hover:text-primary/80">
              Terms of Use
            </a>
            <a href="#" className="transition-colors hover:text-primary/80">
              Privacy Policy
            </a>
          </div>
          <div className="order-1 flex flex-wrap items-center gap-5 text-primary/50 md:order-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-1.5 text-[13px] transition-colors hover:text-primary/80"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
