import "nextra-theme-docs/style.css";
import { useEffect } from "react";
import '/styles/styles.css';

export default function Nextra({ Component, pageProps }) {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pageProps])

	return <Component {...pageProps} />;
};
