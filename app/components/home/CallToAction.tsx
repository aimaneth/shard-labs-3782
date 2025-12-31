import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Text } from "@orderly.network/ui";
import { GridPattern, genRandomPattern } from "@/components/ui/grid-pattern";

export const CallToAction: FC = () => {
    const navigate = useNavigate();
    // Use a dense pattern for the CTA to make it feel solid/substantial
    const pattern = useMemo(() => genRandomPattern(40), []);

    return (
        <section className="oui-w-full oui-px-6 md:oui-px-0">
            <div className="home-cta-card oui-max-w-4xl oui-mx-auto oui-relative oui-overflow-hidden">
                {/* Modular Grid Background */}
                <div
                    className="oui-absolute oui-inset-0"
                    style={{
                        zIndex: 0,
                        opacity: 0.4
                    }}
                >
                    <GridPattern
                        width={30}
                        height={30}
                        x="-1"
                        y="-1"
                        squares={pattern}
                        className="oui-absolute oui-inset-0 oui-h-full oui-w-full"
                        style={{
                            fill: "rgba(64, 61, 255, 0.12)",
                            stroke: "rgba(255, 255, 255, 0.05)",
                            strokeWidth: 1
                        }}
                    />
                </div>

                {/* Subtle radial overlay for depth */}
                <div
                    className="oui-absolute oui-inset-0"
                    style={{
                        background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)",
                        zIndex: 0
                    }}
                />

                <Flex direction="column" itemAlign="center" gap={8} className="oui-text-center oui-relative" style={{ zIndex: 1 }}>
                    <Text
                        className="home-hero-text"
                        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1" }}
                    >
                        READY FOR <br />
                        <span className="home-hero-highlight">THE INFINITE?</span>
                    </Text>

                    <Text
                        className="home-sub-text oui-max-w-3xl oui-mb-8"
                        style={{ fontSize: "1.125rem" }}
                    >
                        Join the institutional grade DEX built for professional traders.
                    </Text>

                    <button
                        className="home-btn home-btn-primary"
                        style={{ minWidth: "200px", height: "3.5rem", borderRadius: "9999px" }}
                        onClick={() => navigate("/perp")}
                    >
                        GET STARTED NOW
                    </button>
                </Flex>
            </div>
        </section>
    );
};

export default CallToAction;

