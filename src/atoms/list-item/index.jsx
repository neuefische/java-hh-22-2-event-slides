import React from "react";
import Text from "../text";

const ListItem = ({ children }) => (
	<Text
		component="li"
		sx={{ pb: "0.5rem", pr: "0.5rem", fontWeight: "bolder", fontSize: "1.1rem" }}
	>
		{children}
	</Text>
);
export default ListItem;
