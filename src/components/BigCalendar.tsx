"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
	const [view, setView] = useState<View>(Views.WORK_WEEK);

	const handleOnChangeView = (selectedView: View) => {
		setView(selectedView);
	};
	return (
		<Calendar
			localizer={localizer}
			events={calendarEvents}
			startAccessor="start"
			endAccessor="end"
			views={["work_week", "day"]}
			view={view}
			style={{ height: "98%" }}
			onView={handleOnChangeView}
			min={new Date(2024, 11, 24, 8, 0, 0)} //school opening time for the day, 8:00AM
			max={new Date(2025, 1, 6, 18, 0, 0)} // closing time for the day 5 or 6:00PM
		/>
	);
};

export default BigCalendar;
