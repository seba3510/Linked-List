import { merge } from "webpack-merge";
import commonConfig from "./webpack.common.mjs";

export default merge(commonConfig, {
	mode: "development",
	devtool: "source-map",
	optimization: {
		minimize: false,
	},
	stats: "error-warnings",
	infrastructureLogging: {
		level: "warn",
	},

	devServer: {
		static: "./dist",
		open: true,
	},
});
