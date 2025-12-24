import { FC } from "react";
import { withBasePath } from "../../utils/base-path";

export const HomeFooter: FC = () => {
    return (
        <footer style={{
            width: "100%",
            marginTop: "6rem",
            paddingTop: "4rem",
            paddingBottom: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.03)",
            background: "transparent",
        }}>
            <div style={{
                maxWidth: "72rem",
                margin: "0 auto",
                padding: "0 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
            }}>
                {/* Main Content */}
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "3rem",
                }}>
                    {/* Brand */}
                    <div style={{ maxWidth: "280px" }}>
                        <img
                            src={withBasePath("/shard.svg")}
                            alt="Shard DEX"
                            style={{
                                height: "32px",
                                width: "auto",
                                display: "block",
                                marginBottom: "1rem",
                                opacity: 0.9,
                            }}
                        />
                        <p style={{
                            fontSize: "0.875rem",
                            lineHeight: 1.6,
                            color: "rgba(255, 255, 255, 0.35)",
                            margin: 0,
                        }}>
                            Professional perpetual trading infrastructure. Built for institutions, available to everyone.
                        </p>
                    </div>

                    {/* Links */}
                    <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
                        <div>
                            <div style={labelStyle}>Platform</div>
                            <a href="/perp/PERP_ETH_USDC" style={linkStyle}>Trade</a>
                            <a href="/markets" style={linkStyle}>Markets</a>
                            <a href="/portfolio" style={linkStyle}>Portfolio</a>
                        </div>
                        <div>
                            <div style={labelStyle}>Community</div>
                            <a href="https://twitter.com/OrderlyNetwork" target="_blank" rel="noreferrer" style={linkStyle}>X (Twitter)</a>
                            <a href="https://discord.gg/orderlynetwork" target="_blank" rel="noreferrer" style={linkStyle}>Discord</a>
                            <a href="https://docs.orderly.network" target="_blank" rel="noreferrer" style={linkStyle}>Docs</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    paddingTop: "1.5rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1rem",
                }}>
                    <span style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.2)" }}>
                        © 2025 Shard DEX. All rights reserved.
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.2)" }}>
                        Powered by Shard Labs
                    </span>
                </div>
            </div>
        </footer>
    );
};

const labelStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "rgba(255, 255, 255, 0.4)",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: "1rem",
};

const linkStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.875rem",
    color: "rgba(255, 255, 255, 0.6)",
    textDecoration: "none",
    marginBottom: "0.75rem",
    transition: "color 0.2s ease",
};

export default HomeFooter;
