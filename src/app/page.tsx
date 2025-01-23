"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Homepage = () => {
	const router = useRouter();

	useEffect(() => {
		router.push("/admin"); // Replace with your desired URL
	}, []);

	return <div>Redirecting...</div>; // Fallback content during the redirect

	return <div className="">Homepage</div>;
};

export default Homepage;
