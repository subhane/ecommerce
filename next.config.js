/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "www.w3.org", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
