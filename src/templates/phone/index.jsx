import styled from "@emotion/styled";
import React from "react";
import IPhone from "../../ions/images/frame_iphone.svg";

const aspectRatio = 896 / 414;
const phoneSize = 414;
const StyledPhoneFrame = styled(IPhone)`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 470px;
	height: 940px;
	transform: translate(44%, -8%);
`

const StyledVideoWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: ${phoneSize}px;
	height: ${aspectRatio * phoneSize}px;
	transform: translate(56.9%, -11%);
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
				<StyledVideo autoPlay loop muted height={896} width={414}>
					<source src={video} type="video/mp4"/>
				</StyledVideo>
			</StyledVideoWrapper>
			<StyledPhoneFrame/>
		</>
	);
};
export default Phone;
