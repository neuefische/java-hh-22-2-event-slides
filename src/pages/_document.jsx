import createEmotionServer from "@emotion/server/create-instance";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React, { Children } from "react";
import pkg from "../../package.json";
import { cache } from "../ions/configs/emotion";

const { extractCritical } = createEmotionServer(cache);

class AppDocument extends Document {
	static async getInitialProps(ctx) {
		// Resolution order
		//
		// On the server:
		// 1. app.getInitialProps
		// 2. page.getInitialProps
		// 3. document.getInitialProps
		// 4. app.render
		// 5. page.render
		// 6. document.render
		//
		// On the server with error:
		// 1. document.getInitialProps
		// 2. app.render
		// 3. page.render
		// 4. document.render
		//
		// On the client
		// 1. app.getInitialProps
		// 2. page.getInitialProps
		// 3. app.render
		// 4. page.render

		// Render app and page and get the context of the page with collected side effects.
		try {
			const initialProps = await Document.getInitialProps(ctx);
			const styles = extractCritical(initialProps.html);
			return {
				...initialProps,
				styles: [
					...Children.toArray(initialProps.styles),
					<style
						key="emotion"
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: styles.css }}
						data-emotion-css={styles.ids.join(" ")}
					/>,
				],
			};
		} catch (error) {
			console.error(error);
		}
	}
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta name="version" content={pkg.version} />
					<meta name="application-name" content="Neue Fische Academy" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="black" />
					<meta name="apple-mobile-web-app-title" content="Academy" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="robots" content="noindex,nofollow" />
					<meta name="theme-color" content="#ff5a36" />
					<meta name="msapplication-TileColor" content="#ff5a36" />
					<meta name="msapplication-tap-highlight" content="no" />

					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/icons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/icons/favicon-16x16.png"
					/>

					<link rel="icon" href="/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;
