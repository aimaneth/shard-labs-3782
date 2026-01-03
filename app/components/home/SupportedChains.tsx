import { FC } from "react";

// Official Orderly Network verified supported chains
const chains = [
    { name: "Arbitrum", logo: "https://cryptologos.cc/logos/arbitrum-arb-logo.png" },
    { name: "Optimism", logo: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png" },
    { name: "Base", logo: "https://avatars.githubusercontent.com/u/108554348?s=200&v=4" },
    { name: "Mantle", logo: "https://cryptologos.cc/logos/mantle-mnt-logo.png" },
    { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
    { name: "Sei", logo: "https://cryptologos.cc/logos/sei-sei-logo.png" },
    { name: "Avalanche", logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png" },
    { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.png" },
    { name: "Morph", logo: "https://icons.llamao.fi/icons/chains/rsz_morph.jpg" },
    { name: "Sonic", logo: "https://icons.llamao.fi/icons/chains/rsz_sonic.jpg" },
    { name: "Berachain", logo: "https://icons.llamao.fi/icons/chains/rsz_berachain.jpg" },
    { name: "Story", logo: "https://icons.llamao.fi/icons/chains/rsz_story.jpg" },
    { name: "Mode", logo: "https://icons.llamao.fi/icons/chains/rsz_mode.jpg" },
    { name: "Plume", logo: "https://icons.llamao.fi/icons/chains/rsz_plume.jpg" },
    { name: "Abstract", logo: "https://icons.llamao.fi/icons/chains/rsz_abstract.jpg" },
    { name: "BNB Chain", logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png" },
    { name: "Monad", logo: "https://icons.llamao.fi/icons/chains/rsz_monad.jpg" },
];

// Row split for desktop (2 rows)
const desktopRow1 = chains.slice(0, 11);
const desktopRow2 = chains.slice(11);

// Row split for mobile (3 rows)
const mobileRow1 = chains.slice(0, 7);
const mobileRow2 = chains.slice(7, 14);
const mobileRow3 = chains.slice(14);

export const SupportedChains: FC = () => {
    return (
        <section
            style={{
                width: "100%",
                maxWidth: "100%", // Full width for marquee
                margin: "0 auto",
                padding: "3rem 0",
                overflow: "hidden", // Hide overflow for marquee
            }}
        >
            {/* Section Title */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <span
                    style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "rgba(255, 255, 255, 0.3)",
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                    }}
                >
                    {chains.length} Supported Chains
                </span>
            </div>

            {/* DESKTOP VIEW (2 ROWS) */}
            <div className="hidden md:block">
                {/* Marquee Row 1 - Scroll Left */}
                <div className="chain-marquee-container">
                    <div
                        className="chain-marquee-row"
                        style={{ animation: "scroll-left 60s linear infinite" }}
                    >
                        {[...desktopRow1, ...desktopRow1, ...desktopRow1].map((chain, i) => (
                            <ChainCard key={`desktop-row1-${chain.name}-${i}`} chain={chain} />
                        ))}
                    </div>
                </div>

                {/* Marquee Row 2 - Scroll Right */}
                <div className="chain-marquee-container" style={{ marginTop: "-1rem" }}>
                    <div
                        className="chain-marquee-row"
                        style={{ animation: "scroll-right 60s linear infinite" }}
                    >
                        {[...desktopRow2, ...desktopRow2, ...desktopRow2].map((chain, i) => (
                            <ChainCard key={`desktop-row2-${chain.name}-${i}`} chain={chain} />
                        ))}
                    </div>
                </div>
            </div>

            {/* MOBILE VIEW (3 ROWS) */}
            <div className="block md:hidden">
                {/* Marquee Row 1 - Scroll Left */}
                <div className="chain-marquee-container">
                    <div
                        className="chain-marquee-row"
                        style={{ animation: "scroll-left 60s linear infinite" }}
                    >
                        {[...mobileRow1, ...mobileRow1, ...mobileRow1].map((chain, i) => (
                            <ChainCard key={`mobile-row1-${chain.name}-${i}`} chain={chain} />
                        ))}
                    </div>
                </div>

                {/* Marquee Row 2 - Scroll Right */}
                <div className="chain-marquee-container">
                    <div
                        className="chain-marquee-row"
                        style={{ animation: "scroll-right 60s linear infinite" }}
                    >
                        {[...mobileRow2, ...mobileRow2, ...mobileRow2].map((chain, i) => (
                            <ChainCard key={`mobile-row2-${chain.name}-${i}`} chain={chain} />
                        ))}
                    </div>
                </div>

                {/* Marquee Row 3 - Scroll Left */}
                <div className="chain-marquee-container">
                    <div
                        className="chain-marquee-row"
                        style={{ animation: "scroll-left 60s linear infinite" }}
                    >
                        {[...mobileRow3, ...mobileRow3, ...mobileRow3].map((chain, i) => (
                            <ChainCard key={`mobile-row3-${chain.name}-${i}`} chain={chain} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ChainCard: FC<{ chain: { name: string; logo: string } }> = ({ chain }) => (
    <div
        style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.75rem 1.25rem",
            borderRadius: "999px",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            transition: "all 0.2s ease",
            cursor: "default",
            whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
            e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
            e.currentTarget.style.transform = "scale(1)";
        }}
    >
        <img
            src={chain.logo}
            alt={chain.name}
            style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                objectFit: "cover",
            }}
            onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(chain.name)}&background=1a1a2e&color=fff&size=48&bold=true`;
            }}
        />
        <span
            style={{
                fontSize: "0.80rem",
                fontWeight: 600,
                color: "rgba(255, 255, 255, 0.7)",
                letterSpacing: "0.02em",
            }}
        >
            {chain.name}
        </span>
    </div>
);

export default SupportedChains;
