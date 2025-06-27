"use client";
import React, { useState, useEffect, useRef } from "react";
import { Film, Menu, X } from "lucide-react";
import gsap from "gsap";

const navLinks = [
	{ name: "Home", href: "#" },
	{ name: "Portfolio", href: "#portfolio" },
	{ name: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const menuPanelRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const heroHeight = window.innerHeight * 0.2; // Most of the hero section

			setIsScrolled(scrollPosition > heroHeight);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// GSAP animation for mobile menu
	useEffect(() => {
		if (!menuPanelRef.current || !overlayRef.current) return;
		if (menuOpen) {
			gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.25, pointerEvents: "auto" });
			gsap.fromTo(
				menuPanelRef.current,
				{ y: "100%", opacity: 0, scale: 0.98 },
				{ y: 0, opacity: 1, scale: 1, duration: 0.45, ease: "power3.out" }
			);
		} else {
			gsap.to(menuPanelRef.current, {
				y: "100%",
				opacity: 0,
				scale: 0.98,
				duration: 0.35,
				ease: "power3.in",
			});
			gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.25, pointerEvents: "none" });
		}
	}, [menuOpen]);

	// Close menu on route change or scroll
	useEffect(() => {
		if (!menuOpen) return;
		const close = () => setMenuOpen(false);
		window.addEventListener("resize", close);
		window.addEventListener("scroll", close);
		return () => {
			window.removeEventListener("resize", close);
			window.removeEventListener("scroll", close);
		};
	}, [menuOpen]);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out max-w-7xl mx-auto  ${
				isScrolled ? "pt-0 pb-2 px-6 mt-4" : "pt-0 pb-2 px-0"
			}`}>
			<div
				className={`mx-auto bg-card/20 backdrop-blur-xl border-border/30 transition-all duration-500 ease-out ${
					isScrolled
						? "max-w-4xl rounded-xl shadow-xl border px-6 py-3"
						: "max-w-full border-b px-6 py-3"
				}`}>
				<div className="flex items-center justify-between">
					<div
						className={`flex items-center space-x-2 transition-all duration-300 ${
							isScrolled ? "scale-90" : "scale-95"
						}`}>
						<Film
							className={`text-primary transition-all duration-300 ${
								isScrolled ? "h-6 w-6" : "h-7 w-7"
							}`}
						/>
						<span
							className={`font-bold text-foreground transition-all duration-300 ${
								isScrolled ? "text-lg" : "text-xl"
							}`}>
							EGT Media
						</span>
					</div>

					{/* Desktop nav links */}
					<div className="hidden md:flex items-center space-x-6">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="text-base text-muted-foreground hover:text-primary transition-colors font-medium hover:bg-accent/50 rounded-lg px-3 py-1.5">
								{link.name}
							</a>
						))}
					</div>

					{/* Mobile burger menu button */}
					<button
						className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						onClick={() => setMenuOpen((open) => !open)}>
						{menuOpen ? (
							<X className="h-7 w-7 text-primary" />
						) : (
							<Menu className="h-7 w-7 text-primary" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile menu overlay (full screen) */}
			<div
				ref={overlayRef}
				className="md:hidden fixed inset-0 z-40 bg-black/80 opacity-0 pointer-events-none"
				aria-hidden={!menuOpen}
				onClick={() => setMenuOpen(false)}
			/>
			{/* Mobile menu panel (full screen, GSAP animated) */}
			<div
				ref={menuPanelRef}
				className="md:hidden fixed inset-0 z-50 flex flex-col justify-center items-center bg-card/95 backdrop-blur-xl shadow-2xl border-b border-border/30 opacity-0"
				style={{ transform: "translateY(100%)" }}
				role="menu"
				aria-label="Main menu">
				<button
					className="absolute top-6 right-6 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
					aria-label="Close menu"
					onClick={() => setMenuOpen(false)}>
					<X className="h-8 w-8 text-primary" />
				</button>
				<div className="flex flex-col items-center space-y-8">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-2xl text-white font-bold hover:text-primary transition-colors px-6 py-3 rounded-2xl"
							onClick={() => setMenuOpen(false)}
							tabIndex={menuOpen ? 0 : -1}
							role="menuitem">
							{link.name}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
}
