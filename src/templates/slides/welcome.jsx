import React from "react";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";
import NemoText from "../../atoms/nemo-text";
import Text from "../../atoms/text";
import course from "../../ions/data/course";
import welcomeImg from "../../ions/images/welcome.jpg";
import ImageText from "../image-text";

const Slide = () => (
	<ImageText
		image={welcomeImg}
		body={
			<>
				<NemoText variant="h6">Das Event wird aufgezeichnet!</NemoText>
				<Text variant="h6">Bitte benennt euch in Zoom um:</Text>
				<List>
					<ListItem component="li">
						<NemoText>Unternehmen:</NemoText> [ACME Corp] Max Muster
					</ListItem>
					<ListItem>
						<NemoText>Alumni:</NemoText> [Alumni] Franziska Muster
					</ListItem>
					<ListItem>
						<NemoText>Trainee:</NemoText> [Trainee] Julia Muster
					</ListItem>
					<ListItem>
						<NemoText>Freunde & Familie, Gäste:</NemoText> [Gast] Peter Muster
					</ListItem>
				</List>
				<Text>...und bitte schaltet euch stumm, wenn ihr selbst nicht sprecht</Text>
			</>
		}
		title="Abschluss"
		subtitle={course.name}
	/>
);

export default Slide;
