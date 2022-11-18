import dynamic from "next/dynamic";
import React from "react";
import { useNavigation } from "../../hooks/navigation";
import { students } from "../../ions/data";

const Agenda = dynamic(() => import("../../templates/slides/agenda"));
const Capstone = dynamic(() => import("../../templates/slides/capstone"));
const Congrats = dynamic(() => import("../../templates/slides/congrats"));
const Dalia = dynamic(() => import("../../templates/slides/dalia"));
const Laudatio = dynamic(() => import("../../templates/slides/laudatio"));
const NeueFische = dynamic(() => import("../../templates/slides/neue-fische"));
const Pitches = dynamic(() => import("../../templates/slides/pitches"));
const Review = dynamic(() => import("../../templates/slides/review"));
const ReviewBootcamp = dynamic(() => import("../../templates/slides/review-bootcamp"));
const ReviewGithub = dynamic(() => import("../../templates/slides/review-github"));
const ReviewGraduation = dynamic(() => import("../../templates/slides/review-graduation"));
const ReviewStudents = dynamic(() => import("../../templates/slides/review-students"));
const Student = dynamic(() => import("../../templates/slides/student"));
const Team = dynamic(() => import("../../templates/slides/team"));
const TeamCoaches = dynamic(() => import("../../templates/slides/team-coaches"));
const TeamStaff = dynamic(() => import("../../templates/slides/team-staff"));
const TechStack = dynamic(() => import("../../templates/slides/tech-stack"));
const ThankYou = dynamic(() => import("../../templates/slides/thank-you"));
const Welcome = dynamic(() => import("../../templates/slides/welcome"));

/**
 * Slides in order
 * @type {(React.ComponentClass<{}>|React.FunctionComponent<{}>|(function()))[]}
 */
const slides = [
	Welcome,
	NeueFische,
	Agenda,
	Dalia,
	Laudatio,
	ReviewBootcamp,
	Review,
	// ReviewStudents,
	TechStack,
	ReviewGithub,
	ReviewGraduation,
	Team,
	TeamCoaches,
	TeamStaff,
	Congrats,
	Pitches,
	...students
		.sort((a, b) => {
			if (a.id > b.id) {
				return 1;
			} else if (a.id < b.id) {
				return -1;
			}
			return 0;
		})
		.flatMap(student => [
			() => <Student student={student} />,
			() => <Capstone student={student} />,
		]),
	ThankYou,
];

const Page = () => {
	const page = useNavigation(slides.length);
	const Slide = slides[page - 1];

	return <Slide />;
};

export default Page;

export const getServerSideProps = async () => {
	return { props: {} };
};
