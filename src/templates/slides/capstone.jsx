import React from "react";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";
import Phone from "../phone";
import TabletPortrait from "../tablet-portrait";
import Layout from "../../organisms/layout";
import Layer from "../../organisms/layer";
import Box from "@mui/material/Box";
import Text from "../../atoms/text";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import TabletLandscape from "../tablet-landscape";
import Desktop from "../desktop";

const Capstone = ({student}) => {

	const video = () => {
		const props = {
			video: `/videos/${student.id}.mov`,
			themeColor: student.ci?.themeColor,
		}

		switch (student.device) {
			case'tablet_portrait':
				return <TabletPortrait {...props}/>
			case 'tablet_landscape':
				return <TabletLandscape {...props}/>
			case 'desktop':
				return <Desktop {...props}/>
			default:
				return <Phone {...props}/>
		}
	}

	return (
		<Layout>
			<Layer>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: 0,
						mt: "-10rem",
						ml: "4rem",
						pr: "2rem",
						width: "calc(100vw - 100vh)",
						height: "20rem",
					}}
				>
					<Text variant="h4" sx={{pb: "1rem"}}>
						{student.app}{" "}
					</Text>
					{student.domain && (
						<Box
							href={`https://${student.domain}`}
							rel="noreferrer"
							target="_blank"
							component="a"
							sx={{color: "currentColor", textDecoration: "none"}}
						>
							<Text variant="subtitle1" sx={{pb: "1rem"}}>
								{student.domain}
							</Text>
						</Box>
					)}
					{student.name && (
						<Text variant="subtitle2" sx={{pb: "1rem"}}>
							{student.name}
						</Text>
					)}
					{student.ci?.colors && (
						<AvatarGroup
							sx={{justifyContent: "flex-end", ml: "0.5rem"}}
							variant="circular"
							spacing={20}
						>
							{Object.entries(student.ci?.colors).map(([key, value]) => (
								<Avatar
									key={key}
									variant="circular"
									sx={{
										bgcolor: value,
										height: "2rem",
										width: "2rem",
									}}
								>
									{" "}
								</Avatar>
							))}
						</AvatarGroup>
					)}
					<Text>
						<List float>
							{student.techStack.map(item => (
								<ListItem key={item}>{item}</ListItem>
							))}
						</List>
					</Text>
				</Box>
				<Box
					sx={{
						position: "absolute",
						right: 0,
						width: "100vh",
						height: "100vh",
					}}
				>
					{video()}
				</Box>
			</Layer>
		</Layout>
	)
};
export default Capstone;
