import styled from "@emotion/styled";
import React from "react";
import IPadPortrait from "../../ions/images/frame_ipad_portrait.svg";

const aspectRatio = 1024 / 768;
const phoneSize = 600;
const StyledTabletPortraitFrame = styled(IPadPortrait)`
	position: absolute;
	bottom: 0;
	left: 0;
	transform: translate(14.8%, -2.7%);
`

const StyledVideoWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: ${phoneSize}px;
	height: ${aspectRatio * phoneSize}px;
	transform: translate(20%, -20%);
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
			<StyledTabletPortraitFrame/>
		</>
	);
};
export default Phone;
