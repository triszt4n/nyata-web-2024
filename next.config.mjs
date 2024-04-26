/** @type {import('next').NextConfig} */
const nextConfig = withPlausibleProxy({
  customDomain: "https://visit.kir-dev.hu",
})({
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push(
      { test: /\.svg$/, use: "@svgr/webpack" },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!canvas)/,
        use: {
          loader: "babel-loader",
        },
      },
    );
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias.canvas = false;
    return config;
  },
});

export default nextConfig;
