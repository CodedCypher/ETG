// app/layout.tsx

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; // Adjust path as needed
import React from "react";
import { LoaderProvider } from "@/components/LoaderProvider";

export const metadata = {
	title: "EGT Media",
	description:
		"EGT Media – Premium video editing, branding, and creative storytelling for high-end brands and creators.",
	openGraph: {
		title: "EGT Media",
		description:
			"Premium video editing, branding, and creative storytelling for high-end brands and creators.",
		// url: "https://egtmedia.com/",
		siteName: "EGT Media",
		// images: [
		// 	{
		// 		url: "/og-image.png",
		// 		width: 1200,
		// 		height: 630,
		// 		alt: "EGT Media Portfolio Preview",
		// 	},
		// ],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		// card: "summary_large_image",
		title: "EGT Media",
		description:
			"Premium video editing, branding, and creative storytelling for high-end brands and creators.",
		// images: ["/og-image.png"],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Notable&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<LoaderProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</LoaderProvider>
			</body>
		</html>
	);
}
