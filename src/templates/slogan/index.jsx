import React from "react";
import SpineLogo from "../../atoms/spine-logo";
import Text from "../../atoms/text";
import Layer from "../../organisms/layer";
import Layout from "../../organisms/layout";

const Slogan = ({ title, slogan }) => {
	return (
		<Layout>
			<Layer>
				<SpineLogo color="#e8ebf0" />
			</Layer>
			<Layer>
				{title && (
					<Text variant="subtitle2" sx={{ textAlign: "center" }}>
						{title}
					</Text>
				)}
				<Text variant="h3" sx={{ textAlign: "center" }}>
					{slogan}
				</Text>
			</Layer>
		</Layout>
	);
};
export default Slogan;
