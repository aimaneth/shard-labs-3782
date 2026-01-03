import { MarketsHomePage } from "@orderly.network/markets";
import { generatePageTitle } from "@/utils/utils";
import { getPageMeta } from "@/utils/seo";
import { getRuntimeConfig, getRuntimeConfigBoolean } from "@/utils/runtime-config";
import { renderSEOTags } from "@/utils/seo-tags";
import { useNavigate } from "react-router-dom";
import { withBasePath } from "@/utils/base-path";
import { MarketsBanner } from "@/components/MarketsBanner";

export default function MarketsIndex() {
  const pageMeta = getPageMeta();
  const pageTitle = generatePageTitle("Markets");
  const navigate = useNavigate();

  return (
    <>
      {renderSEOTags(pageMeta, pageTitle)}
      <div className="shard-markets-page oui-px-4 md:oui-px-8 oui-py-6">
        <MarketsBanner />
        <MarketsHomePage
          comparisonProps={{
            exchangesIconSrc:
              getRuntimeConfigBoolean("VITE_HAS_SECONDARY_LOGO")
                ? "/logo-secondary.webp"
                : undefined,
            exchangesName:
              getRuntimeConfig("VITE_ORDERLY_BROKER_NAME"),
          }}
          onSymbolChange={(symbol) => {
            navigate(withBasePath(`/perp/${symbol.symbol}`));
          }}
        />
      </div>
    </>
  );
}

