import { useNavigate } from "react-router-dom";
import { Flex, Text, Button } from "@orderly.network/ui";
import { Scaffold } from "@orderly.network/ui-scaffold";
import { useOrderlyConfig } from "@/utils/config";
import { useNav } from "@/hooks/useNav";
import { renderSEOTags } from "@/utils/seo-tags";
import { getPageMeta } from "@/utils/seo";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import SupportedChains from "@/components/home/SupportedChains";
import CallToAction from "@/components/home/CallToAction";
import ProductShowcase from "@/components/home/ProductShowcase";
import HomeFooter from "@/components/home/HomeFooter";

import "@/styles/home.css";

export default function Index() {
  const pageMeta = getPageMeta();
  const config = useOrderlyConfig();
  const { onRouteChange } = useNav();
  const navigate = useNavigate();

  return (
    <Scaffold
      mainNavProps={config.scaffold.mainNavProps}
      footerProps={config.scaffold.footerProps}
      routerAdapter={{
        onRouteChange,
        currentPath: "/",
      }}
      bottomNavProps={config.scaffold.bottomNavProps}
    >
      <div className="oui-min-h-screen oui-bg-base-10 oui-overflow-x-hidden shard-home-page">
        <main className="oui-max-w-6xl oui-mx-auto oui-px-6 md:oui-px-20">
          <Hero />

          <ProductShowcase />

          <div className="oui-flex oui-flex-col oui-pb-48">
            <SupportedChains />
            <div className="oui-h-px oui-w-full oui-bg-white/5 my-8 md:my-12" />
            <Features />
            <div className="oui-h-px oui-w-full oui-bg-white/5 my-8 md:my-12" />
            <CallToAction />
          </div>
        </main>
        {/* Full-width Footer outside the constrained main */}
        <HomeFooter />
      </div>
    </Scaffold>
  );
}
