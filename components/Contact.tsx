"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Twitter } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: "",
	});
	const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
	const [error, setError] = useState("");

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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("sending");
		setError("");
		try {
			const res = await fetch("https://formspree.io/f/mjkrpzap", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: `${form.firstName} ${form.lastName}`,
					email: form.email,
					subject: form.subject,
					message: form.message,
				}),
			});
			if (res.ok) {
				setStatus("success");
				setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
			} else {
				setStatus("error");
				setError("Something went wrong. Please try again.");
			}
		} catch {
			setStatus("error");
			setError("Something went wrong. Please try again.");
		}
	};

	return (
		<div className="relative min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black"></div>

			{/* Subtle wave pattern */}
			<div className="absolute inset-0 opacity-3">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
			</div>

			{/* Accent glows */}
			<div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/8 rounded-full blur-3xl"></div>
			<div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

			<div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					{/* Left Column - Contact Information */}
					<div className="space-y-8">
						<div>
							<h1 className="text-4xl font-bold text-foreground mb-4 font-notable">Contact Us</h1>
							<p className="text-lg text-muted-foreground leading-relaxed">
								We are available for questions, feedback, or collaboration opportunities. Let us
								know how we can help!
							</p>
						</div>

						<div>
							<h2 className="text-2xl font-bold text-foreground mb-6">Contact Details</h2>
							<div className="space-y-4">
								<div className="flex items-center">
									<span className="font-semibold text-foreground mr-2">Email:</span>
									<a
										href="mailto:martinaccnew2024@gmail.com"
										className="text-muted-foreground hover:text-foreground underline">
										martinaccnew2024@gmail.com
									</a>
								</div>
								<div className="flex items-center">
									<span className="font-semibold text-foreground mr-2">Instagram:</span>
									<a
										href="https://www.instagram.com/mrtn_tnd/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-foreground underline">
										@mrtn_tnd
									</a>
								</div>
								<div className="flex items-center">
									<span className="font-semibold text-foreground mr-2">Twitter:</span>
									<a
										href="https://x.com/TMartinMedia"
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-foreground underline">
										@TMartinMedia
									</a>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div className="flex space-x-6">
							<a
								href="mailto:martinaccnew2024@gmail.com"
								className="text-muted-foreground hover:text-primary transition-colors"
								aria-label="Email">
								<Mail className="h-6 w-6" />
							</a>
							<a
								href="https://www.instagram.com/mrtn_tnd/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-pink-500 transition-colors"
								aria-label="Instagram">
								<Instagram className="h-6 w-6" />
							</a>
							<a
								href="https://x.com/TMartinMedia"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-blue-500 transition-colors"
								aria-label="Twitter">
								<Twitter className="h-6 w-6" />
							</a>
						</div>
					</div>

					{/* Right Column - Contact Form */}
					<div className="relative">
						{/* Form container glow */}
						<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 rounded-2xl blur-2xl"></div>
						<div className="relative bg-card/40 border border-border/30 rounded-2xl shadow-xl backdrop-blur-xl p-8">
							<form onSubmit={handleSubmit} className="space-y-6">
								{/* First Name and Last Name */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="firstName" className="text-sm font-medium text-foreground">
											First Name
										</Label>
										<Input
											id="firstName"
											name="firstName"
											type="text"
											placeholder="First Name"
											value={form.firstName}
											onChange={handleChange}
											className="w-full"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="lastName" className="text-sm font-medium text-foreground">
											Last Name
										</Label>
										<Input
											id="lastName"
											name="lastName"
											type="text"
											placeholder="Last Name"
											value={form.lastName}
											onChange={handleChange}
											className="w-full"
										/>
									</div>
								</div>

								{/* Email */}
								<div className="space-y-2">
									<Label htmlFor="email" className="text-sm font-medium text-foreground">
										Email
									</Label>
									<Input
										id="email"
										name="email"
										type="email"
										placeholder="Email"
										value={form.email}
										onChange={handleChange}
										className="w-full"
									/>
								</div>

								{/* Subject */}
								<div className="space-y-2">
									<Label htmlFor="subject" className="text-sm font-medium text-foreground">
										Subject
									</Label>
									<Input
										id="subject"
										name="subject"
										type="text"
										placeholder="Subject"
										value={form.subject}
										onChange={handleChange}
										className="w-full"
									/>
								</div>

								{/* Message */}
								<div className="space-y-2">
									<Label htmlFor="message" className="text-sm font-medium text-foreground">
										Message
									</Label>
									<Textarea
										id="message"
										name="message"
										placeholder="Type your message here."
										rows={6}
										value={form.message}
										onChange={handleChange}
										className="w-full resize-none"
									/>
								</div>

								{/* Status Messages */}
								{status === "success" && (
									<div className="text-green-600 text-sm">Message sent successfully!</div>
								)}
								{status === "error" && <div className="text-red-600 text-sm">{error}</div>}

								{/* Submit Button */}
								<Button
									type="submit"
									disabled={status === "sending"}
									className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base font-medium">
									{status === "sending" ? "Sending..." : "Send Message"}
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
