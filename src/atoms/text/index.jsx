import Typography from "@mui/material/Typography";
import React from "react";

const Text = ({ children, ...rest }) => (
	<Typography {...rest} component="div">
		{children}
	</Typography>
);

export default Text;
