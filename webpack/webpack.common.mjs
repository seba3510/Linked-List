import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
	entry: "./src/scripts/index.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "./scripts/bundle.js",
		clean: true,
		pathinfo: false,
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		extensionAlias: {
			".js": [".js", ".ts"],
		},
		tsconfig: true,
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.html$/i,
				use: ["html-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
					options: {
						transpileOnly: true,
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
	],
};
