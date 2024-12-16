import React from "react";

const Announcements = () => {
	return (
		<div className="bg-white p-4 rounded-md">
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold">Announcements</h1>
				<span className="text-xs text-gray-400">View All</span>
			</div>
			<div className="flex flex-col gap-4 mt-4">
				<div className="bg-aishubSkyLight rounded-md p-4">
					<div className="flex items-center justify-between">
						<h2 className="font-medium">
							Lorem, ipsum dolor sit amet adipisicing.
						</h2>
						<span className="text-xs text-gray-400 bg-white rounded-md p-1">
							2025-01-01
						</span>
					</div>
					<p className="text-sm text-gray-400 mt-1">
						Lorem ipsum dolor sit, amet ipsam illo corrupti mollitia assumenda
						nam sit deserunt? Magnam, accusamus.
					</p>
				</div>
				<div className="bg-aishubPurpleLight rounded-md p-4">
					<div className="flex items-center justify-between">
						<h2 className="font-medium">
							Lorem, ipsum dolor sit amet adipisicing.
						</h2>
						<span className="text-xs text-gray-400 bg-white rounded-md p-1">
							2025-01-01
						</span>
					</div>
					<p className="text-sm text-gray-400  mt-1">
						Lorem ipsum dolor sit, amet ipsam illo corrupti mollitia assumenda
						nam sit deserunt? Magnam, accusamus.
					</p>
				</div>
				<div className="bg-aishubYellowLight rounded-md p-4">
					<div className="flex items-center justify-between">
						<h2 className="font-medium">
							Lorem, ipsum dolor sit amet adipisicing.
						</h2>
						<span className="text-xs text-gray-400 bg-white rounded-md p-1">
							2025-01-01
						</span>
					</div>
					<p className="text-sm text-gray-400 mt-1">
						Lorem ipsum dolor sit, amet ipsam illo corrupti mollitia assumenda
						nam sit deserunt? Magnam, accusamus.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Announcements;
