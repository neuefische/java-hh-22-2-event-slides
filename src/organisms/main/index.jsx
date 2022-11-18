import Box from "@mui/material/Box";
import React from "react";

const Main = ({ children }) => {
	return (
		<Box
			component="main"
			sx={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center" }}
		>
			{children}
		</Box>
	);
};

export default Main;
