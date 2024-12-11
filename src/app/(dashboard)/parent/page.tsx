import React from "react";

const ParentPage = () => {
	return (
		<div className="h-screen flex">
			{/* LEFT */}
			<div className="w-[14%] bg-red-400"></div>
			{/* RIGHT */}
			<div className="w-[86%] bg-green-400"></div>
		</div>
	);
};

export default ParentPage;
