/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  unoptimized: true,
  images: {
    // domains: ["seal-app-fizgj.ondigitalocean.app"], // Add your domain here
    // domains: ["localhost"],
    domains: ["localhost:1337"],
  },
};

module.exports = nextConfig;
module.exports = {
  images: {
    unoptimized: true,
    domains: ["localhost:1337"],
    loader: "imgix",
    path: "",
  },
};
// module.exports = {
//   images: {
//     // domains: ["seal-app-fizgj.ondigitalocean.app"],
//     // domains: ["localhost"],
//     domains: ["localhost"],
//   },
// };
// module.exports = {
//   images: {
//     unoptimized: true,
//   },
// };
