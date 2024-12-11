
export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-screen flex">
			{/* LEFT */}
			<div className="w-[14%] bg-red-400"></div>
			{/* RIGHT */}
			<div className="w-[86%] bg-green-400"></div>
			{/* {children} */}
		</div>
	);
}
