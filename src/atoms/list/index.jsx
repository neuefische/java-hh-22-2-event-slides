import Box from "@mui/material/Box";
import React from "react";

const List = ({ children, float }) => (
	<Box
		component="ul"
		sx={{ p: 0, my: "2rem", ...(float ? { display: "flex", flexFlow: "wrap" } : {}) }}
	>
		{children}
	</Box>
);

export default List;
