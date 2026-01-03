import { FC } from "react";
import { Flex, Text, Box } from "@orderly.network/ui";
import { withBasePath } from "@/utils/base-path";

export const MarketsBanner: FC = () => {
    return (
        <Box
            className="shard-markets-banner"
            style={{
                width: "100%",
                height: "220px",
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                marginBottom: "2rem",
                background: "#0a0a0f",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            }}
        >
            {/* Background Image with Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${withBasePath("/assets/images/markets_banner_bg.png")})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.35,
                }}
            />

            {/* Gradient Overlay for Text Readability */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(90deg, #050508 0%, rgba(5, 5, 8, 0.8) 40%, transparent 100%)",
                }}
            />

            <Flex
                direction="column"
                justify="center"
                className="oui-h-full oui-px-10 oui-relative"
                style={{ zIndex: 1 }}
            >
                <div
                    className="oui-flex oui-items-center oui-gap-3 oui-mb-2"
                >
                    <div
                        style={{
                            width: "4px",
                            height: "24px",
                            background: "#403dff",
                            borderRadius: "2px",
                            boxShadow: "0 0 12px rgba(64, 61, 255, 0.6)"
                        }}
                    />
                    <Text
                        className="oui-text-white oui-font-bold"
                        style={{ fontSize: "2.25rem", letterSpacing: "-0.03em", lineHeight: "1.1" }}
                    >
                        MARKETS
                    </Text>
                </div>

                <Text
                    style={{
                        fontSize: "1.0625rem",
                        color: "rgba(255, 255, 255, 0.6)",
                        maxWidth: "520px",
                        lineHeight: "1.6",
                    }}
                >
                    Trade with institutional-grade liquidity and lightning-fast execution.
                    Discover professional-grade perp markets powered by Orderly Network.
                </Text>
            </Flex>

            {/* Animated Glow Effect */}
            <div
                className="banner-glow"
                style={{
                    position: "absolute",
                    right: "-5%",
                    top: "-10%",
                    width: "350px",
                    height: "350px",
                    background: "radial-gradient(circle, rgba(64, 61, 255, 0.2) 0%, transparent 70%)",
                    filter: "blur(50px)",
                    zIndex: 0
                }}
            />
        </Box>
    );
};

export default MarketsBanner;
