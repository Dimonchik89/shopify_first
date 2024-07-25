/** @type {import('next').NextConfig} */

import { withFrameworkConfig } from './src/framework/common/config.js';

const nextConfig = withFrameworkConfig({
  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK,
  },
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
});

console.log('next.config.js', nextConfig);

export default nextConfig;
