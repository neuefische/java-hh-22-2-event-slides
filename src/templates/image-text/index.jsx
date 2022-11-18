import Box from "@mui/material/Box";
import React from "react";
import { StyledImage } from "../../atoms/image/styled";
import Text from "../../atoms/text";
import Layer from "../../organisms/layer";
import Layout from "../../organisms/layout";

const ImageText = ({ image, title, subtitle, body, objectPosition, objectFit }) => {
	return (
		<Layout>
			<Layer>
				<Box sx={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "12rem" }}>
					<StyledImage
						{...image}
						objectPosition={objectPosition}
						objectFit={objectFit}
						layout="fill"
					/>
				</Box>
				<Box sx={{ px: "8rem", width: "100%", height: "100%" }}>
					<Text variant="h4" sx={{ pb: "1rem" }}>
						{title}
					</Text>
					<Text variant="subtitle2" sx={{ pb: "1rem" }}>
						{subtitle}
					</Text>
					<Text>{body}</Text>
				</Box>
			</Layer>
		</Layout>
	);
};
export default ImageText;
