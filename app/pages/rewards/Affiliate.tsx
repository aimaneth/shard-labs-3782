import { Helmet } from "react-helmet-async";
import { generatePageTitle } from "@/utils/utils";
import { Dashboard, ReferralProvider } from "@orderly.network/affiliate";
import { Flex, Text, Box } from "@orderly.network/ui";
import { getRuntimeConfig } from "@/utils/runtime-config";

export default function RewardsAffiliate() {
  const brokerName = getRuntimeConfig("VITE_ORDERLY_BROKER_NAME") || "Shard DEX";

  return (
    <>
      <Helmet>
        <title>{generatePageTitle("Affiliate")}</title>
      </Helmet>

      <div className="shard-affiliate-page oui-px-4 md:oui-px-8 oui-py-8">
        {/* Header Hero Section */}
        <Box
          className="oui-mb-8 oui-p-8 oui-rounded-2xl oui-relative oui-overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(64, 61, 255, 0.1) 0%, rgba(5, 5, 8, 0.8) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
          }}
        >
          <div
            className="oui-absolute oui-right-0 oui-top-0 oui-w-full oui-h-full"
            style={{
              background: "radial-gradient(circle at 90% 10%, rgba(64, 61, 255, 0.15) 0%, transparent 50%)",
              zIndex: 0
            }}
          />

          <Flex direction="column" className="oui-relative" style={{ zIndex: 1 }}>
            <Flex itemAlign="center" className="oui-gap-2 oui-mb-2">
              <div style={{ width: "4px", height: "18px", background: "#403dff", borderRadius: "1px" }} />
              <Text className="oui-text-white/60 oui-font-medium oui-uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                Affiliate Program
              </Text>
            </Flex>

            <Text className="oui-text-white oui-font-bold oui-mb-3" style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", lineHeight: "1" }}>
              Refer & Earn
            </Text>

            <Text className="oui-text-white/60 oui-max-w-xl" style={{ fontSize: "1.0625rem", lineHeight: "1.6" }}>
              Join the {brokerName} Affiliate Program and earn high commission rates by referring professional traders to the next generation of modular perpetual trading.
            </Text>
          </Flex>
        </Box>

        {/* Affiliate Dashboard Component */}
        <ReferralProvider
          becomeAnAffiliateUrl={getRuntimeConfig("VITE_TWITTER_URL") || "https://twitter.com/ShardDEX"}
          learnAffiliateUrl={getRuntimeConfig("VITE_DISCORD_URL") || "https://discord.gg/sharddex"}
          referralLinkUrl={typeof window !== 'undefined' ? window.location.origin : "https://shardperp.com"}
        >
          <div className="shard-affiliate-dashboard">
            <Dashboard.AffiliatePage />
          </div>
        </ReferralProvider>
      </div>
    </>
  );
}


