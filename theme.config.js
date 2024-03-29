export default {
	github: "https://github.com/wtfhappenedinfeb2023/wtfhappenedinfeb2023.github.io",
	docsRepositoryBase: "https://github.com/wtfhappenedinfeb2023/wtfhappenedinfeb2023.github.io/blob/master",
	titleSuffix: " – wtfhappenedinfeb2023",
	i18n: [
		{ locale: 'en', text: 'English' },
		{ locale: 'fr', text: 'French' }
	],
	logo: (
		<>
			<span className="mr-2 font-extrabold hidden md:inline">wtfhappenedinfeb2023</span>
			<span className="text-gray-600 font-normal hidden md:inline">
				Website dedicated to stop spam on Bitcoin.
			</span>
		</>
	),
	head: (
		<>
			<title>WTF is spam on Bitcoin ?</title>
			<meta charSet="utf-8"></meta>
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="Content-Language" content="en" />
			<meta name="description" content="Website dedicated to stop spam on Bitcoin." />
			<meta name="og:description" content="Website dedicated to stop spam on Bitcoin." />
			<meta name="og:title" content="wtfhappenedinfeb2023" />
			<meta name="og:image" content="https://wtfhappenedinfeb2023.com/bitcoin-banner.jpg" />
			<meta name="og:url" content="https://wtfhappenedinfeb2023.com/" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:image" content="https://https://wtfhappenedinfeb2023.com/bitcoin-banner.jpg" />
			<meta name="twitter:site:domain" content="https://wtfhappenedinfeb2023.com/" />
			<meta name="twitter:url" content="https://wtfhappenedinfeb2023.com/" />
			<meta name="apple-mobile-web-app-title" content="wtfhappenedinfeb2023" />

			<script defer data-domain="wtfhappenedinfeb2023.com" src="https://analytics.orangepill.ovh/js/script.js"></script>
		</>
	),
	footer: true,
	footerEditLink: "Edit this page on GitHub",
	footerText: <>{new Date().getFullYear()} WTF happened in february 2023 ?</>,
	floatTOC: true,
	defaultMenuCollapsed: false
}
