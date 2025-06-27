"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const services = [
	{
		title: "Cinematic Editing",
		description:
			"Transform raw footage into captivating stories with seamless transitions and color grading.",
		icon: "🎬",
	},
	{
		title: "Sound Design",
		description: "Craft immersive audio experiences with professional mixing and sound effects.",
		icon: "🎧",
	},
	{
		title: "Motion Graphics",
		description: "Add dynamic titles, lower thirds, and animated elements for a polished look.",
		icon: "✨",
	},
	{
		title: "Consultation",
		description: "Personalized project planning and creative direction for your brand.",
		icon: "💡",
	},
];

export default function Services() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		if (!sectionRef.current) return;
		itemsRef.current.forEach((el, i) => {
			if (!el) return;
			gsap.fromTo(
				el,
				{ x: i % 2 === 0 ? -80 : 80, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 1.1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: el,
						start: "top 85%",
					},
				}
			);
		});
	}, []);

	return (
		<div className="relative w-full py-24 px-4 overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>

			{/* Subtle line pattern */}
			<div className="absolute inset-0 opacity-3">
				<div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
			</div>

			{/* Accent glows */}
			<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
			<div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>

			<div ref={sectionRef} className="relative z-10 w-full max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground tracking-tight font-notable">
						Services
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						Comprehensive video editing solutions to bring your{" "}
						<span className="text-primary font-semibold">vision to life</span>
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{services.map((service, i) => (
						<div
							key={service.title}
							ref={(el) => {
								itemsRef.current[i] = el;
							}}
							className="relative group rounded-2xl bg-card/40 border border-border/30 shadow-xl backdrop-blur-xl p-8 flex flex-col items-start transition-all duration-300 hover:shadow-[0_0_32px_8px_rgba(30,157,241,0.15)] hover:scale-[1.03]"
							style={{
								boxShadow:
									"0 4px 24px 0 rgba(31, 38, 135, 0.10), 0 1.5px 4px 0 rgba(30,157,241,0.08)",
							}}>
							{/* Card inner glow */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

							{/* Icon glow */}
							<div className="absolute top-8 left-8 w-12 h-12 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

							<span className="text-4xl mb-6 relative z-10">{service.icon}</span>
							<h3 className="text-2xl font-semibold text-foreground mb-4 relative z-10">
								{service.title}
							</h3>
							<p className="text-lg text-muted-foreground leading-relaxed relative z-10">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
