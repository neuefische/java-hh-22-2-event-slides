import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { fontFaces, globalStyles } from "../ions/styles";
import "../templates/slides/review.css";

const styles = (
	<>
		<Global styles={globalStyles} />
		<Global styles={fontFaces} />
	</>
);
const headline = {
	fontWeight: 600,
	letterSpacing: "initial",
};

const colors = {
	nemo: "#FF4A11",
	granite: "#252629",
	water: "#EEF0F4",
	foam: "#E5E5E5",
	sand: "#EFECE7",
};
const theme = createTheme({
	palette: {
		primary: {
			main: colors.nemo,
		},
		secondary: {
			main: colors.granite,
		},
		background: {
			default: "#f5f6f8",
		},
		colors,
	},
	typography: {
		fontFamily: "Inter, sans-serif",
		h1: headline,
		h2: headline,
		h3: headline,
		h4: headline,
		h5: headline,
		h6: headline,
		subtitle1: { ...headline, color: "#7589A2" },
		subtitle2: { ...headline, color: "#7589A2" },
	},
	components: {
		MuiAvatarGroup: {
			styleOverrides: {
				root: {
					"& .MuiAvatar-root": {
						borderColor: colors.granite,
					},
				},
			},
		},
	},
});

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{styles}
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
