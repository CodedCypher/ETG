"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InfiniteMovingThumbnails } from "@/components/ui/infinite-moving-thumbnails";
gsap.registerPlugin(ScrollTrigger);

// Sample thumbnail data - replace with your actual thumbnails
const thumbnails = [
	{
		id: "1",
		image: "thumbnail1.png",
	},
	{
		id: "2",
		image: "thumbnail2.png",
	},
	{
		id: "3",
		image: "thumbnail3.png",
	},
	{
		id: "4",
		image: "thumbnail4.png",
	},
	{
		id: "5",
		image: "thumbnail5.png",
	},
	{
		id: "6",
		image: "thumbnail6.png",
	},
];

export default function Thumbnails() {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!sectionRef.current) return;
		gsap.fromTo(
			sectionRef.current,
			{ y: 60, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1.1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 85%",
				},
			}
		);
	}, []);

	return (
		<div className="relative w-full text-white overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/40 to-black"></div>

			{/* Subtle dot pattern */}
			<div className="absolute inset-0 opacity-4">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
			</div>

			{/* Accent glows */}
			<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
			<div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

			<div ref={sectionRef} className="relative z-10 w-full mx-auto py-24 px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-wide font-notable">
						Thumbnail Design
					</h2>
					<div className="space-y-4 max-w-4xl mx-auto">
						<p className="text-xl text-muted-foreground leading-relaxed">
							Eye-catching thumbnails that separates you from your{" "}
							<span className="text-primary font-semibold">competition</span>
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Have your own unique style that make people remember you while getting those juicy{" "}
							<span className="text-primary font-semibold">clicks</span>
						</p>
					</div>
				</div>
				<div className="relative">
					{/* Thumbnails container glow */}
					<div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-2xl blur-2xl"></div>
					<InfiniteMovingThumbnails
						thumbnails={thumbnails}
						direction="left"
						className="my-8 mx-auto relative z-10"
						baseSpeed={28}
					/>
				</div>
			</div>
		</div>
	);
}
