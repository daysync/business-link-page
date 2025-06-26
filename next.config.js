/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      "via.placeholder.com",
      "upload.wikimedia.org",
      "i.pravatar.cc",
      "picsum.photos",
    ],
  },
};

module.exports = nextConfig;
