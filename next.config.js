const withNextra = require("nextra")("nextra-theme-docs", "./theme.config.js");

module.exports = withNextra({
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	},

	async redirects() {
		return [
		  // Basic redirect
		  {
			source: '/install.html',
			destination: '/',
			permanent: true,
		  },
		  {
			source: '/install',
			destination: '/',
			permanent: true,
		  },
		]
	  }
});