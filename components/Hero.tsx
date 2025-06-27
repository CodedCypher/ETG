import { Scene } from "@/components/hero-section";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
	return (
		<div className="relative min-h-svh w-screen text-white flex flex-col items-center justify-center p-8 pt-40 overflow-hidden pb-12">
			{/* Background gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>

			{/* Subtle pattern overlay */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
			</div>

			{/* Glow effect */}
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

			<div className="w-full max-w-7xl space-y-16 relative z-10">
				<div className="flex flex-col items-center text-center space-y-10">
					<div className="flex justify-center mb-6">
						<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-dark/80 border-2 text-accent3 text-sm font-medium shadow-sm">
							Open for freelance projects
						</span>
					</div>

					<div className="space-y-8 flex items-center justify-center flex-col pb-10">
						<h1 className="text-4xl md:text-5xl font-bold tracking-wide max-w-5xl font-notable leading-tight">
							Elevate Your Brand with <span className="text-primary">Personalised</span> Quality
							Editing
						</h1>

						<p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
							Crafting your videos with the intention of helping you{" "}
							<span className="text-primary font-semibold">grow your business</span>.
						</p>
					</div>
					<div className="relative">
						{/* Video container with enhanced styling */}
						<div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-xl blur-xl"></div>
						<video
							className="relative rounded-xl w-full aspect-video bg-[#13131f] flex items-center justify-center transition-all duration-300 max-w-4xl shadow-2xl border border-border/30"
							controls>
							<source
								src="https://videos.pexels.com/video-files/18453668/18453668-uhd_2560_1440_30fps.mp4"
								type="video/mp4"
							/>
							Sorry, your browser does not support embedded videos.
						</video>
					</div>
				</div>
			</div>

			<div className="absolute inset-0">
				<Scene />
			</div>
		</div>
	);
}
