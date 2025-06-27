"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Twitter, Youtube } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const socials = [
	{ name: "Instagram", url: "https://instagram.com/luxedit", icon: <Instagram /> },
	{ name: "Twitter", url: "https://twitter.com/luxedit", icon: <Twitter /> },
	{ name: "YouTube", url: "https://youtube.com/luxedit", icon: <Youtube /> },
];

const nav = [
	{ name: "Home", href: "#" },
	{ name: "Portfolio", href: "#portfolio" },
	// { name: "Services", href: "#services" },
	{ name: "Contact", href: "#contact" },
];

export default function Footer() {
	const footerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!footerRef.current) return;
		gsap.fromTo(
			footerRef.current,
			{ y: 40, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1.1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: footerRef.current,
					start: "top 95%",
				},
			}
		);
	}, []);

	return (
		<footer className="relative w-full overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-black"></div>

			{/* Subtle border pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:100px_1px]"></div>
			</div>

			{/* Accent glow */}
			<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-primary/10 rounded-full blur-3xl"></div>

			<div
				ref={footerRef}
				className="relative z-10 w-full bg-card/40 border-t border-border/30 backdrop-blur-xl shadow-2xl py-12 px-4">
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
					<div className="text-muted-foreground text-base font-medium">
						&copy; {new Date().getFullYear()}{" "}
						<span className="text-primary font-semibold">EGT Media</span>. All rights reserved.
					</div>
					<div className="flex space-x-8">
						{socials.map((s) => (
							<a
								key={s.name}
								href={s.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl transition-all duration-300 hover:scale-125 hover:text-primary">
								<span role="img" aria-label={s.name}>
									{s.icon}
								</span>
							</a>
						))}
					</div>
					<div className="flex space-x-6 text-base">
						{nav.map((n) => (
							<a
								key={n.name}
								href={n.href}
								className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
								{n.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
