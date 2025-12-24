import { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  modal,
  useModal,
  VectorIcon,
  cn,
} from "@orderly.network/ui";
import { LeftNavProps, LeftNavItem } from "@orderly.network/ui-scaffold";
import { ExternalLink } from "lucide-react";
import { getRuntimeConfig, getRuntimeConfigBoolean } from "@/utils/runtime-config";
import { withBasePath } from "@/utils/base-path";

type LeftNavUIProps = LeftNavProps &
{
  className?: string;
  logo?: {
    src: string;
    alt: string;
  };
  externalLinks?: Array<{
    name: string;
    href: string;
    target?: string;
  }>;
  socials?: {
    twitter?: string;
    discord?: string;
    telegram?: string;
  };
};

const LeftNavUI: FC<LeftNavUIProps> = (props) => {
  const showModal = useCallback(() => {
    modal.show(LeftNavSheet, {
      ...props,
    });
  }, [props]);

  return (
    <button
      onClick={showModal}
      className={cn("oui-flex oui-items-center oui-justify-center oui-text-base-contrast-80 hover:oui-text-white transition-colors", props?.className)}
      aria-label="Open navigation menu"
    >
      <VectorIcon size={24} />
    </button>
  );
};

const LeftNavSheet = modal.create<LeftNavUIProps>((props) => {
  const { visible, hide, onOpenChange } = useModal();

  return (
    <Sheet open={visible} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="oui-border-r oui-border-white/10"
        style={{
          background: "#050508",
          width: "280px",
          minWidth: "280px",
          maxWidth: "85vw",
          zIndex: 9999, // Force on top
          transform: "none" // Prevent transform conflicts if any
        }}
        closeable
        closeableSize={24}
        closeOpacity={0.54}
      >
        <div className="oui-relative oui-flex oui-h-full oui-flex-col oui-gap-6 oui-p-4">
          {/* Header / Logo */}
          <div className="oui-flex oui-items-center oui-h-[48px] oui-mb-2">
            {
              getRuntimeConfigBoolean('VITE_HAS_PRIMARY_LOGO')
                ? <img src={withBasePath("/logo.webp")} alt="logo" className="oui-h-[32px] oui-w-auto" />
                : <img src={withBasePath("/shard.svg")} alt="logo" className="oui-h-[32px] oui-w-auto" />
            }
          </div>

          {/* Menu Items */}
          <div className="oui-flex oui-flex-col oui-gap-1 oui-flex-1 oui-overflow-y-auto">
            {Array.isArray(props?.menus) && props.menus.length > 0 && (
              <div className="oui-flex oui-flex-col oui-gap-1">
                {props.menus?.map((item) => (
                  <NavItem
                    item={item}
                    key={`item-${item.name}`}
                    onLinkClick={hide}
                  />
                ))}
              </div>
            )}

            {Array.isArray(props?.externalLinks) && props.externalLinks.length > 0 && (
              <>
                <div className="oui-h-px oui-w-full oui-bg-white/10 oui-my-3"></div>
                <div className="oui-flex oui-flex-col oui-gap-1">
                  {props.externalLinks?.map((item) => (
                    <ExternalNavItem
                      item={item}
                      key={`external-${item.name}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
});

type NavItemProps = {
  item: LeftNavItem;
  onLinkClick?: () => void;
};

const NavItem: FC<NavItemProps> = ({ item, onLinkClick }) => {
  const { href, name, icon, trailing } = item;
  return (
    <Link
      to={href}
      onClick={onLinkClick}
      className="oui-flex oui-items-center oui-gap-3 oui-px-4 oui-py-3 oui-w-full oui-rounded-lg hover:oui-bg-white/5 oui-transition-colors oui-duration-200 oui-no-underline"
    >
      <div className="oui-text-white/60">{icon}</div>
      <div className="oui-text-[15px] oui-font-medium oui-text-white">
        {name}
      </div>
      {trailing}
    </Link>
  );
};

type ExternalNavItemProps = {
  item: {
    name: string;
    href: string;
    target?: string;
  };
};

const ExternalNavItem: FC<ExternalNavItemProps> = ({ item }) => {
  return (
    <a
      href={item.href}
      target={item.target || "_blank"}
      rel="noopener noreferrer"
      className="oui-flex oui-items-center oui-justify-between oui-px-4 oui-py-3 oui-w-full oui-rounded-lg hover:oui-bg-white/5 oui-transition-colors oui-duration-200 oui-no-underline"
    >
      <div className="oui-text-[15px] oui-font-medium oui-text-white/80">
        {item.name}
      </div>
      <ExternalLink className="oui-w-4 oui-h-4 oui-text-white/40 oui-flex-shrink-0" />
    </a>
  );
};

export default LeftNavUI;
