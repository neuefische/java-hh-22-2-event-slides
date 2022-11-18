import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect } from "react";
import useSound from "use-sound";
import SpineLogo from "../../atoms/spine-logo";
import Text from "../../atoms/text";
import Layer from "../../organisms/layer";
import Layout from "../../organisms/layout";
import soundLogoAudio from "../../ions/sounds/sound-logo.wav";

const dropHat = keyframes`
	0% {
		transform: translate3d(50%, -50vh, 0) rotate3d(0, 0, 1, 0deg);
	}
	100% {
		transform: translate3d(50%, -50%, 0) rotate3d(0, 0, 1, 20deg);
	}

`;

export const Hat = props => (
	<svg {...props} viewBox="0 0 53 47">
		<g fill="none" fillRule="evenodd">
			<g fill="#FF5A36">
				<path d="M29.105 1.431l22.77 11.52a1.965 1.965 0 0 1 .02 3.487L29.167 28.275a5.767 5.767 0 0 1-5.332 0L1.104 16.438a1.965 1.965 0 0 1 .02-3.488l22.77-11.519a5.767 5.767 0 0 1 5.211 0z" />
				<path d="M10.938 25.794l12.242 7.35a5.768 5.768 0 0 0 5.87.045l12.658-7.34a1.929 1.929 0 0 1 2.646.721c.092.162.16.335.204.516l1.505 6.304a1.963 1.963 0 0 1-1.012 2.206L28.777 43.87a5.767 5.767 0 0 1-5.423-.102L7.189 34.776a1.964 1.964 0 0 1-.905-2.325l1.822-5.587a1.934 1.934 0 0 1 2.832-1.07z" />
			</g>
			<path
				d="M26.62 13.77c2.063 1.997 8.664 7.407 8.87 11.106.139 2.466.208 6.697.208 12.694m-.083.068c-.558 1.49-1.59 3.47-3.095 5.94m3.117-5.938c.558 1.49 1.604 2.582 3.14 3.276"
				stroke="#193251"
				strokeLinecap="round"
				strokeWidth="5.299"
			/>
		</g>
	</svg>
);

export const StyledHat = styled(Hat)`
	position: absolute;
	top: 0;
	right: 0;
	width: 2rem;
	animation: ${dropHat} 4.1s ease-in-out forwards;
`;

const Cover = ({ title, subtitle, graduate }) => {
	const [play, { stop }] = useSound(soundLogoAudio, { volume: 0.2 });

	useEffect(() => {
		if (graduate) {
			play();
		}
		return () => {
			stop();
		};
	}, [play, stop, graduate]);

	return (
		<Layout>
			<Layer>
				<SpineLogo color="#e8ebf0" />
			</Layer>
			<Layer>
				<Text variant="h3" sx={{ position: "relative", textAlign: "center" }}>
					{title}
					{graduate && <StyledHat />}
				</Text>
				{subtitle && (
					<Text variant="h4" sx={{ textAlign: "center", mt: "1rem" }}>
						{subtitle}
					</Text>
				)}
			</Layer>
		</Layout>
	);
};
export default Cover;
