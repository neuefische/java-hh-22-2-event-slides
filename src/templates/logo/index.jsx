import { useTheme } from "@mui/material/styles";
import React from "react";
import Layer from "../../organisms/layer";
import Layout from "../../organisms/layout";
import NeueFischeLogo from "../../atoms/neue-fische-logo";

const Logo = () => {
	const theme = useTheme();
	return (
		<Layout>
			<Layer backgroundColor={theme.palette.secondary.main}>
				<NeueFischeLogo color={theme.palette.primary.main} size="10rem" />
			</Layer>
		</Layout>
	);
};
export default Logo;
