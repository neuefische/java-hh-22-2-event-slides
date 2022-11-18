import Box from "@mui/material/Box";
import React from "react";

const NemoText = ({ children }) => (
	<Box
		sx={theme => ({
			display: "inline-block",
			color: theme.palette.primary.main,
		})}
	>
		{children}
	</Box>
);

export default NemoText;
