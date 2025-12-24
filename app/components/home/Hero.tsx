import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Text } from "@orderly.network/ui";
import { PixelGrid } from "@/components/ui/pixel-grid";

export const Hero: FC = () => {
    const navigate = useNavigate();

    return (
        <section className="oui-w-full oui-relative oui-overflow-visible oui-pb-24 oui-flex oui-flex-col oui-items-center" style={{ paddingTop: "20vh" }}>
            {/* Animated Pixel Grid Background - Full viewport width with bottom fade */}
            <div
                className="oui-absolute oui-top-0 oui-overflow-hidden"
                style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100vw",
                    height: "150%",
                    zIndex: 0,
                    maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
                }}
            >
                <PixelGrid
                    pixelColor="#403dff"
                    pixelSize={2}
                    pixelSpacing={8}
                    glow={true}
                />
            </div>

            {/* Radial Glow Behind Hero */}
            <div className="home-hero-glow" style={{ zIndex: 1 }} />

            <Flex direction="column" itemAlign="center" className="oui-text-center oui-relative" style={{ zIndex: 10 }}>

                <h1
                    className="home-hero-text oui-text-white oui-mb-6"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.1" }}
                >
                    TRADE <span style={{ color: "#403dff" }}>SHARP</span>.<br />
                    EXECUTE <span style={{ color: "#403dff" }}>FAST</span>.
                </h1>

                <Text
                    className="home-sub-text oui-max-w-2xl oui-mb-10 oui-px-4"
                    style={{ fontSize: "1.025rem", color: "rgba(255, 255, 255, 0.6)" }}
                >
                    Modular infrastructure for professional traders. <br className="oui-hidden md:oui-block" />
                    Bespoke liquidation engine. Institutional depth.
                </Text>

                <div className="oui-flex oui-flex-col md:oui-flex-row oui-gap-4 oui-w-full md:oui-w-auto oui-px-6 md:oui-px-0 oui-justify-center oui-items-stretch md:oui-items-center">
                    <button
                        className="home-btn home-btn-primary oui-w-full md:oui-w-auto"
                        onClick={() => navigate("/perp")}
                    >
                        Enter Exchange
                    </button>
                    <button
                        className="home-btn home-btn-secondary oui-w-full md:oui-w-auto"
                        onClick={() => navigate("/markets")}
                    >
                        Explore Markets
                    </button>
                </div>
            </Flex>

            {/* Subtle bottom edge accent */}
            <div className="oui-absolute oui-bottom-0 oui-left-1/2 -oui-translate-x-1/2 oui-w-px oui-h-24 oui-bg-gradient-to-t oui-from-primary oui-to-transparent oui-opacity-30" style={{ backgroundColor: "#403dff" }} />
        </section>
    );
};

export default Hero;
