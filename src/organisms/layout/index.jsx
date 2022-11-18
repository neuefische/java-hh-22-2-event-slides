import React from "react";
import Footer from "../footer";
import Header from "../header";
import Main from "../main";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
