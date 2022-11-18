import React from "react";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";
import NemoText from "../../atoms/nemo-text";
import { coaches, stats, students } from "../../ions/data";
import bootcampImg from "../../ions/images/bootcamp.jpg";
import ImageText from "../image-text";
import CountUp from 'react-countup'

const Slide = () => (
	<ImageText
		image={bootcampImg}
		body={
			<List>
				<ListItem component="li">
					<NemoText>{students.length}</NemoText> Student*Innen
				</ListItem>
				<ListItem component="li">
					<NemoText>{coaches.length}</NemoText> Coaches
				</ListItem>
				{Object.entries(stats)
					.filter(([, { slide }]) => slide === "bootcamp")
					.map(([key, value]) => {
						return (
							<ListItem key={key} component="li">
								<NemoText>
									{value.prefix}
									<CountUp end={value.value} duration={0.75} />
								</NemoText>{" "}
								{value.label}
							</ListItem>
						);
					})}
			</List>
		}
		title="Revue"
		subtitle="Bootcamp"
	/>
);

export default Slide;
