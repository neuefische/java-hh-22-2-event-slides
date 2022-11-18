import React from "react";
import students from "../../ions/data/students";
import Collage from "../collage";

const Slide = () => (
	<Collage
		images={students.map((student, index) => ({
			id: index,
			src: `/images/github/${student.id}.png`,
		}))}
		title="3 Monate visualisiert"
		objectFit="contain"
	/>
);

export default Slide;
