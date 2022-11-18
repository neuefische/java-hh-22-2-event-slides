/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	/* config options here */
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/",
				destination: "/1",
				permanent: true,
			},
		];
	},
	webpack(config) {
		config.module.rules.push({
				test: /\.wav$/,
				use: {
					loader: "file-loader",
					options: {
						publicPath: "/_next/static/sounds/",
						outputPath: "static/sounds/",
						name: "[name].[ext]",
						esModule: false,
					},
				},
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"]
			});
		return config;
	},
};

module.exports = nextConfig;
