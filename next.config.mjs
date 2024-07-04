/** @type {import('next').NextConfig} */

import { withFrameworkConfig } from "./src/framework/common/config.js";

const nextConfig = withFrameworkConfig({
  framework: {
    name: "shopify",
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});

console.log("next.config", nextConfig);

export default nextConfig;
