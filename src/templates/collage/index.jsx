import Box from "@mui/material/Box";
import React from "react";
import Image from "next/image";
import Text from "../../atoms/text";
import Layer from "../../organisms/layer";
import Layout from "../../organisms/layout";

const Collage = ({ images, title, subtitle, body, objectFit }) => {
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
						top: "50%",
						right: 0,
						mt: "-11rem",
						width: "40rem",
						height: "22rem",
						display: "grid",
						gap: 1,
						gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(images.length))}, 1fr)`,
					}}
				>
					{images.map(({ id, ...image }) => (
						<Box
							key={id}
							sx={{
								position: "relative",
							}}
						>
							<Image {...image} objectFit={objectFit} layout="fill" />
						</Box>
					))}
				</Box>
			</Layer>
		</Layout>
	);
};
export default Collage;
