import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { cjsInterop } from "vite-plugin-cjs-interop";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import fs from "fs";
import path from "path";

function loadConfigTitle(): string {
  try {
    const configPath = path.join(__dirname, "public/config.js");
    if (!fs.existsSync(configPath)) {
      return "Shard DEX";
    }

    const configText = fs.readFileSync(configPath, "utf-8");
    const jsonText = configText
      .replace(/window\.__RUNTIME_CONFIG__\s*=\s*/, "")
      .replace(/;$/, "")
      .trim();

    const config = JSON.parse(jsonText);
    return config.VITE_ORDERLY_BROKER_NAME || "Shard DEX";
  } catch (error) {
    console.warn("Failed to load title from config.js:", error);
    return "Shard DEX";
  }
}

function htmlTitlePlugin(): Plugin {
  const title = loadConfigTitle();
  console.log(`Using title from config.js: ${title}`);

  return {
    name: "html-title-transform",
    transformIndexHtml(html) {
      return html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
    },
  };
}

export default defineConfig(() => {
  const basePath = process.env.PUBLIC_PATH || "/";

  return {
    base: basePath,
    plugins: [
      react(),
      tsconfigPaths(),
      htmlTitlePlugin(),
      cjsInterop({
        dependencies: ["bs58", "@coral-xyz/anchor", "lodash"],
      }),
      nodePolyfills({
        globals: {
          Buffer: true,
          process: true,
          global: true,
        },
        include: ["buffer", "crypto", "stream"],
      }),
    ],
    build: {
      outDir: "build/client",
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("node_modules")) {
              if (id.includes("woofi-swap-widget-kit")) {
                return "woofi-widget";
              }
              if (id.includes("three")) {
                return "three";
              }
              // Combine orderly, web3, and all crypto-related polyfills to ensure they initialize correctly
              if (
                id.includes("@orderly.network") ||
                id.includes("@privy-io") ||
                id.includes("privy") ||
                id.includes("wagmi") ||
                id.includes("viem") ||
                id.includes("ethers") ||
                id.includes("crypto-browserify") ||
                id.includes("browserify-") ||
                id.includes("create-hash") ||
                id.includes("create-hmac") ||
                id.includes("randombytes") ||
                id.includes("pbkdf2") ||
                id.includes("ripemd160") ||
                id.includes("sha.js") ||
                id.includes("buffer") ||
                id.includes("stream-browserify") ||
                id.includes("elliptic") ||
                id.includes("bn.js")
              ) {
                return "orderly-web3";
              }
              return "vendor";
            }
          },
        },
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom"],
    },
  };
});
