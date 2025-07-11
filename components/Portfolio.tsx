"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const projects = [
	{
		title: "Luxury Brand Launch",
		description: "Bringing a luxury brand to life with cinematic storytelling and premium editing.",
		video: "https://drive.google.com/file/d/1V7mXQWnWDfFBDii0epD6EzsrI5spiYhU/preview",
		badge: "Awarded",
	},
	{
		title: "Fashion Editorial Reel",
		description: "A high-energy edit for Vogue Italia's digital campaign.",
		video: "https://drive.google.com/file/d/1QcEYcioWSanXQWn-r7oTczz-amDtvc2J/preview",
		badge: "New",
	},
	{
		title: "Automotive Masterpiece",
		description: "Dynamic visuals and sound design for Luxe Motors.",
		video: "https://drive.google.com/file/d/1wIY0JfuC9h5M6-EeC32-rGvTH1hGPd6Q/preview",
		badge: null,
	},
	{
		title: "Resort Experience",
		description: "Capturing the essence of Opal Resorts with immersive video.",
		video: "https://drive.google.com/file/d/1f5mbsZvv5HDLVcRdlhjTHkOlIktgq7tg/preview",
		badge: "Brand Icon",
	},
];

export default function Portfolio() {
	return (
		<section className="relative w-full min-h-screen bg-black py-12 px-4 overflow-hidden">
			{/* Subtle background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/40 to-black pointer-events-none" />
			{/* Minimal pattern overlay */}
			<div className="absolute inset-0 opacity-5 pointer-events-none">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]" />
			</div>
			{/* Faint accent glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

			<div className="relative z-10 w-full max-w-7xl mx-auto">
				<div className="flex flex-col items-center justify-center mb-16 space-y-6">
					<h2 className="text-4xl md:text-6xl font-bold text-center text-foreground tracking-wide font-notable">
						Long Form Edits
					</h2>
					<div className="space-y-4 text-center max-w-4xl">
						<p className="text-xl text-muted-foreground leading-relaxed">
							Highly-Engaging Edits that make you stand out as an{" "}
							<span className="text-primary font-semibold">AUTHORITY</span> in your{" "}
							<span className="text-primary font-semibold">NICHE</span>
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Clean, smooth, and extremely captivating branding that fits your style
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project) => (
						<Card
							key={project.title}
							className="mb-8 break-inside-avoid rounded-2xl shadow-2xl bg-card/90 border-none transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_8px_40px_0_rgba(30,157,241,0.10)] overflow-hidden">
							<CardHeader className="p-0">
								<AspectRatio ratio={16 / 9} className="w-full">
									<iframe
										src={project.video}
										className="w-full h-full rounded-t-2xl aspect-video"
										allow="autoplay"
										allowFullScreen
										style={{ border: 0 }}
									/>
								</AspectRatio>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
