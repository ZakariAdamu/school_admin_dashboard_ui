"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

// implement dynamic imports for optimization, lazy loading
const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
	loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
	loading: () => <h1>Loading...</h1>,
});
const ClassForm = dynamic(() => import("./forms/ClassForm"), {
	loading: () => <h1>Loading...</h1>,
});
const LessonForm = dynamic(() => import("./forms/LessonForm"), {
	loading: () => <h1>Loading...</h1>,
});
const ExamForm = dynamic(() => import("./forms/ExamForm"), {
	loading: () => <h1>Loading...</h1>,
});
const ResultForm = dynamic(() => import("./forms/ResultForm"), {
	loading: () => <h1>Loading...</h1>,
});
const AttendanceForm = dynamic(() => import("./forms/AttendanceForm"), {
	loading: () => <h1>Loading...</h1>,
});
const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
	loading: () => <h1>Loading...</h1>,
});
const EventForm = dynamic(() => import("./forms/EventForm"), {
	loading: () => <h1>Loading...</h1>,
});
const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"), {
	loading: () => <h1>Loading...</h1>,
});
const ParentForm = dynamic(() => import("./forms/ParentForm"), {
	loading: () => <h1>Loading...</h1>,
});
const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"), {
	loading: () => <h1>Loading...</h1>,
});

// render various forms that matches the given key: teacher, student, class, event, etc.
const forms: {
	[key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
	teacher: (type, data) => <TeacherForm type={type} data={data} />,
	student: (type, data) => <StudentForm type={type} data={data} />,
	class: (type, data) => <ClassForm type={type} data={data} />,
	subject: (type, data) => <SubjectForm type={type} data={data} />,
	lesson: (type, data) => <LessonForm type={type} data={data} />,
	exam: (type, data) => <ExamForm type={type} data={data} />,
	result: (type, data) => <ResultForm type={type} data={data} />,
	attendance: (type, data) => <AttendanceForm type={type} data={data} />,
	event: (type, data) => <EventForm type={type} data={data} />,
	announcement: (type, data) => <AnnouncementForm type={type} data={data} />,
	parent: (type, data) => <ParentForm type={type} data={data} />,
	assignment: (type, data) => <AssignmentForm type={type} data={data} />,
};

const FormModal = ({
	table,
	type,
	data,
	id,
}: {
	table:
		| "teacher"
		| "student"
		| "parent"
		| "subject"
		| "class"
		| "lesson"
		| "exam"
		| "assignment"
		| "result"
		| "attendance"
		| "event"
		| "announcement";
	type: "create" | "update" | "delete";
	data?: any;
	id?: number;
}) => {
	const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
	const bgColor =
		type === "create"
			? "bg-aishubYellow"
			: type === "update"
			? "bg-aishubSky"
			: "bg-aishubPurple";

	const [open, setOpen] = useState(false);

	const Form = () => {
		return type === "delete" && id ? (
			<form className="p-4 flex flex-col gap-4">
				<span className="text-center font-medium">
					All data will be lost. Are you sure you want to delete this {table}?
				</span>
				<button className="bg-red-500 text-white py-2 px-4 rounded-md border-none w-max self-center">
					Delete
				</button>
			</form>
		) : type === "create" || type === "update" ? (
			forms[table](type, data)
		) : (
			"Form not found!"
		);
	};
	return (
		<>
			<button
				className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
				onClick={() => setOpen(true)}
			>
				<Image src={`/${type}.png`} alt="" width={16} height={16} />
			</button>
			{open && (
				<div className="w-screen h-fit md:h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
					<div className="bg-white p-4 my-4 rounded-md content-center relative w-[80%] md:w-[60%] lg:w-[50%] xl:w-[50%] 2xl:w-[40%]">
						<Form />
						<div
							className="absolute top-4 right-4 cursor-pointer"
							onClick={() => setOpen(false)}
						>
							<Image src="/close.png" alt="" width={14} height={14} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default FormModal;
