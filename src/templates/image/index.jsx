import Box from "@mui/material/Box";
import React from "react";
import { StyledImage } from "../../atoms/image/styled";
import Text from "../../atoms/text";
import Layer from "../../organisms/layer";
import Layout from "../../organisms/layout";

const Image = ({ image, title, subtitle, body, objectFit, objectPosition }) => {
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
						width: "17rem",
						height: "20rem",
					}}
				>
					<Text variant="h4" sx={{ pb: "1rem" }}>
						{title}
					</Text>
					{subtitle && (
						<Text variant="subtitle2" sx={{ pb: "1rem" }}>
							{subtitle}
						</Text>
					)}
					{body && <Text>{body}</Text>}
				</Box>
				<Box
					sx={{
						position: "absolute",
						top: "55%",
						right: 20,
						mt: "-11rem",
						width: "40rem",
						height: "22rem",
					}}
				>
					<StyledImage
						{...image}
						objectPosition={objectPosition}
						objectFit={objectFit}
						layout="fill"
					/>
				</Box>
			</Layer>
		</Layout>
	);
};
export default Image;
