import { FC, useMemo } from "react";
import { Flex, Text } from "@orderly.network/ui";
import { GridPattern, genRandomPattern } from "@/components/ui/grid-pattern";

const FeatureItem: FC<{ title: string; description: string }> = ({ title, description }) => {
    // Generate random pattern once per card instance
    const pattern = useMemo(() => genRandomPattern(), []);

    return (
        <div className="home-feature-card oui-w-full oui-h-full oui-relative oui-overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="oui-pointer-events-none oui-absolute oui-top-0 oui-left-1/2 oui-h-full oui-w-full" style={{ marginTop: "-8px", marginLeft: "-80px", maskImage: "linear-gradient(white, transparent)", WebkitMaskImage: "linear-gradient(white, transparent)" }}>
                <div className="oui-absolute oui-inset-0" style={{ background: "linear-gradient(to right, rgba(64, 61, 255, 0.05), rgba(64, 61, 255, 0.01))", maskImage: "radial-gradient(farthest-side at top, white, transparent)", WebkitMaskImage: "radial-gradient(farthest-side at top, white, transparent)" }}>
                    <GridPattern
                        width={20}
                        height={20}
                        x="-12"
                        y="4"
                        squares={pattern}
                        className="oui-absolute oui-inset-0 oui-h-full oui-w-full"
                        style={{ fill: "rgba(64, 61, 255, 0.08)", stroke: "rgba(64, 61, 255, 0.25)", mixBlendMode: "overlay" }}
                    />
                </div>
            </div>

            <Flex direction="column" gap={4} itemAlign="start" className="oui-w-full oui-relative" style={{ zIndex: 1 }}>
                <Text
                    className="home-feature-title"
                    style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}
                >
                    {title}
                </Text>
                <Text
                    className="home-sub-text"
                    style={{ fontSize: "0.9375rem", lineHeight: "1.5" }}
                >
                    {description}
                </Text>
            </Flex>
        </div>
    );
};

export const Features: FC = () => {
    return (
        <section style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div className="home-features-grid">
                <FeatureItem
                    title="Liquid Execution"
                    description="Institutional pools combined with a bespoke matching engine provide sub-millisecond execution with minimal slippage on all orders."
                />
                <FeatureItem
                    title="Modular Protocol"
                    description="Shard DEX leverages a shared liquidity layer to ensure massive depth from day one across the entire ecosystem."
                />
                <FeatureItem
                    title="Self-Custody"
                    description="Decentralized settlement with the performance of a centralized exchange. Your keys, your funds, our precision."
                />
            </div>
        </section>
    );
};

export default Features;

