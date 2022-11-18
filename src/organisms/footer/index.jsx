import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
	const {
		query: { page },
	} = useRouter();
	return (
		<Box
			component="footer"
			sx={{ display: "flex", justifyContent: "flex-end", px: "3rem", py: "2rem" }}
		>
			{page}
		</Box>
	);
};

export default Footer;
