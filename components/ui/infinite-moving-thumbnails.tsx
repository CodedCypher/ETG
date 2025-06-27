"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingThumbnails = ({
	thumbnails,
	direction = "left",
	baseSpeed = 40,
	pauseOnHover = true,
	className,
}: {
	thumbnails: {
		id: string;
		image: string;
		title: string;
		category: string;
	}[];
	direction?: "left" | "right";
	baseSpeed?: number;
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty("--animation-direction", "forwards");
			} else {
				containerRef.current.style.setProperty("--animation-direction", "reverse");
			}
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			containerRef.current.style.setProperty("--animation-duration", `${baseSpeed}s`);
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}>
				{thumbnails.map((thumbnail) => (
					<li
						className="relative w-[280px] max-w-full shrink-0 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 md:w-[320px]"
						key={thumbnail.id}>
						<div className="relative group">
							<img
								src={thumbnail.image}
								alt={thumbnail.title}
								className="w-full h-[180px] object-cover rounded-2xl"
								draggable={false}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
								<div className="absolute bottom-4 left-4 right-4 text-white">
									<h3 className="font-semibold text-sm mb-1">{thumbnail.title}</h3>
									<p className="text-xs text-gray-300">{thumbnail.category}</p>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
