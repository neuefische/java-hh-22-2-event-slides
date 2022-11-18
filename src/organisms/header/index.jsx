import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import React from "react";
import SpineLogo from "../../atoms/spine-logo";

const Header = () => {
	const theme = useTheme();
	return (
		<Box
			component="header"
			sx={{
				display: "flex",
				justifyContent: "flex-end",
				px: "3rem",
				py: "2rem",
				position: "relative",
				zIndex: 1,
			}}
		>
			<SpineLogo color={theme.palette.primary.main} size="2rem" />
		</Box>
	);
};

export default Header;
