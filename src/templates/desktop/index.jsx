import styled from "@emotion/styled";
import React from "react";
import Desktop from "../../ions/images/frame_macbook.svg";

const aspectRatio = 1050 / 1680;
const phoneSize = 818;
const StyledDesktopFrame = styled(Desktop)`
	position: absolute;
	bottom: 0;
	left: 0;
	transform: translate(-4%, -28%);
`

const StyledVideoWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: ${phoneSize}px;
	height: ${aspectRatio * phoneSize}px;
	transform: translate(7.2%, -41.8%);
	background: #000;
	box-shadow: 0 0 0 0.05rem hsl(0, 0%, 50%);
`;
const StyledVideo = styled.video`
	position: absolute;
	z-index: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;
const Phone = ({video, themeColor}) => {

	return (
		<>
			<StyledVideoWrapper style={{"--theme-color": themeColor}}>
				<StyledVideo autoPlay loop muted height={1024} width={768}>
					<source src={video} type="video/mp4"/>
				</StyledVideo>
			</StyledVideoWrapper>
			<StyledDesktopFrame/>
		</>
	);
};
export default Phone;
