/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com"],
    // loader: "imgix",
    // path: "",
  },
};

module.exports = nextConfig;
