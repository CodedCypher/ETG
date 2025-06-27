"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

const LoaderContext = createContext<{ finishLoading: () => void; isLoading: boolean } | undefined>(
	undefined
);

export function useLoader() {
	const ctx = useContext(LoaderContext);
	if (!ctx) throw new Error("useLoader must be used within LoaderProvider");
	return ctx;
}

function Loader() {
	return (
		<div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700">
			<div className="relative mb-8">
				{/* <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 bg-primary/30" /> */}
				<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid" />
			</div>
			<span className="text-2xl font-notable tracking-widest animate-fade-in">EGT MEDIA</span>
			<span className="mt-2 text-sm text-muted-foreground animate-fade-in">Loading...</span>
		</div>
	);
}

export function LoaderProvider({ children }: { children: React.ReactNode }) {
	const [loading, setLoading] = useState(true);

	const finishLoading = useCallback(() => {
		setTimeout(() => setLoading(false), 500); // smooth fade
	}, []);

	// Disable scroll when loading is true
	React.useEffect(() => {
		if (loading) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [loading]);

	return (
		<LoaderContext.Provider value={{ finishLoading, isLoading: loading }}>
			{loading && <Loader />}
			<div
				className={
					loading ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-700"
				}>
				{children}
			</div>
		</LoaderContext.Provider>
	);
}
