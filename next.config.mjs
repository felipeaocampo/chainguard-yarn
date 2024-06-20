/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/5osmwku1bn9f/**",
      },
    ],
  },
  transpilePackages: ["react-tweet"],
};

export default nextConfig;
