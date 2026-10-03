export default defineConfig([
	{
		files: ["**/*.{js}"],
		extends: [js.configs.recommended],
	},
	{
		files: ["**/*.{ts}"],
		extends: [tseslint.configs.recommendedTypeChecked],
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
	},
]);
