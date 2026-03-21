import { CometChatBgLogo } from "~/assets/comet-chat-bg-logo";
import { CometChatLogo } from "~/assets/comet-chat-logo";
import { footerColumns, socialLinks } from "~/utils/constants";
import { type Column, type Section } from "~/utils/types";

const linkClass = "text-[14px] leading-[140%] text-primary/80 hover:text-primary transition-colors";
const sectionLabelClass = "text-[12px] font-semibold text-primary/40";
const columnHeadingClass = "text-[14px] font-semibold text-accent-primary";

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

const Footer = () => {
  return (
    <footer className="flex flex-col gap-14 pt-14 pb-10">
      <div className="min-w-35 px-16">
        <CometChatLogo />
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="flex w-full justify-between gap-20 px-16">
          {footerColumns.map((col) => (
            <FooterColumn key={col.title} {...col} />
          ))}
        </div>

        <CometChatBgLogo width={"100%"} />

        <div className="flex w-full items-center justify-between border-t border-white/10 px-8 py-5">
          <div className="flex items-center gap-6 text-[13px] text-primary/50">
            <span>2025 © CometChat</span>
            <a href="#" className="transition-colors hover:text-primary/80">
              Terms of Use
            </a>
            <a href="#" className="transition-colors hover:text-primary/80">
              Privacy Policy
            </a>
          </div>
          <div className="flex items-center gap-5 text-primary/50">
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
