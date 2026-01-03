import { Helmet } from "react-helmet-async";
import { generatePageTitle } from "@/utils/utils";
import { Flex, Text } from "@orderly.network/ui";
import { getRuntimeConfig } from "@/utils/runtime-config";
import { Users, MessageSquare, TrendingUp } from "lucide-react";

export default function RewardsAffiliate() {
  const brokerName = getRuntimeConfig("VITE_ORDERLY_BROKER_NAME") || "Shard DEX";

  // Premium card styling with hover effects
  const cardClassName = "oui-rounded-[1.5rem] oui-p-8 oui-relative oui-overflow-hidden oui-transition-all oui-duration-300 hover:oui-translate-y-[-4px] hover:oui-shadow-[0_10px_40px_-10px_rgba(64,61,255,0.15)]";

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
      <div className="oui-w-full oui-mx-auto oui-px-6 oui-py-12" style={{ maxWidth: "960px" }}>

        {/* -- Hero Section -- */}
        <div
          className="oui-p-10 md:oui-p-16 oui-mb-10 oui-relative oui-overflow-hidden oui-text-center"
          style={{
            background: "radial-gradient(circle at center top, #20202b 0%, #050508 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 20px 60px -10px rgba(0, 0, 0, 0.6)",
            borderRadius: "40px" // Explicit roundness
          }}
        >
          {/* Decorative noise/glow at top center */}
          <div className="oui-absolute oui-top-0 oui-left-1/2 -oui-translate-x-1/2 oui-w-[600px] oui-h-[300px] oui-bg-primary/20 oui-blur-[120px] oui-rounded-full oui-pointer-events-none" />

          <div className="oui-relative oui-z-10">
            {/* Status Badge */}
            <div className="oui-inline-flex oui-items-center oui-gap-2 oui-px-4 oui-py-1.5 oui-rounded-full oui-bg-white/5 oui-border oui-border-white/10 oui-mb-8 oui-backdrop-blur-md">
              <span className="oui-relative oui-flex oui-h-2 oui-w-2">
                <span className="oui-animate-ping oui-absolute oui-inline-flex oui-h-full oui-w-full oui-rounded-full oui-bg-primary oui-opacity-75"></span>
                <span className="oui-relative oui-inline-flex oui-rounded-full oui-h-2 oui-w-2 oui-bg-primary"></span>
              </span>
              <span className="oui-text-[11px] oui-font-bold oui-text-white/90 oui-uppercase oui-tracking-widest">
                Official Partner Program
              </span>
            </div>

            {/* Headline */}
            <h1 className="oui-text-white oui-font-extrabold oui-mb-0 oui-tracking-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
              Scale with usage. <br />
              <span className="oui-bg-clip-text oui-text-transparent oui-bg-gradient-to-r oui-from-primary-light oui-to-primary">Earn with scale.</span>
            </h1>

            <Text
              className="oui-text-base-contrast-54 oui-text-lg oui-mb-8 oui-leading-relaxed oui-max-w-2xl oui-mx-auto oui-block"
              style={{ marginTop: "-40px" }}
            >
              Monetize your influence with {brokerName}'s institutional-grade infrastructure.
              <br className="oui-hidden md:oui-block" />Unlock elite commission tiers and weekly settlements.
            </Text>

            {/* Aesthetic Buttons */}
            <Flex className="oui-gap-4 oui-justify-center oui-flex-wrap">
              <a
                href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
                target="_blank"
                className="oui-inline-flex oui-items-center oui-justify-center oui-px-8 md:oui-px-12 oui-py-4 oui-rounded-full oui-text-white oui-font-bold oui-transition-all hover:oui-scale-[1.03] active:oui-scale-[0.98]"
                style={primaryBtnStyle}
              >
                Apply for Partnership
              </a>
              <a
                href={getRuntimeConfig("VITE_DISCORD_URL")}
                target="_blank"
                className="oui-inline-flex oui-items-center oui-justify-center oui-px-8 md:oui-px-12 oui-py-4 oui-rounded-full oui-bg-white/[0.03] oui-text-white oui-font-bold oui-border oui-border-white/10 hover:oui-bg-white/[0.08] oui-transition-all hover:oui-scale-[1.03]"
              >
                Contact Team
              </a>
            </Flex>
          </div>
        </div>

        {/* -- Metrics Bar (Single Row Split) -- */}
        <div
          className="oui-flex oui-flex-col md:oui-flex-row oui-divide-y md:oui-divide-y-0 md:oui-divide-x oui-divide-white/10 oui-mb-8 oui-overflow-hidden"
          style={{ ...cardStyle, padding: "0", borderRadius: "24px" }}
        >
          {[
            { label: "Commission", value: "40%", sub: "Revenue Split" },
            { label: "Payouts", value: "Weekly", sub: "USDC Settlement" },
            { label: "Support", value: "24/7", sub: "VIP Manager" }
          ].map((stat, i) => (
            <div
              key={i}
              className="oui-flex-1 oui-p-8 oui-flex oui-flex-col oui-items-center oui-text-center hover:oui-bg-white/[0.02] oui-transition-colors"
            >
              <Text
                className="oui-text-white oui-font-extrabold oui-text-5xl md:oui-text-6xl oui-mb-2 oui-tracking-tighter"
                style={{ textShadow: "0 0 30px rgba(64,61,255,0.3)" }}
              >
                {stat.value}
              </Text>
              <Text className="oui-text-white/40 oui-text-sm oui-font-bold oui-uppercase oui-tracking-wider oui-mb-1">
                {stat.label}
              </Text>
              <Text className="oui-text-primary-light oui-text-sm font-medium">{stat.sub}</Text>
            </div>
          ))}
        </div>

        {/* -- Details Grid (Aesthetic Update) -- */}
        <div className="oui-grid oui-grid-cols-1 md:oui-grid-cols-2 oui-gap-5">

          {/* Requirements */}
          <div className={cardClassName} style={{ ...cardStyle, borderRadius: "24px" }}>
            <Text className="oui-text-xl oui-text-white oui-font-bold oui-mb-6">
              Who Qualifies?
            </Text>

            <div className="oui-space-y-1.5">
              {[
                { title: "Huge Influence", desc: "5,000+ followers on X / Youtube", icon: <Users size={18} className="oui-text-white" /> },
                { title: "Active Community", desc: "Engaged Discord or Telegram group", icon: <MessageSquare size={18} className="oui-text-white" /> },
                { title: "Consistent Volume", desc: "Organic trading activity history", icon: <TrendingUp size={18} className="oui-text-white" /> }
              ].map((req, i) => (
                <div key={i} className="oui-flex oui-items-center oui-gap-4 oui-py-2 oui-px-3 oui-rounded-2xl oui-bg-white/[0.03] hover:oui-bg-white/[0.06] oui-transition-colors">
                  <div className="oui-w-10 oui-h-10 oui-rounded-xl oui-bg-primary/20 oui-flex oui-items-center oui-justify-center oui-shrink-0" style={{ boxShadow: "0 0 15px rgba(64,61,255,0.2)" }}>
                    {req.icon}
                  </div>
                  <div>
                    <Text className="oui-block oui-text-white oui-font-bold oui-text-sm md:oui-text-base oui-mb-0.5">{req.title}</Text>
                    <Text className="oui-block oui-text-white/50 oui-text-xs md:oui-text-sm">{req.desc}</Text>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className={cardClassName} style={{ ...cardStyle, borderRadius: "24px" }}>
            <Text className="oui-text-xl oui-text-white oui-font-bold oui-mb-6">
              Your Journey
            </Text>

            <div className="oui-relative oui-space-y-6 oui-pl-2">
              {/* Dashed Timeline Line */}
              <div className="oui-absolute oui-left-[24px] oui-top-4 oui-bottom-4 oui-w-0 oui-border-l oui-border-dashed oui-border-white/10" />

              {[
                { t: "Apply", d: "Fill form (< 2 mins)" },
                { t: "Review", d: "Approval within 48h" },
                { t: "Earn", d: "Get links & start earning" }
              ].map((step, i) => (
                <div key={i} className="oui-flex oui-items-center oui-gap-5 oui-relative">
                  <div className="oui-w-8 oui-h-8 oui-rounded-full oui-bg-[#16161f] oui-border oui-border-primary/50 oui-flex oui-items-center oui-justify-center oui-z-10 oui-text-xs oui-font-bold oui-text-primary-light" style={{ boxShadow: "0 0 10px rgba(64,61,255,0.3)" }}>
                    {i + 1}
                  </div>
                  <div>
                    <Text className="oui-block oui-text-white oui-font-bold oui-text-base">{step.t}</Text>
                    <Text className="oui-block oui-text-white/40 oui-text-sm">{step.d}</Text>
                  </div>
                </div>
              ))}
            </div>

            <div className="oui-mt-8 oui-pt-5 oui-border-t oui-border-white/5">
              <a
                href={getRuntimeConfig("VITE_TWITTER_URL")}
                target="_blank"
                className="oui-inline-flex oui-items-center oui-gap-2 oui-px-4 oui-py-2 oui-rounded-full oui-bg-white/[0.03] hover:oui-bg-white/[0.08] oui-border oui-border-white/5 oui-transition-all"
              >
                <span className="oui-text-primary-light oui-text-sm oui-font-bold">Fast-track on X</span>
                <span className="oui-text-white/60">→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
