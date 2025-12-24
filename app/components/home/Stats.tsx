import { FC } from "react";
import { Flex, Text } from "@orderly.network/ui";

const StatItem: FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="home-stat-item oui-flex-1 oui-w-full md:oui-w-auto">
        <Text
            className="home-hero-text"
            style={{ fontSize: "2.5rem", color: "#403dff", marginBottom: "0.25rem" }}
        >
            {value}
        </Text>
        <Text
            size="xs"
            weight="bold"
            className="oui-uppercase oui-tracking-[0.2em] oui-opacity-60"
            style={{ fontSize: "0.7rem" }}
        >
            {label}
        </Text>
    </div>
);

export const Stats: FC = () => {
    return (
        <section style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem" }}>
            <div className="oui-flex oui-flex-col md:oui-flex-row oui-w-full oui-border-y oui-border-white/5">
                <StatItem label="CUMULATIVE VOLUME" value="$82B" />
                <StatItem label="TOTAL TRADES" value="1.2M" />
                <StatItem label="NETWORK ASSETS" value="100+" />
                <StatItem label="SETTLEMENT SPEED" value="<1s" />
            </div>
        </section>
    );
};

export default Stats;
