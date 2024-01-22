/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

const nextConfigFunction = async (phase) => {
  const withPWA = (await import("@ducanh2912/next-pwa")).default({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavChaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: false,
    workBoxOptions: {
      disableDevLogs: true,
    },
  });
  return withPWA(nextConfig);
};

export default nextConfigFunction;
