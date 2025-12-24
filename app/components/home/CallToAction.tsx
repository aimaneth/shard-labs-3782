import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Text } from "@orderly.network/ui";
import { PixelGrid } from "@/components/ui/pixel-grid";

export const CallToAction: FC = () => {
    const navigate = useNavigate();

    return (
        <section className="oui-w-full oui-px-6 md:oui-px-0">
            <div className="home-cta-card oui-max-w-4xl oui-mx-auto oui-relative oui-overflow-hidden">
                {/* Pixel Grid Background with edge fade */}
                <div
                    className="oui-absolute oui-inset-0"
                    style={{
                        zIndex: 0,
                        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                    }}
                >
                    <PixelGrid
                        pixelColor="#403dff"
                        pixelSize={2}
                        pixelSpacing={12}
                        glow={true}
                    />
                </div>

                <Flex direction="column" itemAlign="center" gap={8} className="oui-text-center oui-relative" style={{ zIndex: 1 }}>
                    <Text
                        className="home-hero-text"
                        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1" }}
                    >
                        READY FOR <br />
                        <span style={{ color: "#403dff" }}>THE INFINITE?</span>
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

