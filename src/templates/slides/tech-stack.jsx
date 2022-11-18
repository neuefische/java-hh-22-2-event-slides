import React from "react";
import Layer from "../../organisms/layer";
import Layout from "../../organisms/layout";
import Image from 'next/image'
import Text from "../../atoms/text";

const Slide = () => (
	<Layout>
		<Layer>
			<Text variant="h4" sx={{ padding: "1rem" }}>
				Tech-Stack
			</Text>
			<Image
				src="/images/tech-stack/technology.png"
				alt="tech-stack"
				width={1110}
				height={512}
			/>
		</Layer>
	</Layout>
);

export default Slide;
