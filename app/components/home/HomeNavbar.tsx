import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { Button, Flex, useScreen, cn } from "@orderly.network/ui";
import CustomLeftNav from "@/components/CustomLeftNav";
import { withBasePath } from "@/utils/base-path";

interface HomeNavbarProps {
    components: any;
    socials: {
        twitter?: string;
        discord?: string;
        telegram?: string;
    };
    menus: any[];
    customMenus: any[];
}

export const HomeNavbar: FC<HomeNavbarProps> = ({ components, socials, menus, customMenus }) => {
    const { isMobile } = useScreen();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = (e?: Event) => {
            // Check window, document body, or the actual scroll target
            const scrollY = window.scrollY ||
                document.documentElement.scrollTop ||
                (e?.target as HTMLElement)?.scrollTop ||
                0;

            if (scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Check initially
        handleScroll();

        // Use capture phase (true) to catch scroll events from internal containers like Scaffold
        window.addEventListener("scroll", handleScroll, true);

        // Add class to body to hide default header via global CSS
        document.body.classList.add("shard-home-page-body");

        return () => {
            window.removeEventListener("scroll", handleScroll, true);
            document.body.classList.remove("shard-home-page-body");
        };
    }, []);

    // Use Portal to escape stacking contexts found in the app layout
    return createPortal(
        <div
            className="home-navbar-standalone"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
                height: "48px", // Matched to app navbar
                padding: "0 1rem", // Matched to oui-px-4
                boxSizing: "border-box",
                background: isScrolled
                    ? "rgba(10, 10, 15, 0.75)" // Premium Translucent Glass
                    : "transparent",
                backdropFilter: isScrolled
                    ? "blur(12px) saturate(180%)" // Stronger glass effect
                    : "none",
                WebkitBackdropFilter: isScrolled
                    ? "blur(12px) saturate(180%)"
                    : "none",
                borderBottom: isScrolled
                    ? "1px solid rgba(255, 255, 255, 0.08)" // Subtle glass border
                    : "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
        >
            <Flex justify="between" itemAlign="center" className="oui-w-full oui-h-full">
                <Flex itemAlign="center" className="oui-gap-2 md:oui-gap-4">
                    {isMobile && (
                        <CustomLeftNav
                            menus={menus}
                            externalLinks={customMenus}
                            socials={socials}
                            className="oui-text-white"
                        />
                    )}
                    <Link to="/" className="oui-flex-shrink-0">
                        {isMobile ? (
                            <img
                                src={withBasePath("/shard-logo-secondary.svg")}
                                alt="logo"
                                style={{ height: "24px", display: "block", width: "auto" }}
                            />
                        ) : (
                            <img
                                src={withBasePath("/shard.svg")}
                                alt="logo"
                                style={{ height: "28px", display: "block", width: "auto" }}
                            />
                        )}
                    </Link>
                    {/* Restore Navigation Links */}
                    <div className="home-nav-links oui-hidden md:oui-flex oui-gap-1">
                        {menus.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="oui-px-3 oui-py-2 oui-text-sm oui-font-medium oui-text-white/60 hover:oui-text-white oui-transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </Flex>
                <Button
                    size="sm"
                    className="shard-btn-primary"
                    style={{
                        background: "#403dff",
                        border: "none",
                        color: "white",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        fontSize: "0.75rem",
                        padding: "0 1.25rem",
                        height: "30px", // Slightly smaller to fit 48px height better
                        borderRadius: "9999px",
                        boxShadow: "0 0 15px rgba(64, 61, 255, 0.4)",
                        transition: "all 0.2s ease",
                    }}
                    onClick={() => navigate("/perp")}
                >
                    Start Trading
                </Button>
            </Flex>
        </div>,
        document.body
    );
};
