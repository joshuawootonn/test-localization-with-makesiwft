const withMakeswift = require("@makeswift/runtime/next/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "fr", "nl-NL"],
    defaultLocale: "en-US",
  },
};

module.exports = withMakeswift(nextConfig);
