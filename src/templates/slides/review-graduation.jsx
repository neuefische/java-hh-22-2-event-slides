import React from "react";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";
import NemoText from "../../atoms/nemo-text";
import { stats } from "../../ions/data";
import graduationImg from "../../ions/images/graduation.jpg";
import ImageText from "../image-text";
import CountUp from "react-countup";

const Slide = () => (
	<ImageText
		image={graduationImg}
		body={
			<List>
				{Object.entries(stats)
					.filter(([, { slide }]) => slide === "graduation")
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
		subtitle="Capstone"
	/>
);

export default Slide;
