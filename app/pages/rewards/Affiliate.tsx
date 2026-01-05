import { Helmet } from "react-helmet-async";
import { generatePageTitle } from "@/utils/utils";
import { Flex, Text } from "@orderly.network/ui";
import { getRuntimeConfig } from "@/utils/runtime-config";
import { ClipboardList, Share2, RefreshCcw, ArrowRight, ArrowDown, UserPlus, ArrowLeftRight, Clipboard } from "lucide-react";

export default function RewardsAffiliate() {
  const brokerName = getRuntimeConfig("VITE_ORDERLY_BROKER_NAME") || "Shard DEX";

  // Premium card styling with hover effects
  const cardClassName = "rounded-[1.5rem] p-8 relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_10px_40px_-10px_rgba(64,61,255,0.15)]";

  const cardStyle = {
    background: "linear-gradient(180deg, rgba(30, 30, 40, 0.4) 0%, rgba(10, 10, 12, 0.8) 100%)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(12px)",
  };

  // Aesthetic button styles
  const primaryBtnStyle = {
    background: "linear-gradient(90deg, #4da2ff 0%, #403dff 100%)",
    boxShadow: "0 0 20px rgba(64,61,255,0.4), inset 0 0 0 1px rgba(255,255,255,0.2)",
  };

  return (
    <>
      <Helmet>
        <title>{generatePageTitle("Partnership Program")}</title>
      </Helmet>

      {/* Main Container - Constrained Width (960px max) */}
      <div className="w-full mx-auto px-6 py-12" style={{ maxWidth: "960px" }}>

        {/* -- Hero Section -- */}
        <div
          className="p-6 md:p-16 mb-10 relative overflow-hidden text-center"
          style={{
            background: "radial-gradient(circle at center top, #20202b 0%, #050508 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 20px 60px -10px rgba(0, 0, 0, 0.6)",
            borderRadius: "40px" // Explicit roundness
          }}
        >
          {/* Decorative noise/glow at top center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            {/* Headline */}
            <h1 className="text-white font-extrabold mb-0 tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: "1", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
              Scale with usage. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">Earn with scale.</span>
            </h1>

            <p
              className="text-base-contrast-54 text-lg mt-2 mb-0 leading-relaxed max-w-2xl mx-auto block"
            >
              Monetize your influence with {brokerName}'s institutional-grade infrastructure.
              <br className="hidden md:block" />Unlock elite commission tiers and weekly settlements.
            </p>
          </div>
        </div>

        {/* -- Dual Cards: Referrer vs Referee -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Blue Card: Referrer */}
          <div
            className={cardClassName}
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px"
            }}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <Text className="block text-white font-extrabold text-3xl mb-2">Referrer</Text>
                <Text className="block text-white/80 text-sm leading-relaxed pr-4">
                  Earn 10% commission from friends' trades. Want higher rates? Submit an application.
                </Text>
              </div>
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                <UserPlus className="text-white" size={24} />
              </div>
            </div>

            <div className="flex items-end justify-between mt-8">
              <a
                href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
                target="_blank"
                className="bg-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors"
                style={{ color: "#1d4ed8" }}
              >
                Become an affiliate
              </a>
              <div className="text-right">
                <Text className="block text-white/60 text-xs uppercase font-bold tracking-wider">Up to</Text>
                <Text className="block text-white font-extrabold text-2xl">60%</Text>
                <Text className="block text-white/60 text-xs">Commission</Text>
              </div>
            </div>
          </div>

          {/* Green Card: Referee */}
          <div
            className={cardClassName}
            style={{
              background: "linear-gradient(135deg, #059669 0%, #064e3b 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px"
            }}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <Text className="block text-white font-extrabold text-3xl mb-2">Referee <span className="opacity-60">(Trader)</span></Text>
                <Text className="block text-white/80 text-sm leading-relaxed pr-4">
                  Get rebates by trading with a referral code. Start your journey with benefits.
                </Text>
              </div>
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                <ArrowLeftRight className="text-white" size={24} />
              </div>
            </div>

            <div className="mt-12">
              <button
                className="bg-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-emerald-50 transition-colors"
                style={{ color: "#065f46" }}
              >
                Enter Code
              </button>
            </div>
          </div>

        </div>

        {/* -- How It Works (Horizontal) -- */}
        <div
          className="oui-rounded-[24px] oui-p-8 md:oui-p-12 oui-relative oui-overflow-hidden"
          style={{
            background: "#0d0d12",
            border: "1px solid rgba(255, 255, 255, 0.08)"
          }}
        >
          <h2 className="text-center text-white font-bold text-3xl mt-4 mb-14 block w-full">How It Works</h2>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4">

            {/* Step 1 */}
            <div className="flex-1 flex flex-col items-center text-center relative">
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="absolute inset-0 bg-[#16161f] rounded-2xl border border-white/10 rotate-6" />
                <div className="absolute inset-0 bg-[#1b1b24] rounded-2xl border border-white/5 -rotate-3" />
                <div className="relative h-full w-full flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
                  <ClipboardList size={28} className="text-primary-light" style={{ filter: "drop-shadow(0 0 8px rgba(64,61,255,0.5))" }} />
                </div>
              </div>
              <Text className="oui-text-white oui-font-bold oui-text-lg oui-mb-2">Trade $10k+ or Apply</Text>
              <Text className="oui-text-white/40 oui-text-sm oui-leading-relaxed oui-max-w-[240px]">
                Unlock a referral code automatically ($0 of $10,000 completed), or apply via form.
              </Text>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex items-center justify-center pt-4 opacity-20">
              <ArrowRight size={24} className="oui-text-white" />
            </div>
            <div className="md:hidden self-center opacity-20">
              <ArrowDown size={24} className="oui-text-white" />
            </div>

            {/* Step 2 */}
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="absolute inset-0 bg-[#16161f] rounded-2xl border border-white/10 rotate-6" />
                <div className="absolute inset-0 bg-[#1b1b24] rounded-2xl border border-white/5 -rotate-3" />
                <div className="relative h-full w-full flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
                  <Share2 size={28} className="text-primary-light" style={{ filter: "drop-shadow(0 0 8px rgba(64,61,255,0.5))" }} />
                </div>
              </div>
              <Text className="oui-text-white oui-font-bold oui-text-lg oui-mb-2">Share</Text>
              <Text className="oui-text-white/40 oui-text-sm oui-leading-relaxed oui-max-w-[240px]">
                Share your personalized referral code with others to start earning.
              </Text>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex items-center justify-center pt-4 opacity-20">
              <ArrowRight size={24} className="oui-text-white" />
            </div>
            <div className="md:hidden self-center opacity-20">
              <ArrowDown size={24} className="oui-text-white" />
            </div>

            {/* Step 3 */}
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="absolute inset-0 bg-[#16161f] rounded-2xl border border-white/10 rotate-6" />
                <div className="absolute inset-0 bg-[#1b1b24] rounded-2xl border border-white/5 -rotate-3" />
                <div className="relative h-full w-full flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
                  <RefreshCcw size={28} className="text-primary-light" style={{ filter: "drop-shadow(0 0 8px rgba(64,61,255,0.5))" }} />
                </div>
              </div>
              <Text className="oui-text-white oui-font-bold oui-text-lg oui-mb-2">Earn</Text>
              <Text className="oui-text-white/40 oui-text-sm oui-leading-relaxed oui-max-w-[240px]">
                Refer others to earn commission, or use a code to earn rebates.
              </Text>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
