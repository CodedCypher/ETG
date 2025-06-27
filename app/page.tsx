import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Thumbnails from "@/components/Thumbnails";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
	return (
		<div className="overflow-x-hidden">
			<Navbar />
			<Hero />
			<section id="portfolio">
				<Portfolio />
			</section>
			<section id="thumbnails">
				<Thumbnails />
			</section>
			<section id="contact">
				<Contact />
			</section>
			<Footer />
		</div>
	);
}
